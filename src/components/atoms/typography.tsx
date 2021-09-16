import React from 'react';
import styled from 'styled-components';

type TypoProps = {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number,
  bold?: boolean,
}

const Sizes = {
  xl: 36,
  lg: 24,
  md: 16,
  sm: 12,
  xs: 10
}

const Typography: React.FC<TypoProps> = props => {
  const {children, ...themeProps} = props;
  return (
    <StyledTypography {...themeProps} >{ children }</StyledTypography>
  )
}

const StyledTypography = styled.div<TypoProps>`
  font-size: ${props => Sizes[props.size] ?? props.size}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export default Typography;
