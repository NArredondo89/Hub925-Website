import React from 'react';

import styled from 'styled-components';

const Content = ({ img, title, description }) => {
  return (
    <ContentWrapper>
      <Img src={img} />
      <ContentTitle>{title}</ContentTitle>
      <ContentDescription>{description}</ContentDescription>
    </ContentWrapper>
  );
};

export default Content;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 20vh;
  height: 80vh;
  width: 20vw;
`;
export const Img = styled.img`
  width: 20vw;
  height: 50vh;
  object-fit: cover;
  overflow: hidden;
`;

export const ContentTitle = styled.h1`
  height: 20%;
  width: 20vw;
  font-size: 2vw;
  color: white;
`;
export const ContentDescription = styled.p`
  height: 60%;
  width: 20vw;
  font-weight: 300;
  font-size: 1.2vw;
  line-height: 1.5;
  color: white;
`;
