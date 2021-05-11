export type TypographyVariants = 'h2L' | 'h3M' | 'h4M' | 'captionM';

const typography = {
  fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontSize: '1.75rem',
    fontWeight: 400,
    letterSpacing: '-0.009375rem',
    lineHeight: '2.125rem',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: '2rem',
  },
  h2L: {
    fontSize: '1.5rem',
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: '2rem',
  },
  h3M: {
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.75rem',
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.75rem',
  },
  h4M: {
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem',
  },
  h4: {
    fontSize: '1.125rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.015625rem',
    lineHeight: '1.25rem',
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.009375rem',
    lineHeight: '1.5rem',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.015625rem',
    lineHeight: '1.25rem',
  },
  captionM: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.025rem',
    lineHeight: '1rem',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.025rem',
    lineHeight: '1rem',
  },
  overline: {
    fontSize: '0.625rem',
    fontWeight: 500,
    letterSpacing: '0.125rem',
    lineHeight: '1rem',
    textTransform: 'uppercase' as React.CSSProperties['textTransform'],
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.078125rem',
    lineHeight: '1rem',
    textTransform: 'uppercase' as React.CSSProperties['textTransform'],
  },
};

export default typography;
