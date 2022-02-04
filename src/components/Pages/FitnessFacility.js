import React from 'react';

import styled from 'styled-components';

function FitnessFacility(props) {
  return (
    <>
      <HeroContainer>
        <FFImage />
      </HeroContainer>
      <ContentContainer>
        <SloganContainer>
          <BasketBallTitle>Keep Calm And Ball On</BasketBallTitle>
          <BasketBallContent>
            Professional Caliber Facility. Maintained on a daily basis. We'll
            bring the Equiptment. You bring your A game.
          </BasketBallContent>
          <BBFunnyLine>New Ankles Not Included</BBFunnyLine>
        </SloganContainer>
        <ImageWrapper>
          <BBImage />
        </ImageWrapper>
      </ContentContainer>
    </>
  );
}

export default FitnessFacility;

const HeroContainer = styled.div`
  height: 100vh;
  z-index: 0;
`;

const FFImage = styled.div`
  background-image: url(${'https://i.imgur.com/4eFUWrp.jpg'});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  padding: 10vh 0 0 0;
  height: 200vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const SloganContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20vh 0 10vh 0;
  color: white;
`;

const BasketBallTitle = styled.div`
  margin-bottom: 3vh;
  font-size: 3rem;
  align-items: center;
`;

const BasketBallContent = styled.div`
  align-self: center;
  font-size: 1.5rem;
`;

const BBFunnyLine = styled.div`
  margin-top: 10px;
  align-self: center;
  font-size: 1.5rem;
  margin-bottom: 20vh;
`;

const ImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const BBImage = styled.div`
  border: 1px solid white;
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
