import { createMuiTheme } from '@material-ui/core';

const muiTheme = createMuiTheme();

export interface ExtendedTypeText {
  primary: string;
  secondary: string;
  disabled: string;
  darkGreen: string;
  black: {
    highEmphasis: string;
    medEmphasis: string;
    disabled: string;
  };
  white: {
    highEmphasis: string;
    medEmphasis: string;
    disabled: string;
  };
}

const text = {
  darkGreen: '#2C7300',
  black: {
    highEmphasis: 'rgba(0, 0, 0, 0.88)',
    medEmphasis: 'rgba(0, 0, 0, 0.64)',
    disabled: 'rgba(0, 0, 0, 0.4)',
  },
  white: {
    highEmphasis: 'rgba(255, 255, 255, 1)',
    medEmphasis: 'rgba(255, 255, 255, 0.88)',
    disabled: 'rgba(255, 255, 255, 0.4)',
  },
};

interface ButtonTypePaletteProps {
  active: string;
  activeBackground: string;
  disabled: string;
  disabledBackground: string;
  enabled: string;
  enabledBackground: string;
  focus: string;
  focusBackground: string;
  hover: string;
  hoverBackground: string;
}

export interface ExtendedPalette {
  border: {
    disabled: string;
    enabled: string;
    focus: string;
    hover: string;
    selected: string;
  };
  button: {
    contained: ButtonTypePaletteProps;
    icon: ButtonTypePaletteProps;
    outlined: ButtonTypePaletteProps;
    text: Omit<ButtonTypePaletteProps, 'enabledBackground'>;
  };
  surface: {
    base: string;
    dark: string;
    scrim: string;
  };
  tooltip: {
    background: string;
    color: string;
    opacity: number;
  };
  chart: {
    categoricalPalette: string[];
    emphasisPalette: {
      negative: string;
      positive: string;
    };
    barBackground: string;
    altBarBackground: string;
    goalLineColor: string;
    projectedLineColor: string;
  };
  text: typeof text;
  tabs: {
    default: string;
    selected: string;
    hover: string;
    pressed: string;
  };
  selectionControl: {
    on: {
      hover: string;
      focus: string;
      pressed: string;
    };
    off: {
      hover: string;
      focus: string;
      pressed: string;
    };
  };
  switch: {
    rail: {
      on: {
        enabled: string;
        disabled: string;
      };
      off: {
        enabled: string;
        disabled: string;
      };
    };
    knob: {
      on: {
        enabled: string;
        disabled: string;
      };
      off: {
        enabled: string;
        disabled: string;
      };
    };
  };
}

export interface ExtendedTypeAction {
  activeBackground: string;
  dragBackground: string;
  focusBackground: string;
  hoverBackground: string;
}

const primary = {
  main: '#97CC04',
  dark: '#2C7300',
  light: '#CEE696',
};

const outlinedButton = {
  active: primary.dark,
  activeBackground: '#e7f3cb',
  disabled: '#999',
  disabledBackground: 'transparent',
  enabled: primary.dark,
  enabledBackground: 'transparent',
  focus: primary.dark,
  focusBackground: '#e2f0c0',
  hover: primary.dark,
  hoverBackground: '#f5f5f5',
};

const iconButtonBackgrounds = {
  activeBackground: 'rgba(206, 230, 150, 0.5)',
  disabledBackground: 'transparent',
  enabledBackground: 'transparent',
  focusBackground: 'rgba(206, 230, 150, 0.6)',
  hoverBackground: 'rgba(0, 0, 0, 0.04)',
};

const textButton = {
  ...outlinedButton,
  ...iconButtonBackgrounds,
  enabledBackground: undefined,
};
delete textButton.enabledBackground;

