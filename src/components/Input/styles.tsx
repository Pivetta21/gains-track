import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const InputContainer = styled.View<{ value: string }>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  border-radius: 8px;
  padding-horizontal: 16px;
  margin-bottom: ${({ theme }) => theme.SIZES.SPACING_LG};
  border-width: 2px;
  ${({ theme, value }) => {
    return value
      ? css`
          border-color: ${theme.COLORS.PRIMARY};
          background-color: ${theme.COLORS.BACKGROUND};
          color: ${theme.COLORS.TEXT};
        `
      : css`
          border-color: transparent;
          background-color: ${theme.COLORS.SURFACE};
        `;
  }};
`;

export const CustomInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SECONDARY,
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  font-size: ${({ theme }) => theme.SIZES.TEXT_BASE};
`;

export const TrailingIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.SECONDARY,
}))`
  padding-left: 4px;
  position: relative;
  right: -6px;
`;

export const LeadingIcon = styled(Icon).attrs<{ value: string }>(
  ({ theme, value }) => ({
    size: 24,
    color: value ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY,
  }),
)`
  padding-right: 4px;
  position: relative;
  left: -5px;
`;
