import React from 'react';

import { Container, HeroImage, Caption, Span } from './HeroContiner.js';

const HeroContaienr = ({ img, title }) => {
  return (
    <Container>
      <HeroImage src={img} alt="#" />
      <Caption>
        <Span>{title}</Span>
      </Caption>
    </Container>
  );
};

export default HeroContaienr;
