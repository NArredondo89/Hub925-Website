import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  border: 1px solid white;
`;
export const ContentIcon = styled.div`
  height: 30%;
`;

export const ContentTitle = styled.h1`
  height: 20%;
  width: 20vw;
  color: white;
`;
export const ContentDescription = styled.p`
  height: 60%;
  width: 20vw;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.334;

  color: white;
`;
