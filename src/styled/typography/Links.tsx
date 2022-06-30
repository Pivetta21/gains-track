import styled from 'styled-components/native';
import { Link as NavigationLink } from '@react-navigation/native';
import { LargeText, MediumText, NormalText, SmallText } from './Texts';

const Link = styled(NavigationLink)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
`;

export const LargeLink = LargeText.withComponent(Link);

export const MediumLink = MediumText.withComponent(Link);

export const NormalLink = NormalText.withComponent(Link);

export const SmallLink = SmallText.withComponent(Link);
