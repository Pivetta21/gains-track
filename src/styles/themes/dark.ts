import colors from '../system/colors';
import fonts from '../system/fonts';
import sizes from '../system/sizes';
import { ThemeType } from '../types';

const dark: ThemeType = {
  isDark: true,
  COLORS: {
    ...colors,
    TEXT: '#EDEDED',
    SURFACE: '#202020',
    BACKGROUND: '#181818',
  },
  FONTS: fonts,
  SIZES: sizes,
};

export default dark;
