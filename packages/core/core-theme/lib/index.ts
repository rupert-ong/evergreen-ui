/* eslint-disable @typescript-eslint/no-empty-interface */
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import mixins from './mixins';
import overrides from './overrides';
import palette, {
  ExtendedPalette,
  ExtendedTypeAction,
  ExtendedTypeText,
} from './palette';
import typography, { TypographyVariants } from './typography';
import { RecursivePartial } from './utils/typeUtils';

declare module '@material-ui/core/styles/createTypography' {
  export interface Typography
    extends Partial<Record<TypographyVariants, TypographyStyle>> {}
  export interface TypographyOptions
    extends Partial<Record<TypographyVariants, TypographyStyle>> {}
}

declare module '@material-ui/core/styles/createPalette' {
  export interface TypeAction extends Partial<ExtendedTypeAction> {}
  export interface TypeText extends Partial<ExtendedTypeText> {}
  export interface Palette extends RecursivePartial<ExtendedPalette> {}
  export interface PaletteOptions extends RecursivePartial<ExtendedPalette> {}
}

export const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  mixins,
});

export type Theme = typeof theme;

export default theme;
