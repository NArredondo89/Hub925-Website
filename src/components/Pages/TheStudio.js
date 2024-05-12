import React from 'react';
import styled from 'styled-components';
import {
  AmmenitiesObjOne,
  AmmenitiesObjTwo,
  AmmenitiesObjThree,
} from '../AmenitiesSection/Data.js';

import InfoSection from '../InfoSection/Index.js';

import NFContent from '../AmenitiesSection/NFContent.js';

import { homeObjFive, homeObjSix } from '../InfoSection/Data.js';

function TheStudio() {
  return (
    <>
      <Container>
        <HeroImage />
        <Caption>
          <Span>The Studio</Span>
        </Caption>
      </Container>
      <StudioAmContainer>
        <ContentContainer>
          <NFContent {...AmmenitiesObjOne} />
          <NFContent {...AmmenitiesObjTwo} />
          <NFContent {...AmmenitiesObjThree} />
        </ContentContainer>
      </StudioAmContainer>
      <ImgContainer>
        <Image />
      </ImgContainer>
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
    </>
  );
}

export default TheStudio;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${require('../../images/TheStudioHero.jpg')});
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

export const StudioAmContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ImgContainer = styled.div`
  height: 60vh;
`;

export const Image = styled.div`
  background-image: url(${require('../../images/PilatesStudio2.jpg')});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
