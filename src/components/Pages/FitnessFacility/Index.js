import {
  FFContainer,
  FFImage,
  BBContentContainer,
  BBIconWrapper,
  BBContentWrapper,
  BBIcon,
} from './FitnessFacility.js';

function FitnessFacility() {
  return (
    <FFContainer>
      <FFImage />
      <BBContentContainer>
        <BBContentWrapper></BBContentWrapper>
        <BBIconWrapper>
          <BBIcon />
        </BBIconWrapper>
      </BBContentContainer>
    </FFContainer>
  );
}

export default FitnessFacility;
