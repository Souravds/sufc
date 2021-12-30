import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Store() {
  return (
    <Container >
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.8}}>
        Store Launched soon...
      </motion.h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Store;
