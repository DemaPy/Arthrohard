import { Container, Navbar } from "../components";
import { HeroImage, HeroText } from "../components";
import CoWyroznia from "./CoWyroznia";

const Hero = () => {
  return (
    <section className="h-full bg-[#F6F6F6] xl:pb-24 pb-12">
      <div className="nav-shadow">
        <Container>
          <Navbar />
        </Container>
      </div>
      <Container>
        <div className="flex xl:flex-row flex-col-reverse justify-center items-center xl:gap-24 gap-6 mt-10">
          <div className="flex justify-center xl:w-1/2 w-full">
            <HeroImage />
          </div>
          <HeroText />
        </div>
      </Container>
      <Container>
        <div id="cowyroznia" className="xl:mt-40 mt-20">
          <CoWyroznia />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
