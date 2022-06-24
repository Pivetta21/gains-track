import fonts from '../system/fonts';
import { ThemeType } from '../types';

const light: ThemeType = {
  isDark: false,
  COLORS: {
    BACKGROUND: '#FFFFFF',
    PRIMARY: '#15E8B5',
    DANGER: '#DC3545',
    WARNING: '#D99D29',
    TEXT: '#363636',
    SURFACE: '#FAFBFB',
  },
  FONTS: fonts,
};

export default light;
