import React from 'react';
import styled from 'styled-components';
import {
  TheRejuvaSpaone,
  TheRejuvaSpatwo,
  TheRejuvaSpaThree,
} from '../InfoSection/Data.js';
import NFContent from '../AmenitiesSection/NFContent.js';
import {
  SpaPricingThree,
  SpaPricingTwo,
  SpaPricingOne,
} from '../AmenitiesSection/Data.js';
import InfoSection from '../InfoSection/Index.js';

const RejuvenatonSpa = () => {
  return (
    <Container>
      <HeroImage />
      <Caption>
        <Span>The Rejuvenation Spa</Span>
      </Caption>
      <InfoSection {...TheRejuvaSpaThree} />
      <ImgContainer>
        <Image />
      </ImgContainer>
      <InfoSection {...TheRejuvaSpaone} />
      <InfoSection {...TheRejuvaSpatwo} />
      <PricingContainer>
        <NFContent {...SpaPricingOne} />
        <NFContent {...SpaPricingTwo} />
        <NFContent {...SpaPricingThree} />
      </PricingContainer>
    </Container>
  );
};

export default RejuvenatonSpa;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${require('../../images/RejSpa.jpg')});
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
export const ImgContainer = styled.div`
  height: 100vh;
`;

export const Image = styled.div`
  background-image: url(${require('../../images/spa.jpg')});
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
