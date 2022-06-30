import { ColorsType } from '../types';

type OmittedColors = 'TEXT' | 'SURFACE' | 'BACKGROUND';

const colors: Omit<ColorsType, OmittedColors> = {
  BLACK: '#121212',
  WHITE: '#FCFCFC',
  PRIMARY: '#0CA38C',
  SECONDARY: '#8C9196',
  DANGER: '#DC3545',
  WARNING: '#D99D29',
};

export default colors;
