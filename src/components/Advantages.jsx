import { AdvantagesItem } from "./";
import advantagesImage1 from "../assets/advantagesImage1.png";
import advantagesImage2 from "../assets/advantagesImage2.png";
import advantagesImage3 from "../assets/advantagesImage3.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : ""}
      className="flex md:items-stretch items-center xl:gap-44 md:gap-40 sm:gap-24 gap-16 xl:flex-row flex-col"
    >
      <AdvantagesItem
        topLeft="top-28"
        topRight="top-10"
        isCardHover={true}
        src={advantagesImage1}
        alt="innowacyjny dodatek"
        title="Innowacyjny dodatek - Czarciego Pazura"
        subtitle="Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i zapalnych. Skoncentrowane składniki aktywne, opracowane we współpracy z lekarzami weterynarii, przynoszą szybkie i zauważalne efekty, szczególnie korzystne dla zwierząt z poważnymi problemami stawowymi."
      />
      <AdvantagesItem
        topLeft="top-28"
        topRight="top-24"
        isCardHover={true}
        src={advantagesImage2}
        alt="dwa sposoby podawania"
        title="Wygoda - <br> dwa sposoby podawania"
        button_1="Bezpośrednio do pyszczka"
        button_2="Zmieszany z karmą"
      />
      <AdvantagesItem
        topLeft="top-15"
        topRight="top-28"
        isCardHover={true}
        src={advantagesImage3}
        alt="skoncentrowana dawka"
        title="Skuteczność - <br> skoncentrowana dawka"
        subtitle_bold="Tylko jedna porcja dziennie."
        subtitle="To nie tylko wygoda, ale również gwarancja, że Twoje zwierzę otrzymuje wszystko, czego potrzebuje, aby cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z zalet Arthrohard i zobacz różnicę w komforcie życia swojego zwierzęcia."
      />
    </motion.div>
  );
};

export default Advantages;
