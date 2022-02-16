import React from 'react';
import styled from 'styled-components';

function TheStudio() {
  return (
    <Container>
      <HeroImage />
      <Caption>
        <Span>The Studio</Span>
      </Caption>
    </Container>
  );
}

export default TheStudio;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${'https://i.imgur.com/0hVtlWj.jpg'});
  opacity: 0.6;
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Caption = styled.div`
  text-transform: uppercase;
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
  color: #000;
`;

const Span = styled.div`
  color: white;
  font-weight: 700;
  font-size: 5vw;
`;
