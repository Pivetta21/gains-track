import styled from 'styled-components/native';

type TextProps = {
  fontWeight?: 'regular' | 'semi-bold' | 'bold';
  textAlign?: 'left' | 'right' | 'justify' | 'center';
};

const BaseText = styled.Text<TextProps>`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme, fontWeight }) => {
    if (fontWeight === 'bold') return theme.FONTS.BOLD;
    else if (fontWeight === 'semi-bold') return theme.FONTS.SEMI_BOLD;
    else return theme.FONTS.REGULAR;
  }};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
`;

export const xLargeText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_2XL};
  line-height: 32px;
`;

export const LargeText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_XL};
  line-height: 28px;
`;

export const MediumText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_LG};
  line-height: 28px;
`;

export const NormalText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_BASE};
  line-height: 24px;
`;

export const SmallText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_SM};
  line-height: 20px;
`;

export const xSmallText = styled(BaseText)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_XS};
  line-height: 16px;
`;
