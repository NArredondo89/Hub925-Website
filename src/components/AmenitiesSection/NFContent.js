import React from 'react';
import styled from 'styled-components';

const NFContent = ({
  title,
  description,
  pricing,
  NFTitle,
  NFBorder,
  Initiation,
}) => {
  return (
    <NFContentWrapper style={{ border: NFBorder }}>
      <NFContentTitle style={{ color: NFTitle }}>{title}</NFContentTitle>
      <NFContentDescription>{description}</NFContentDescription>
      <NFContentInitiation>{Initiation}</NFContentInitiation>
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
  height: 60vh;
  width: 20vw;
  border-radius: 12px;
`;

export const NFContentTitle = styled.h1`
  text-underline-position: under;
  text-decoration-color: white;
  height: 20%;
  width: 20vw;
  font-size: 2vw;
  color: white;
  padding: 10px;
`;
export const NFContentDescription = styled.p`
  height: 30%;
  width: 20vw;
  font-weight: 300;
  font-size: 1.2vw;
  line-height: 1.5;
  color: white;
  padding: 10px;
`;

export const NFContentInitiation = styled.div`
  height: 40%;
  color: white;
  font-size: 1.7vw;
  padding: 10px;
`;
export const NFContentPricing = styled.div`
  height: 40%;
  color: white;
  font-size: 1.7vw;
  padding: 10px;
`;
