import React from 'react';
import styled from 'styled-components';

function Hero() {
  return (
    <Container>
      <Image />
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;

const Image = styled.div`
  background-image: url(${'https://i.imgur.com/4eFUWrp.jpg'});
  height: 100vh;
  width: auto;
`;
