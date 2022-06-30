import fonts from '../system/fonts';
import sizes from '../system/sizes';
import colors from '../system/colors';
import { ThemeType } from '../types';

const light: ThemeType = {
  isDark: false,
  COLORS: {
    ...colors,
    TEXT: '#282828',
    SURFACE: '#F8F9F9',
    BACKGROUND: '#FFFFFF',
  },
  FONTS: fonts,
  SIZES: sizes,
};

export default light;
