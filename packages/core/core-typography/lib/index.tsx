/* eslint-disable react/display-name */
import Box from '@material-ui/core/Box';
import { Variant } from '@material-ui/core/styles/createTypography';
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { forwardRef, FunctionComponentElement, ReactNode } from 'react';
import useStyles from './styles';

export type TypographyVariant =
  | 'h2.light'
  | 'h3.medium'
  | 'h4.medium'
  | 'caption.medium';

export type TypographyProps = {
  /** Applies the theme typography styles */
  variant?: TypographyVariant | MuiTypographyProps['variant'];
  /** The content of the component. */
  children?: ReactNode;
  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?: MuiTypographyProps['color'];
  /** Controls the display type */
  display?: MuiTypographyProps['display'];
  /**  If `true`, the text will have a bottom margin. */
  gutterBottom?: MuiTypographyProps['gutterBottom'];
  /** If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow). */
  noWrap?: MuiTypographyProps['noWrap'];
  /** If `true`, the text will have a bottom margin. */
  paragraph?: MuiTypographyProps['paragraph'];
  className?: MuiTypographyProps['className'];
  /** Override or extend the styles applied to the component.  */
  classes?: MuiTypographyProps['classes'];
  style?: MuiTypographyProps['style'];
  /** The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the `variantMapping` prop. */
  component?: React.ElementType;
};
/**
 * Typography is used to apply Evergreen formats to displayed text.
 *
 * Additional props are as provided under [Typography Props (Material UI)](https://material-ui.com/api/typography/#props)
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { variant, className, classes, children, ...props }: TypographyProps,
    ref
  ): FunctionComponentElement<TypographyProps> => {
    const baseClasses = useStyles();
    const variantMatch = variant && variant.match(/(\w+)\.(\w+)/);
    const variantOverride: Variant = ((variantMatch && variantMatch[1]) ||
      variant) as Variant;
    const fontWeight =
      variantMatch &&
      `fontWeight${variantMatch[2]
        .charAt(0)
        .toUpperCase()}${variantMatch[2].slice(1)}`;

    return (
      <MuiTypography
        variant={variantOverride}
        className={clsx(
          baseClasses.root,
          classes && classes.root,
          className,
          'evergreen-typography'
        )}
        {...props}
        ref={ref}
      >
        <Box component="span" fontWeight={fontWeight}>
          {children}
        </Box>
      </MuiTypography>
    );
  }
);

export default Typography;
