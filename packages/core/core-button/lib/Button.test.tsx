/* eslint-disable jest/no-conditional-expect */
import { render } from '@evergreen-ui/utils-ui-testing';
import SaveIcon from '@material-ui/icons/Save';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from '.';

describe('Button', () => {
  const onClick = jest.fn();
  const onMouseUp = jest.fn();
  const onMouseDown = jest.fn();
  const onMouseLeave = jest.fn();

  const LABEL = 'Evergreen button' as string;
  const classes = {
    icon: {
      root: 'iconRoot',
      disabled: 'iconDisabled',
      label: 'iconLabel',
      sizeSmall: 'iconSizeSmall',
      edgeStart: 'iconEdgeStart',
      edgeEnd: 'iconEdgeEnd',
    },
    regular: {
      root: 'regularRoot',
      label: 'regularLabel',
      contained: 'regularContained',
      outlined: 'regularOutlined',
      focusVisible: 'regularFocusVisible',
      disabled: 'regularDisabled',
      text: 'regularText',
      sizeSmall: 'regularSizeSmall',
      sizeLarge: 'regularSizeLarge',
      textSizeSmall: 'regularTextSmall',
      textSizeLarge: 'regularTextLarge',
    },
  };

  const renderButton = (props: { [selector: string]: unknown } = {}) => {
    render(
      <Button
        label={LABEL}
        onClick={onClick}
        {...props}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
      />
    );
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it.each`
    variant
    ${undefined}
    ${'text'}
    ${'outlined'}
    ${'contained'}
    ${'contained'}
    ${'icon'}
  `(
    'renders a(n) $variant button and calls the onClick, onMouseUp, onMouseDown, onMouseLeave prop when clicked or hovered off',
    ({ variant }) => {
      const isIconButton = variant === 'icon';
      renderButton({
        variant,
        children: isIconButton ? <SaveIcon /> : undefined,
      });
      const button = screen.getByRole('button');

      userEvent.hover(button);
      userEvent.click(button);
      userEvent.unhover(button);

      if (!isIconButton) {
        expect(button).toHaveTextContent(LABEL);
        expect(button).toHaveClass(`MuiButton-${variant || 'text'}`);
      } else {
        expect(button).not.toHaveTextContent(LABEL);
        expect(button).toContainElement(button.querySelector('svg'));
      }
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onMouseUp).toHaveBeenCalledTimes(1);
      expect(onMouseDown).toHaveBeenCalledTimes(1);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    }
  );

  it.each`
    variant
    ${undefined}
    ${'text'}
    ${'outlined'}
    ${'contained'}
    ${'contained'}
    ${'icon'}
  `(
    'does not invoke onClick when disabled is true for a $variant button',
    ({ variant }) => {
      renderButton({
        variant,
        children: variant === 'icon' ? <SaveIcon /> : undefined,
        disabled: true,
      });
      expect(() => userEvent.click(screen.getByRole('button'))).toThrow();

      expect(onClick).not.toHaveBeenCalled();
    }
  );

  it('renders the label when passed as a children prop and not a label for non-icon based buttons', () => {
    renderButton({
      label: undefined,
      children: LABEL,
    });
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent(LABEL);
  });

  it.each`
    message                                     | props                                     | expectedArray
    ${'enabled, undefined variant'}             | ${{ variant: undefined }}                 | ${[]}
    ${'enabled, undefined variant, size small'} | ${{ variant: undefined, size: 'small' }}  | ${[classes.regular.sizeSmall, classes.regular.textSizeSmall]}
    ${'enabled, undefined variant, size large'} | ${{ variant: undefined, size: 'large' }}  | ${[classes.regular.sizeLarge, classes.regular.textSizeLarge]}
    ${'disabled, undefined variant'}            | ${{ variant: undefined, disabled: true }} | ${[classes.regular.disabled]}
    ${'enabled, text variant'}                  | ${{ variant: 'text' }}                    | ${[classes.regular.text]}
    ${'enabled, outlined variant'}              | ${{ variant: 'outlined' }}                | ${[classes.regular.outlined]}
    ${'enabled, contained variant'}             | ${{ variant: 'contained' }}               | ${[classes.regular.contained]}
    ${'enabled, outlined variant'}              | ${{ variant: 'outlined' }}                | ${[classes.regular.outlined]}
    ${'enabled, icon variant'}                  | ${{ variant: 'icon' }}                    | ${[]}
    ${'enabled, icon variant, small size'}      | ${{ variant: 'icon', size: 'small' }}     | ${[classes.icon.sizeSmall]}
    ${'enabled, icon variant, edge start'}      | ${{ variant: 'icon', edge: 'start' }}     | ${[classes.icon.edgeStart]}
    ${'enabled, icon variant, edge end'}        | ${{ variant: 'icon', edge: 'end' }}       | ${[classes.icon.edgeEnd]}
    ${'disabled, icon variant'}                 | ${{ variant: 'icon', disabled: true }}    | ${[classes.icon.disabled]}
  `(
    'applies the classes to a(n) $message button',
    ({ props, expectedArray }) => {
      const isIconButton = props.variant === 'icon';
      const buttonClasses = isIconButton ? classes.icon : classes.regular;
      renderButton({
        ...props,
        children: isIconButton ? <SaveIcon /> : undefined,
        classes: buttonClasses,
      });
      const button = screen.getByRole('button');

      expect(button.className.split(' ')).toEqual(
        expect.arrayContaining([
          isIconButton ? classes.icon.root : classes.regular.root,
          ...expectedArray,
        ])
      );
    }
  );
});
