import { Advantages, SectionTitle } from "../components";

const CoWyroznia = () => {
  return (
    <section className="h-full relative z-10">
      <header className="xl:mb-32 md:mb-20 mb-10 text-center">
        <SectionTitle title="Co wyróżnia nasz preparat" />
      </header>
      <Advantages />
    </section>
  );
};

export default CoWyroznia;
