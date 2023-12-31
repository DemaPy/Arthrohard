const Title = ({ isTitleHover, title }) => {
  return <h3 className={`transition-colors w-fit mx-auto futura-medium tracking-wider xl:text-3xl text-2xl ${isTitleHover ? "border-b-2 border-[#ffffff] hover:border-[#111111]" : ""}`}>
    <p className="mb-5" dangerouslySetInnerHTML={{__html: title}} />
  </h3>;
};

export default Title;
