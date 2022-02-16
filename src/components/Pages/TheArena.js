import React from 'react';
import styled from 'styled-components';

function TheArena() {
  return (
    <Container>
      <HeroImage />
      <Caption>
        <Span>The Arena</Span>
      </Caption>
    </Container>
  );
}

export default TheArena;

export const Container = styled.div`
  height: 100vh;
`;

export const HeroImage = styled.div`
  background-image: url(${'https://i.imgur.com/cTfE0cW.jpg'});
  opacity: 0.8;
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Caption = styled.div`
  text-transform: uppercase;
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
  color: #000;
`;

export const Span = styled.div`
  color: white;
  font-weight: 700;
  font-size: 5vw;
`;
