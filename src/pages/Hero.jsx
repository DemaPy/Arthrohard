import { Container, Navbar } from "../components";
import { HeroImage, HeroText } from "../components";
import CoWyroznia from "./CoWyroznia";

import iconHeroSectionLeft from "../assets/iconHeroSectionLeft.png";
import iconHeroSectionRigth1 from "../assets/iconHeroSectionRigth1.png";
import iconHeroSectionRigth2 from "../assets/iconHeroSectionRigth2.png";


const Hero = () => {
  return (
    <section className="h-full bg-[#F6F6F6] xl:pb-24 pb-12">
      <div className="nav-shadow">
        <Container>
          <Navbar />
        </Container>
      </div>
      <Container>
        <div className="flex xl:flex-row flex-col-reverse justify-center items-center xl:gap-18 gap-6 mt-4">
          <div className="flex justify-center xl:w-1/2 w-full">
            <HeroImage />
          </div>
          <HeroText />
        </div>
      </Container>
      <div className="relative top-44 md:block hidden">
            <img className="absolute xl:-top-56 left-2" src={iconHeroSectionLeft} alt="image" />
            <img className="absolute xl:-top-96 -right-0" src={iconHeroSectionRigth1} alt="image" />
            <img className="absolute xl:-top-36 -right-0" src={iconHeroSectionRigth2} alt="image" />
          </div>
      <Container>
        <div id="cowyroznia" className="xl:mt-40 mt-20">
          <CoWyroznia />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
