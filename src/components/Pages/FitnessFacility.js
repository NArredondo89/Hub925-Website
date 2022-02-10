import HeroContainer from '../HeroContainer/Index.js';

import ImageContainer from '../ImageContainer/Index.js';
import InfoSection from '../InfoSection/Index.js';

import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data.js';
import { HeroObjOne } from '../HeroContainer/Data.js';

function FitnessFacility() {
  return (
    <>
      <HeroContainer {...HeroObjOne} />
      <InfoSection {...homeObjFour} />
      <ImageContainer />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default FitnessFacility;
