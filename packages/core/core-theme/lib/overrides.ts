/* eslint-disable no-useless-computed-key */
import { createMuiTheme } from '@material-ui/core';
import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const overrides: any = {
  MuiInputBase: {
    input: {
      '&[type="text"], &[type=text]': {
        border: '0',
        '&:hover': {
          border: '0',
        },
        '&:focus': {
          border: '0',
          boxShadow: 'none',
        },
      },
      '&:hover': {
        border: '0',
      },
      '&:focus': {
        border: '0',
        boxShadow: 'none',
      },
    },
  },
  MuiInputLabel: {
    outlined: {
      '&$shrink': {
        transform: 'translate(16px, -6px) scale(0.75)',
      },
    },
  },
  MuiTabs: {
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  MuiTab: {
    root: {
      minWidth: 'unset',
      padding: '1rem',
      backgroundColor: theme.palette.tabs?.default,
      [theme.breakpoints.up('sm')]: {
        padding: '1rem 1.5rem',
        minWidth: 'unset',
      },
      color: theme.palette.text.black?.medEmphasis,
      '&$selected': {
        color: theme.palette.primary.dark,
      },
      '&:hover': {
        backgroundColor: theme.palette.tabs?.hover,
      },
      '&:focus': {
        backgroundColor: theme.palette.tabs?.selected,
      },
      '&:pressed': {
        backgroundColor: theme.palette.tabs?.pressed,
      },
    },
    textColorPrimary: {
      '&$selected': {
        color: theme.palette.primary.dark,
      },
    },
  },
  MuiTableRow: {
    root: {
      '&$hover:hover': {
        cursor: 'pointer',
      },
    },
  },
  MuiListItem: {
    root: {
      color: theme.palette.text.black?.medEmphasis,
      '&$selected, &$selected:hover': {
        color: theme.palette.text.black?.highEmphasis,
        backgroundColor: theme.palette.action.activeBackground,
      },
      '&$focusVisible': {
        backgroundColor: theme.palette.action.focusBackground,
      },
    },
  },
  MuiLink: {
    root: {
      color: theme.palette.primary.dark,
    },
  },
  MuiToggleButton: {
    root: {
      '&:hover': {
        border: `1px solid ${theme.palette.border?.hover} !important`,
        zIndex: 1,
      },
      '&:active': {
        backgroundColor: 'transparent',
        borderColor: `${theme.palette.border?.focus}`,
        '& .MuiToggleButton-label': {
          color: theme.palette.primary.dark,
        },
      },
      '&$selected + &$selected:hover, &$selected + &.Mui-focusVisible': {
        marginLeft: `-1px !important`,
      },
      '&$selected:hover': {
        border: `1px solid ${theme.palette.border?.hover} !important`,
        backgroundColor: '#e7f3cb !important',
      },
      '&$selected': {
        backgroundColor: '#e7f3cb !important',
        borderColor: `${theme.palette.border?.selected} !important`,
        '& .MuiToggleButton-label': {
          color: theme.palette.primary.dark,
        },
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#e2f0c0 !important',
        border: `1px solid ${theme.palette.border?.focus} !important`,
        zIndex: 1,
        '& .MuiToggleButton-label': {
          color: theme.palette.text?.black?.medEmphasis,
        },
        '& .MuiTouchRipple-root': {
          color: 'transparent',
        },
      },
      '&:enabled .MuiToggleButton-label': {
        color: theme.palette.text?.black?.medEmphasis,
      },
      '&:disabled': {
        color: theme.palette.text?.black?.disabled,
      },
      '& .MuiTouchRipple-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  // fix for uneven padding/margin in IE11 textfileds
  PrivateNotchedOutline: {
    root: {
      '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
        top: 0,
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: theme.palette.tooltip?.background,
      color: theme.palette.tooltip?.color,
      opacity: theme.palette.tooltip?.opacity,
      fontSize: theme.typography.caption.fontSize,
      listStyleType: 'none',
      maxWidth: 600,
      maxHeight: '90vh',
      overflow: 'hidden',
    },
    tooltipPlacementBottom: {
      margin: `${theme.spacing(0.5, 5, 5)} !important`,
      ['@media screen and (min-width:680px)']: {
        margin: `${theme.spacing(0.5, 0)} !important`,
      },
    },
    tooltipPlacementLeft: {
      margin: `${theme.spacing(0, 0.5, 5)} !important`,
      ['@media screen and (min-width:680px)']: {
        margin: `${theme.spacing(0, 0.5)} !important`,
      },
    },
    tooltipPlacementRight: {
      margin: `${theme.spacing(0, 0.5, 5)} !important`,
      ['@media screen and (min-width:680px)']: {
        margin: `${theme.spacing(0, 0.5)} !important`,
      },
    },
    tooltipPlacementTop: {
      margin: `${theme.spacing(0.5, 5)} !important`,
      ['@media screen and (min-width:680px)']: {
        margin: `${theme.spacing(0.5, 0)} !important`,
      },
    },
  },
  MuiCheckbox: {
    colorPrimary: {
      color: theme.palette.text.black?.medEmphasis,
      '&:hover': {
        backgroundColor: theme.palette.button?.icon?.enabledBackground,
      },
      '&$disabled': {
        color: theme.palette.text.black?.disabled,
        '&:hover': {
          backgroundColor: theme.palette.button?.icon?.disabledBackground,
        },
      },
      '&$checked': {
        color: theme.palette.primary.dark,
        '&:hover': {
          backgroundColor: theme.palette.button?.icon?.enabledBackground,
        },
      },
      '&$indeterminate': {
        color: theme.palette.primary.dark,
        '&$disabled': {
          color: theme.palette.text.black?.disabled,
          '&:hover': {
            backgroundColor: theme.palette.button?.icon?.disabledBackground,
          },
        },
      },
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.primary.dark,
        '&$disabled': {
          color: theme.palette.text.black?.disabled,
        },
      },
      '&$indeterminate': {
        color: theme.palette.primary.dark,
      },
    },
  },
  MuiRadio: {
    colorPrimary: {
      color: theme.palette.text.black?.medEmphasis,
      '&:hover': {
        backgroundColor: theme.palette.button?.icon?.enabledBackground,
      },
      '&$disabled': {
        color: theme.palette.text.black?.disabled,
        '&:hover': {
          backgroundColor: theme.palette.button?.icon?.disabledBackground,
        },
      },
      '&$checked': {
        color: theme.palette.primary.dark,
        '&$disabled': {
          color: theme.palette.text.black?.disabled,
          '&:hover': {
            backgroundColor: theme.palette.button?.icon?.disabledBackground,
          },
        },
      },
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.primary.dark,
        '&$disabled': {
          color: theme.palette.text.black?.disabled,
        },
      },
    },
  },
};

export default overrides;
