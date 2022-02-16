import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const HeroImage = styled.img`
  opacity: 0.2;
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Caption = styled.div`
  text-transform: uppercase;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
`;

export const Span = styled.div`
  color: white;
  font-weight: 700;
  font-size: 5vw;
`;
