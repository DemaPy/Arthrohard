import Button from "./Button";

const HeroText = () => {
  return (
    <div className="xl:w-1/2 md:w-3/4">
      <div className="futura-hero-title md:leading-[90px] leading-10 uppercase md:mb-8 mb-4 xl:text-start text-center">
        <h2 className="text-[#111111] inline xl:text-8xl md:text-7xl sm:text-6xl text-4xl">
          Arthro
        </h2>
        <h2 className="text-[#AB303C] inline xl:text-8xl md:text-7xl sm:text-6xl text-4xl">
          hard
        </h2>
      </div>
      <div className="mb-5 xl:max-w-2xl xl:mx-0 mx-auto">
        <p className="futura-hero-subtitle xl:text-start text-center linear-gradient mb-5 xl:leading-[62px] sm:leading-10 leading-8 xl:text-5xl md:text-4xl sm:text-3xl text-2xl">
          Lab-V Arthrohard Preparat na wsparcie stawów dla psa i kota
        </p>
        <p className="futura-hero-paragraph xl:text-start text-center">
          Arthrohard to dobrze przyswajalny suplement diety w formie syropu,
          stworzony z myślą o zdrowiu stawów Twojego psa lub kota.
        </p>
      </div>
      <Button bgColor="bg-[#30AB4C]" />
    </div>
  );
};

export default HeroText;
