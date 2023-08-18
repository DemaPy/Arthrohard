import { Line, ButtonNumber, Title } from "./";
import dodatekI_1_iconLeft from "../assets/dodatekI_1_iconLeft.png";
import dodatekI_2_iconRight from "../assets/dodatekI_2_iconRight.png";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: '-200px' },
  show: { opacity: 1, y: 0 }
}

const AdvantagesItem = ({
  topLeft,
  topRight,
  title,
  subtitle,
  button_1,
  button_2,
  subtitle_bold,
  src,
  alt,
  mg,
  isCardHover = false,
  isTitleHover = false,
}) => {
  return (
    <motion.article
      variants={item}
      className={`flex xl:max-w-full max-w-lg mx-auto items-stretch flex-col text-center w-full transition-colors ${
        isCardHover ? "border-b-2 border-[#F6F6F6] hover:border-[#111111]" : ""
      }`}
    >
      <div className="mb-8">
        <Title isTitleHover={isTitleHover} title={title} />
        {!isTitleHover && <Line />}
        {mg && (
          <div className="mt-5">
            <span className="futura-medium text-xl">{mg}</span>
          </div>
        )}
      </div>
      <div className="mb-12 futura-light xl:text-xl text-base grow">
        {button_1 && button_2 && (
          <div className="flex xl:items-start items-center flex-col md:gap-8 gap-6">
            <ButtonNumber number="1" title="Bezpośrednio do pyszczka" />
            <ButtonNumber number="2" title="Zmieszany z karmą" />
          </div>
        )}
        {subtitle_bold && (
          <p className="leading-6 futura-heavy text-xl">{subtitle_bold}</p>
        )}
        <p className="leading-6 futura-medium text-xl">{subtitle}</p>
      </div>
      {src && (
        <div className="flex justify-center rounded-lg relative mb-6">
          <motion.div
            className={`flex absolute ${topLeft} xl:-left-5 sm:left-10 sm:block hidden left-0 z-10`}
          >
            <img
              className="object-cover"
              src={dodatekI_1_iconLeft}
              alt="image"
            />
          </motion.div>
          <img className="relative z-20 object-contain" src={src} alt={alt} />
          <motion.div
            className={`flex absolute ${topRight} xl:-right-5 sm:right-10 sm:block hidden right-0 z-10`}
          >
            <img
              className="object-cover"
              src={dodatekI_2_iconRight}
              alt="image"
            />
          </motion.div>
        </div>
      )}
    </motion.article>
  );
};

export default AdvantagesItem;
