export type ColorsType = {
  WHITE: string;
  BLACK: string;
  PRIMARY: string;
  SECONDARY: string;
  DANGER: string;
  WARNING: string;
  TEXT: string;
  SURFACE: string;
  BACKGROUND: string;
};

export type FontsType = {
  LIGHT: string;
  REGULAR: string;
  SEMI_BOLD: string;
  BOLD: string;
  MEDIUM: string;
  EXTRA_BOLD: string;
};

export type SizeUnit = {
  XS: string;
  SM: string;
  BASE: string;
  LG: string;
  XL: string;
  XL2: string;
  XL3: string;
  XL4: string;
  XL5: string;
  XL6: string;
};

export type SizesType = {
  TEXT: SizeUnit;
  SPACING: SizeUnit;
};

export type ThemeType = {
  isDark: boolean;
  COLORS: ColorsType;
  FONTS: FontsType;
  SIZES: SizesType;
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
