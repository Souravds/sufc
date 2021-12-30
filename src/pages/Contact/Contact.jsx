import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        Contact us on 01675276598
      </motion.h3>
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

export default Contact;
