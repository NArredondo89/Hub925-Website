import React from 'react';
import styled from 'styled-components';

const RejuvenatonSpa = () => {
  return (
    <Container>
      <HeroImage />
      <Caption>
        <Span>The Rejuvenation Spa</Span>
      </Caption>
    </Container>
  );
};

export default RejuvenatonSpa;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${'https://i.imgur.com/owAuaAO.jpg'});
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
  color: #7ad7f0;
  font-weight: 700;
  font-size: 5vw;
`;
