import React from 'react';

import { Container, Img } from './ImageContainer.js';

const ImageContainer = ({ img }) => {
  return (
    <>
      <Container>
        <Img src={img} />
      </Container>
    </>
  );
};

export default ImageContainer;
