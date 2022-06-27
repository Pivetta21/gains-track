import fonts from '../system/fonts';
import sizes from '../system/sizes';
import { ThemeType } from '../types';

const light: ThemeType = {
  isDark: false,
  COLORS: {
    BLACK: '#121212',
    WHITE: '#F1F1F1',
    BACKGROUND: '#FFFFFF',
    PRIMARY: '#0CA38C',
    DANGER: '#DC3545',
    WARNING: '#D99D29',
    TEXT: '#363636',
    SURFACE: '#FAFBFB',
  },
  FONTS: fonts,
  SIZES: sizes,
};

export default light;
