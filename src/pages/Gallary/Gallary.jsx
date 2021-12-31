import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const images = [
  {
    img: process.env.PUBLIC_URL + "/teamgrayblackjersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teambluejersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teamblueblackjersey.jpg",
  },
  {
    img: process.env.PUBLIC_URL + "/teamredseniorjersey.jpg",
  },
];

function Gallary() {
  return (
    <>
      <Title>Photo Gallery</Title>
      <Container>
        {images.map((image, index) => (
          <Image key={index} as={motion.img} alt="sufc" src={image.img} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  gap: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 20vw;

  /* object-fit: contain; */
  filter: contrast(85%) drop-shadow(8px 8px 10px gray);
  opacity: 0.9;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: 2rem;
  margin-top: 4.5rem;
`;

export default Gallary;
