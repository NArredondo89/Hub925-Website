import React from 'react';

import { Button } from '../ButtonElements';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Attribution,
} from './InfoSection.js';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  TLColor,
  BGColor,
  attribution,
}) => {
  console.log(primary);
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine style={{ color: TLColor }}>{topLine}</TopLine>
              <Heading style={{ color: lightText }}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  style={{ backgroundColor: BGColor }}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
              <Attribution>{attribution}</Attribution>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
