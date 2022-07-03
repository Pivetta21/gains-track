import styled from 'styled-components/native';
import { MediumText, NormalHeading } from '../../styled/typography';

export const WelcomeWrapper = styled.View`
  margin-top: ${({ theme }) => theme.SIZES.SPACING.XL3};
  align-items: center;
`;

export const WelcomeImage = styled.Image`
  width: 296px;
  height: 275px;
`;

export const WelcomeTitle = styled(NormalHeading)`
  margin-top: ${({ theme }) => theme.SIZES.SPACING.XL};
  text-align: center;
`;

export const WelcomeText = styled(MediumText)`
  margin-top: ${({ theme }) => theme.SIZES.SPACING.SM};
  text-align: center;
`;

export const ActionsWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const LogInContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.SIZES.SPACING.BASE};
`;
