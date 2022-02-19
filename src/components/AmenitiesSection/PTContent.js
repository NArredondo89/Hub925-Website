import React from 'react';
import styled from 'styled-components';

const PTContent = ({ img, title }) => {
  return (
    <ContentWrapper>
      <Img src={img} />
      <ContentTitle>{title}</ContentTitle>
    </ContentWrapper>
  );
};

export default PTContent;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
`;
const Img = styled.img`
  width: 20vw;
  height: 30vh;
  object-fit: cover;
  overflow: hidden;
`;

const ContentTitle = styled.h1`
  height: 20%;
  width: 20vw;
  font-size: 2vw;
  color: white;
`;
