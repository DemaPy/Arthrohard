import {
  Button,
  Container,
  LeftColumnIngridients,
  RightColumnIngridients,
  SectionTitle,
  Title,
} from "../components";
import productDescription from "../assets/productDescription.png";
import dog from "../assets/dog.png";
import dogIcon from "../assets/dogIcon.png";
import dogIcon2 from "../assets/dogIcon2.png";

import skladIconLeft from "../assets/skladIconLeft.png";
import skladIconRight from "../assets/skladIconRight.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Sklad = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const y0 = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const yDog = useTransform(scrollYProgress, [0, 1], [300, 0]);

  const y1 = useTransform(scrollYProgress, [0, 1], [-200, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-300, 100]);

  const y3 = useTransform(scrollYProgress, [0, 1], [-150, 500]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-300, 200]);

  return (
    <Container>
      <section ref={container} className="h-full md:mt-12 mt-8 overflow-hidden" id="sklad">
        <header className="xl:mb-24 md:mb-16 mb-10 text-center">
          <SectionTitle title="Skład w 5 ml" />
        </header>
        <div className="text-center md:mb-32 mb-16">
          <Title title="Co dają poszczególne składniki:" />
        </div>
        <div className="grid gap-6 xl:grid-cols-3 grid-cols-1">
          <LeftColumnIngridients />
          <div className="flex flex-col justify-center items-center relative">
            <motion.div
              style={{ y: y3 }}
              className="sm:flex hidden absolute top-[440] xl:-left-20 left-20 z-10"
            >
              <img className="object-cover" src={skladIconLeft} alt="dog" />
            </motion.div>
            <motion.div
              style={{ y: y0 }}
              className="flex flex-col items-center relative z-20"
            >
              <img
                src={productDescription}
                className="relative z-20 object-cover"
                alt="product iamge"
              />
              <Button bgColor="bg-[#AD4844]" />
            </motion.div>
            <motion.div
              style={{ y: y4 }}
              className="sm:flex hidden absolute top-96 xl:-right-10 right-28 z-10"
            >
              <img className="object-cover" src={skladIconRight} alt="dog" />
            </motion.div>
          </div>
          <RightColumnIngridients />
        </div>
        <div className="xl:mt-28 mt-6 xl:mb-0 mb-1 flex items-center justify-center relative">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 xl:left-[340px] md:left-18 sm:left-6 sm:flex hidden left-0 z-10"
          >
            <img src={dogIcon2} alt="dog" />
          </motion.div>
          <motion.div
            className="relative z-20"
            style={{ y: yDog }}
          >
            <img className="relative z-20" src={dog} alt="dog" />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute top-0 xl:right-[340px] md:right-18 sm:right-6 sm:flex hidden right-0 z-10"
          >
            <img src={dogIcon} alt="dog" />
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Sklad;
