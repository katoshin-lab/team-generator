import React from 'react';
import Reacet from 'react';
import styled from 'styled-components';

const MAX_WIDTH = 1000;

const AvailableWidthLimitter: React.FC = ({ children }) => {
  return (
    <StyledWidthLimitter>{ children }</StyledWidthLimitter>
  )
}

const StyledWidthLimitter = styled.div`
  margin: 0 auto;
  width: inherit;
  height: inherit;
  max-width: ${MAX_WIDTH}px;
`

export default AvailableWidthLimitter;