const palette = {
  border: {
    disabled: 'rgba(0, 0, 0, 0.12)',
    enabled: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.24)',
    hover: 'rgba(0, 0, 0, 0.24)',
    selected: 'rgba(0, 0, 0, 0.12)',
    button: {
      enabled: 'rgba(0, 0, 0, 0.12)',
      focused: 'rgba(0, 0, 0, 0.24)',
    },
    textField: {
      resting: 'rgba(0, 0, 0, 0.42)',
      hover: 'rgba(0, 0, 0, 0.88)',
      disabled: 'rgba(0, 0, 0, 0.16)',
      error: 'rgba(176, 0, 32, 1)',
      focused: 'rgba(151, 204, 4, 1)',
    },
  },
  button: {
    contained: {
      active: muiTheme.palette.common.white,
      activeBackground: '#45841f',
      disabled: '#878787',
      disabledBackground: '#dbdbdb',
      enabled: muiTheme.palette.common.white,
      enabledBackground: primary.dark,
      focus: muiTheme.palette.common.white,
      focusBackground: '#45841f',
      hover: muiTheme.palette.common.white,
      hoverBackground: '#3c7d14',
    },
    icon: {
      active: text.black.highEmphasis,
      disabled: text.black.disabled,
      enabled: text.black.medEmphasis,
      focus: text.black.highEmphasis,
      hover: text.black.highEmphasis,
      ...iconButtonBackgrounds,
    },
    outlined: outlinedButton,
    text: textButton,
  },
  text,
  primary,
  secondary: primary,
  warning: {
    main: '#FFA000',
  },
  error: {
    main: '#B00020',
  },
  surface: {
    base: '#FFFFFF',
    dark: '#F5F5F5',
    scrim: 'rgba(0, 0, 0, 0.5)',
  },
  action: {
    activeBackground: 'rgba(206, 230, 150, 0.5)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    dragBackground: 'rgba(206, 230, 150, 0.7)',
    focusBackground: 'rgba(206, 230, 150, 0.6)',
    selected: 'rgba(217, 239, 237, 1)',
    hoverBackground: 'rgba(0, 0, 0, 0.04)',
  },
  tabs: {
    default: 'rgba(256, 256, 256, 1)',
    selected: 'rgba(151, 205, 4, 0.12)',
    hover: 'rgba(151, 205, 4, 0.04)',
    pressed: 'rgba(151, 205, 4, 0.16)',
  },
  tooltip: {
    background: 'rgba(66, 66, 66, 1)',
    color: 'rgba(255, 255, 255, 1)',
    opacity: 0.8,
  },
  chart: {
    categoricalPalette: [
      '#9EBDE0',
      '#F3D35F',
      '#F48144',
      '#9772B1',
      '#52C0B6',
      '#E079AF',
    ],
    emphasisPalette: {
      negative: 'rgba(217, 82, 84, 1)',
      positive: 'rgba(170, 211, 161, 1)',
    },
    barBackground: 'rgba(255, 255, 255, 1)',
    altBarBackground: 'rgba(242, 242, 242, 1)',
    goalLineColor: 'rgba(0, 0, 0, 1)',
    projectedLineColor: 'rgba(211, 211, 211, 1)',
  },
  background: {
    default: 'rgba(245, 245, 245, 1)',
  },
  selectionControl: {
    on: {
      hover: 'rgba(151, 204, 4, 0.04)',
      focus: 'rgba(151, 204, 4, 0.12)',
      pressed: 'rgba(151, 204, 4, 0.16)',
    },
    off: {
      hover: 'rgba(0, 0, 0, 0.04)',
      focus: 'rgba(0, 0, 0, 0.12)',
      pressed: 'rgba(0, 0, 0, 0.16)',
    },
  },
  switch: {
    rail: {
      on: {
        enabled: '#95B980',
        disabled: '#D5E3CC',
      },
      off: {
        enabled: '#ADADAD',
        disabled: '#E0E0E0',
      },
    },
    knob: {
      on: {
        enabled: '#2C7300',
        disabled: '#ABC799',
      },
      off: {
        enabled: '#FFFFFF',
        disabled: '#BDBDBD',
      },
    },
  },
};

export default palette;
