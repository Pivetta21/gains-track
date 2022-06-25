export type ColorsType = {
  WHITE: string;
  BLACK: string;
  BACKGROUND: string;
  PRIMARY: string;
  DANGER: string;
  WARNING: string;
  TEXT: string;
  SURFACE: string;
};

export type FontsType = {
  LIGHT: string;
  REGULAR: string;
  SEMI_BOLD: string;
  BOLD: string;
  MEDIUM: string;
  EXTRA_BOLD: string;
};

export type ThemeType = {
  isDark: boolean;
  COLORS: ColorsType;
  FONTS: FontsType;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
