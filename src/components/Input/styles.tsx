import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { SmallText } from '../../styled/typography';

export const InputContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.SIZES.SPACING.LG};
`;

export const InputWrapper = styled.View<{
  hasValue: boolean;
  hasError: boolean;
}>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding-horizontal: 16px;
  border-width: 2px;
  ${({ theme: { COLORS }, hasValue, hasError }) => {
    return hasValue
      ? css`
          border-color: ${hasError ? COLORS.DANGER : COLORS.PRIMARY};
          background-color: ${COLORS.BACKGROUND};
        `
      : css`
          border-color: ${hasError ? COLORS.DANGER : 'transparent'};
          background-color: ${COLORS.SURFACE};
        `;
  }};
`;

export const CustomInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SECONDARY,
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  font-size: ${({ theme }) => theme.SIZES.TEXT.BASE};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const TrailingIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.SECONDARY,
}))`
  padding: 6px;
  margin-left: 4px;
  margin-right: -12px;
`;

export const LeadingIcon = styled(Icon).attrs<{ hasValue: string }>(
  ({ theme, hasValue }) => ({
    size: 24,
    color: hasValue ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY,
  }),
)`
  padding-right: 4px;
  position: relative;
  left: -5px;
`;

export const ErrorInputText = styled(SmallText)`
  margin-top: 4px;
  margin-left: 2px;
  color: ${({ theme }) => theme.COLORS.DANGER};
`;
