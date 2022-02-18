import React from 'react';
import styled from 'styled-components';

const NFContent = ({ title, description, pricing }) => {
  return (
    <NFContentWrapper>
      <NFContentTitle>{title}</NFContentTitle>
      <NFContentDescription>{description}</NFContentDescription>
      <NFContentPricing>{pricing}</NFContentPricing>
    </NFContentWrapper>
  );
};

export default NFContent;

export const NFContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 20vh;
  height: 80vh;
  width: 20vw;
`;

export const NFContentTitle = styled.h1`
  height: 20%;
  width: 20vw;
  font-size: 2vw;
  color: white;
`;
export const NFContentDescription = styled.p`
  height: 30%;
  width: 20vw;
  font-weight: 300;
  font-size: 1.2vw;
  line-height: 1.5;
  color: white;
`;

export const NFContentPricing = styled.div`
  height: 40%;
  color: white;
  font-size: 1.7vw;
`;