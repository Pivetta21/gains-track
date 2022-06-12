import fonts from '../system/fonts';
import { ThemeType } from '../types';

const dark: ThemeType = {
  isDark: true,
  COLORS: {
    BACKGROUND: '#181818',
    PRIMARY: '#64FFDA',
    DANGER: '#DC3545',
    WARNING: '#D99D29',
    TEXT: '#EDEDED',
    SURFACE: '#202020',
  },
  FONTS: fonts,
};

export default dark;
