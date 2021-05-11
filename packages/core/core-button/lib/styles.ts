import { Theme } from '@evergreen-ui/core-theme';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  ({ palette, typography, shadows, transitions }: Theme) =>
    createStyles({
      root: {
        minWidth: '88px',
      },
      label: {
        fontFamily: typography.fontFamily,
        fontStyle: 'normal',
        ...typography.button,
      },
      focused: {},
      disabled: {},
      pressed: {},
      contained: {
        backgroundColor: palette.button?.contained?.enabledBackground,
        color: palette.button?.contained?.enabled,
        boxShadow: shadows[2],
        '&:hover': {
          backgroundColor: palette.button?.contained?.hoverBackground,
          color: palette.button?.contained?.hover,
          boxShadow: shadows[4],
        },
        '&:link': {
          color: palette.button?.contained?.enabled,
          textDecoration: 'none',
        },
        '&:visited': {
          color: palette.button?.contained?.enabled,
          textDecoration: 'none',
        },
        '&:disabled': {
          color: palette.button?.contained?.disabled,
          backgroundColor: palette.button?.contained?.disabledBackground,
          boxShadow: 'none',
        },
        '&:focus': {
          color: palette.button?.contained?.focus,
          backgroundColor: palette.button?.contained?.focusBackground,
          boxShadow: shadows[4],
        },
        '&$pressed': {
          color: palette.button?.contained?.active,
          backgroundColor: palette.button?.contained?.activeBackground,
          boxShadow: shadows[8],
        },
      },
      icon: {
        backgroundColor: palette.button?.icon?.enabledBackground,
        color: palette.button?.icon?.enabled,
        transition: `color ${transitions.duration.short}ms ${transitions.easing.easeInOut}, background-color ${transitions.duration.short}ms ${transitions.easing.easeInOut}`,
        '&:hover': {
          backgroundColor: palette.button?.icon?.hoverBackground,
          color: palette.button?.icon?.hover,
        },
        '&:disabled': {
          color: palette.button?.icon?.disabled,
          backgroundColor: palette.button?.icon?.disabledBackground,
        },
        '&:focus': {
          backgroundColor: palette.button?.icon?.focusBackground,
          color: palette.button?.icon?.focus,
        },
        '&$pressed': {
          backgroundColor: palette.button?.icon?.activeBackground,
          color: palette.button?.icon?.active,
        },
      },
      text: {
        padding: '10px 16px',
        color: palette.button?.text?.enabled,
        '&:hover': {
          backgroundColor: palette.button?.text?.hoverBackground,
          color: palette.button?.text?.hover,
        },
        '&:link': {
          color: palette.button?.text?.enabled,
          textDecoration: 'none',
        },
        '&:visited': {
          color: palette.button?.text?.enabled,
          textDecoration: 'none',
        },
        '&$disabled': {
          color: palette.button?.text?.disabled,
          backgroundColor: palette.button?.text?.disabledBackground,
        },
        '&$focused': {
          color: palette.button?.text?.focus,
          backgroundColor: palette.button?.text?.focusBackground,
        },
        '&$pressed': {
          color: palette.button?.text?.active,
          backgroundColor: palette.button?.text?.activeBackground,
        },
      },
      outlined: {
        backgroundColor: palette.button?.outlined?.enabledBackground,
        color: palette.button?.outlined?.enabled,
        borderColor: palette.border?.enabled,
        '&:hover': {
          backgroundColor: palette.button?.outlined?.hoverBackground,
          color: palette.button?.outlined?.hover,
          borderColor: palette.border?.hover,
        },
        '&:link': {
          color: palette.button?.outlined?.enabled,
          textDecoration: 'none',
        },
        '&:visited': {
          color: palette.button?.outlined?.enabled,
          textDecoration: 'none',
        },
        '&$disabled': {
          color: palette.button?.outlined?.disabled,
          backgroundColor: palette.button?.outlined?.disabledBackground,
        },
        '&$focused': {
          color: palette.button?.outlined?.focus,
          backgroundColor: palette.button?.outlined?.focusBackground,
          borderColor: palette.border?.focus,
        },
        '&$pressed': {
          color: palette.button?.outlined?.active,
          backgroundColor: palette.button?.outlined?.activeBackground,
          borderColor: palette.border?.focus,
        },
      },
      sizeSmall: {
        fontSize: typography.button.fontSize,
        height: '24px',
        padding: '4px 16px',
      },
      sizeLarge: {
        height: '36px',
        padding: '10px 16px',
      },
      textSizeSmall: {
        padding: '4px 8px',
      },
      textSizeLarge: {
        padding: '10px 8px',
      },
    })
);
