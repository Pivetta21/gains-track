import styled from 'styled-components/native';

const Heading = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const LargeHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT.XL6};
`;

export const MediumHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT.XL5};
`;

export const NormalHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT.XL4};
  line-height: 40px;
`;

export const SmallHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT.XL2};
  line-height: 32px;
`;
