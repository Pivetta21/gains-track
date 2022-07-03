import { FlexStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

type ContainerProps = Pick<FlexStyle, 'justifyContent' | 'alignItems'>;

export const LayoutContainer = styled.View<ContainerProps>`
  flex: 1;
  margin-vertical: ${({ theme }) => theme.SIZES.SPACING.XL3};
  margin-horizontal: ${({ theme }) => theme.SIZES.SPACING.XL};

  ${({ justifyContent, alignItems }) => {
    return css`
      ${justifyContent && `justify-content: ${justifyContent}`}
      ${alignItems && `align-items: ${alignItems}`}
    `;
  }};
`;
