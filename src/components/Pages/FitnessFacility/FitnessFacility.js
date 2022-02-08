import styled from 'styled-components';

export const FFContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const FFImage = styled.div`
  background-image: url(${'https://i.imgur.com/4eFUWrp.jpg'});
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

export const BBContentContainer = styled.div`
  margin-top: 20vh;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`;

export const BBContentWrapper = styled.div`
  border: 1px solid white;
  height: 70vh;
  width: 40vw;
`;

export const BBIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  height: 70vh;
  width: 40vw;
`;

export const BBIcon = styled.div`
  background-image: url(${'https://i.imgur.com/TehCZIk.jpg'});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
`;

export const BBTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin-top: 10vh;
  height: 20%;
  color: white;
`;

export const BBTitle = styled.div`
  font-size: 2.5vw;
  color: white;
`;

export const BBDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  width: 30vw;
  flex-direction: column;
  border: 1px solid white;
  text-align: center;
  margin-left: 5vw;
`;

export const BBDescriptionOne = styled.div`
  margin-bottom: 20px;
  font-size: 1.2vw;
  color: white;
`;
export const BBDescriptionTwo = styled.div`
  font-size: 1.2vw;
  color: white;
`;

export const BBCourtImage = styled.div`
  background-image: url(${'https://i.imgur.com/0gcFWLj.png'});
  min-height: 100%;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GXContainer = styled.div`
  display: grid;
  height: 100vh;
`;
