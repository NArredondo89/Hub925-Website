import React from 'react';
import styled from 'styled-components';

import InfoSection from '../InfoSection/Index.js';
import NFContent from '../AmenitiesSection/NFContent.js';

import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data.js';

import {
  FitnessPricingOne,
  FitnessPricingTwo,
} from '../AmenitiesSection/Data.js';

const FitnessFacility = () => {
  return (
    <>
      <Container>
        <HeroImage />
        <Caption>
          <Span>HUB925 Redefined</Span>
        </Caption>
        <InfoSection {...homeObjFour} />
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <PricingContainer>
          <NFContent {...FitnessPricingOne} />
          <NFContent {...FitnessPricingTwo} />
        </PricingContainer>
      </Container>
    </>
  );
};

export default FitnessFacility;

const Container = styled.div`
  height: 120vh;
`;

const HeroImage = styled.div`
  background-image: url(${require('../../images/GymHero.jpg')});
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

export const ImgContainer = styled.div`
  height: 100vh;
`;

export const Image = styled.div`
  background-image: url(${require('../../images/Basketballcourt.png')});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 200px;
  vertical-align: middle;
`;
