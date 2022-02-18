import React from 'react';
import styled from 'styled-components';
import {
  AmmenitiesObjOne,
  AmmenitiesObjTwo,
  AmmenitiesObjThree,
} from '../AmenitiesSection/Data.js';

import Content from '../AmenitiesSection/Content.js';

import InfoSection from '../InfoSection/Index.js';

import { homeObjFive, homeObjSix } from '../InfoSection/Data.js';

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
          <Content {...AmmenitiesObjOne} />
          <Content {...AmmenitiesObjTwo} />
          <Content {...AmmenitiesObjThree} />
        </ContentContainer>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <ContentContainer>
          <Content {...AmmenitiesObjOne} />
          <Content {...AmmenitiesObjTwo} />
          <Content {...AmmenitiesObjThree} />
        </ContentContainer>
      </AmmContainer>
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
    </>
  );
}

export default RecoveryLounge;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${'https://i.imgur.com/5xZW9oL.jpg'});
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
`;

export const ImgContainer = styled.div`
  height: 60vh;
`;

export const Image = styled.div`
  background-image: url(${'https://i.imgur.com/K29ON1q.jpg'});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
