import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  height: 48px;
  border-radius: 8px;
  padding-horizontal: 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.SIZES.TEXT.BASE};
  font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
