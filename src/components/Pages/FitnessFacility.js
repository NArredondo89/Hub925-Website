import HeroContainer from '../HeroContainer/Index.js';

import ImageContainer from '../ImageContainer/Index';
import InfoSection from '../InfoSection/Index.js';

import { HeroObjOne } from '../HeroContainer/Data';
import { homeObjOne, homeObjTwo, homeObjFour } from '../InfoSection/Data.';

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
