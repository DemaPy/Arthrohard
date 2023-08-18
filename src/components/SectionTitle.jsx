import Line from "./Line";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h3 className="futura-medium linear-gradient mb-5 xl:leading-[62px] sm:leading-10 leading-8 xl:text-5xl md:text-4xl text-3xl">
        {title}
      </h3>
      <Line />
    </>
  );
};

export default SectionTitle;
