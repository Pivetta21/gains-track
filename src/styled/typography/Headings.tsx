import styled from 'styled-components/native';

const Heading = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const LargeHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_6XL};
`;

export const MediumHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_5XL};
`;

export const NormalHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_4XL};
  line-height: 40px;
`;

export const SmallHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.SIZES.TEXT_2XL};
  line-height: 32px;
`;
