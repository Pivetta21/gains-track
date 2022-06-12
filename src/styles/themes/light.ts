import fonts from '../system/fonts';
import { ThemeType } from '../types';

const light: ThemeType = {
  isDark: false,
  COLORS: {
    BACKGROUND: '#FFFFFF',
    PRIMARY: '#64FFDA',
    DANGER: '#DC3545',
    WARNING: '#D99D29',
    TEXT: '#343434',
    SURFACE: '#FAFBFB',
  },
  FONTS: fonts,
};

export default light;
