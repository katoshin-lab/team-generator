import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styled from 'styled-components';

const DownwordFade: React.FC = ({ children }) => {
  return (
      <StyledMotionDiv
        key='downfade'
        initial={{ y: -60, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -100, opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
        transition={{
          ease: 'easeInOut',
          duration: 0.25,
        }}
      >
        {children}
      </StyledMotionDiv>
  )
}

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
`

export default DownwordFade;
