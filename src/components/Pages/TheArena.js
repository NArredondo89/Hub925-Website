import React from 'react';
import styled from 'styled-components';

import {
  ArenaOne,
  ArenaTwo,
  ArenaThree,
  ArenaFour,
  ArenaFive,
  ArenaSix,
} from '../AmenitiesSection/Data.js';

import { TheArenaOne, TheArenaTwo } from '../InfoSection/Data.js';

import InfoSection from '../InfoSection/Index.js';

import PTContent from '../AmenitiesSection/PTContent.js';

function TheArena(props) {
  return (
    <>
      <Container>
        <HeroImage />
        <Caption>
          <Span>The Arena</Span>
        </Caption>
      </Container>
      <AmmContainer>
        <ContentContainer>
          <PTContent {...ArenaOne} />
          <PTContent {...ArenaTwo} />
          <PTContent {...ArenaThree} />
        </ContentContainer>
        <ContentContainer>
          <PTContent {...ArenaFour} />
          <PTContent {...ArenaFive} />
          <PTContent {...ArenaSix} />
        </ContentContainer>
      </AmmContainer>
      <TitleContainer>
        <Title>Powered By Aktiv Solution</Title>
      </TitleContainer>
      <ImgContainer>
        <Image />
      </ImgContainer>
      <InfoSection {...TheArenaOne} />
      <InfoSection {...TheArenaTwo} />
    </>
  );
}

export default TheArena;

const Container = styled.div`
  height: 100vh;
`;

const HeroImage = styled.div`
  background-image: url(${require('../../images/TheArena.jpg')});
  opacity: 0.8;
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

const AmmContainer = styled.div`
  margin: 5vh 0;
  height: 110vh;
  width: 100vw;
  display: grid;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 150px;
`;

const TitleContainer = styled.div`
  background-color: black;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const Title = styled.div`
  color: #00ffff;
  font-weight: 600;
  font-size: 5em;
`;

const ImgContainer = styled.div`
  height: 100vh;
`;

const Image = styled.div`
  background-image: url(${'https://i.imgur.com/wiMDjpZh.jpg'});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
