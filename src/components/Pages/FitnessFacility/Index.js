import {
  FFContainer,
  FFImage,
  BBCourtImage,
  Caption,
  Span,
} from './FitnessFacility.js';

import InfoSection from '../../InfoSection/Index.js';
import { homeObjOne, homeObjTwo, homeObjFour } from '../../InfoSection/Data.';

function FitnessFacility() {
  return (
    <FFContainer>
      <FFImage />
      <Caption>
        <Span>HUB925 Redefined</Span>
      </Caption>
      <InfoSection {...homeObjFour} />
      <BBCourtImage />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </FFContainer>
  );
}

export default FitnessFacility;
