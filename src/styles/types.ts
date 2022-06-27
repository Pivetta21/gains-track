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

export type SizesType = {
  TEXT_XS: string;
  TEXT_SM: string;
  TEXT_BASE: string;
  TEXT_LG: string;
  TEXT_XL: string;
  TEXT_2XL: string;
  TEXT_3XL: string;
  TEXT_4XL: string;
  TEXT_5XL: string;
  TEXT_6XL: string;

  SPACING_XS: string;
  SPACING_SM: string;
  SPACING_BASE: string;
  SPACING_LG: string;
  SPACING_XL: string;
  SPACING_2XL: string;
  SPACING_3XL: string;
  SPACING_4XL: string;
  SPACING_5XL: string;
  SPACING_6XL: string;
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
