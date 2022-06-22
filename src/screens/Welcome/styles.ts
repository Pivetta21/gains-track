import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-vertical: 32px;
  margin-horizontal: 20px;
`;

export const WelcomeImage = styled.Image`
  width: 296px;
  height: 275px;
  position: relative;
`;

export const HeroWrapper = styled.View`
  margin-vertical: 32px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const WelcomeText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-align: center;
  line-height: 27px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-top: 12px;
`;

export const ActionsWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const LogInContainer = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 12px;
`;

export const LogInText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const LogInLink = styled.Text`
  padding-vertical: 4px;
  padding-horizontal: 6px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
