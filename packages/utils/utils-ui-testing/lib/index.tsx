import evergreenTheme from '@evergreen-ui/core-theme';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';

type AllTheProvidersProps = {
  children?: ReactNode;
};

interface CustomRenderOptions extends RenderOptions {
  /** Theme to use for ThemeProvider */
  theme?: Theme;
}

/**
 * Customized @test-library/react render method that includes all the providers used in the root application
 * @param ui Component to render
 * @param renderOptions: Extended RenderOptions from @test-library/react to include arguments for the providers
 */
const customRender = (
  ui: React.ReactElement,
  { theme, ...renderOptions }: CustomRenderOptions = {}
): RenderResult => {
  const mergedTheme = createMuiTheme(theme, evergreenTheme);

  const AllTheProviders = ({
    children,
  }: AllTheProvidersProps): ReactElement => {
    return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export * from '@testing-library/react';
export { customRender as render };
