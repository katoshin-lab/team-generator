import React from 'react';
import styled from 'styled-components';

// components
import Typography from '../atoms/typography';

const Header = () => {
  return (
    <StyledHeader>
      <Typography size='lg' bold={true} >Team-Generator</Typography>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: aqua;

`

export default Header;
