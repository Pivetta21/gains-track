import styled from 'styled-components/native';
import { MediumText, NormalHeading } from '../../styled/typography';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-vertical: ${({ theme }) => theme.SIZES.SPACING_3XL};
  margin-horizontal: ${({ theme }) => theme.SIZES.SPACING_XL};
`;

export const WelcomeWrapper = styled.View`
  margin-top: ${({ theme }) => theme.SIZES.SPACING_3XL};
`;

export const WelcomeImage = styled.Image`
  width: 296px;
  height: 275px;
`;

export const WelcomeTitle = styled(NormalHeading)`
  margin-top: ${({ theme }) => theme.SIZES.SPACING_XL};
  text-align: center;
`;

export const WelcomeText = styled(MediumText)`
  margin-top: ${({ theme }) => theme.SIZES.SPACING_SM};
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
  margin-top: ${({ theme }) => theme.SIZES.SPACING_BASE};
`;
