import React from 'react';
import styled from 'styled-components';

import ImageContainer from '../ImageContainer/Index.js';
import InfoSection from '../InfoSection/Index.js';

import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data.js';

const FitnessFacility = () => {
  return (
    <>
      <Container>
        <HeroImage />
        <Caption>
          <Span>HUB925 Redefined</Span>
        </Caption>
        <InfoSection {...homeObjFour} />
        <ImageContainer />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
      </Container>
    </>
  );
};

export default FitnessFacility;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${'https://i.imgur.com/4eFUWrp.jpg'});
  opacity: 0.2;
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
