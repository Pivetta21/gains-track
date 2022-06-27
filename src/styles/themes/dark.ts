import fonts from '../system/fonts';
import sizes from '../system/sizes';
import { ThemeType } from '../types';

const dark: ThemeType = {
  isDark: true,
  COLORS: {
    BLACK: '#121212',
    WHITE: '#F1F0F0',
    BACKGROUND: '#181818',
    PRIMARY: '#0CA38C',
    DANGER: '#DC3545',
    WARNING: '#D99D29',
    TEXT: '#EDEDED',
    SURFACE: '#202020',
  },
  FONTS: fonts,
  SIZES: sizes,
};

export default dark;
