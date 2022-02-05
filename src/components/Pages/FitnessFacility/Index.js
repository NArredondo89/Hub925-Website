import {
  FFContainer,
  FFImage,
  BBContentContainer,
  BBIconWrapper,
  BBContentWrapper,
  BBIcon,
  BBTitleWrapper,
  BBTitle,
} from './FitnessFacility.js';

function FitnessFacility() {
  return (
    <FFContainer>
      <FFImage />
      <BBContentContainer>
        <BBContentWrapper>
          <BBTitleWrapper>
            <BBTitle>Keep Calm And Ball On....</BBTitle>
          </BBTitleWrapper>
        </BBContentWrapper>
        <BBIconWrapper>
          <BBIcon />
        </BBIconWrapper>
      </BBContentContainer>
    </FFContainer>
  );
}

export default FitnessFacility;
