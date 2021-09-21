import React from 'react';
import styled from 'styled-components';

// components
import Typography from '../atoms/typography';
import AvailableWidthLimitter from '../atoms/availableWidthLimitter';

type HeaderProps = {
  refObject: React.MutableRefObject<HTMLElement>
}

const Header = ({ refObject }: HeaderProps) => {
  return (
    <StyledHeader ref={refObject}>
      <AvailableWidthLimitter>
        <Typography size='lg' bold={true} >Team-Generator</Typography>
      </AvailableWidthLimitter>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: aqua;

`

export default Header;
