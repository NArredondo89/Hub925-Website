import React from 'react';
import styled from 'styled-components';
import {
  RecoveryPricingOne,
  RecoveryPricingTwo,
  RecoveryPricingThree,
  RecoveryOne,
  RecoveryTwo,
  RecoveryThree,
  RecoveryFour,
  RecoveryFive,
  RecoverySix,
} from '../AmenitiesSection/Data.js';

import Content from '../AmenitiesSection/Content.js';

import NFContent from '../AmenitiesSection/NFContent.js';

import InfoSection from '../InfoSection/Index.js';

import { RecoveryInfoOne, RecoveryInfoTwo } from '../InfoSection/Data.js';

function RecoveryLounge() {
  return (
    <>
      <Container>
        <HeroImage />
        <Caption>
          <Span>The Recovery Lounge</Span>
          <SubTitle>Bringing World Class Recovery Right To You</SubTitle>
        </Caption>
      </Container>
      <AmmContainer>
        <ContentContainer>
          <Content {...RecoveryOne} />
          <Content {...RecoveryTwo} />
          <Content {...RecoveryThree} />
        </ContentContainer>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <ContentContainer>
          <Content {...RecoveryFour} />
          <Content {...RecoveryFive} />
          <Content {...RecoverySix} />
        </ContentContainer>
      </AmmContainer>
      <InfoSection {...RecoveryInfoOne} />
      <InfoSection {...RecoveryInfoTwo} />
      <ContentContainer>
        <NFContent {...RecoveryPricingOne} />
        <NFContent {...RecoveryPricingTwo} />
        <NFContent {...RecoveryPricingThree} />
      </ContentContainer>
    </>
  );
}

export default RecoveryLounge;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${require('../../images/RecoveryLounge.jpg')});
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

const SubTitle = styled.div`
  color: white;
  font-size: 1.2vw;
`;

export const AmmContainer = styled.div`
  height: 250vh;
  width: 100vw;
  display: grid;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 100px;
`;

export const ImgContainer = styled.div`
  height: 60vh;
`;

export const Image = styled.div`
  background-image: url(${require('../../images/WorldClass.jpg')});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
