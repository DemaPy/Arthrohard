import { Circle, AdvantagesItem } from "./";

const IngridientsItem = ({ title, subtitle, mg }) => {
  return (
    <div className="flex flex-col items-center">
      <Circle />
      <AdvantagesItem
        isTitleHover={true}
        isCardHover={false}
        mg={mg}
        alt={title}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default IngridientsItem;
