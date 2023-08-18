import { useRef } from "react";
import { IngridientsItem } from "./";
import { useInView, motion } from "framer-motion";

const LeftColumnIngridients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <IngridientsItem
        mg="650 mg"
        title="Siarczan glukozaminy"
        subtitle="Glukozamina jest naturalnym składnikiem chrząstki.
      Dodatek glukozaminy przyczynia się do zwiększenia produkcji glikozaminoglikanów (m.in. siarczanu keratanu, heparanu, kwasu hialuronowego), które pomagają w odbudowie chrząstki, co jest
      szczególnie korzystne dla zwierząt ze zmianami zwyrodnieniowymi stawów."
      />
      <IngridientsItem
        mg="300 mg"
        title="Siarczan chondroityny"
        subtitle="Chondroityna, podobnie jak glukozamina, jest składnikiem chrząstki. Chondroityna pomaga zwalczać enzymy, które niszczą chrząstkę, a także pomaga chrząstce zatrzymać wodę, co jest ważne dla jej sprężystości i absorpcji wstrząsów."
      />
      <IngridientsItem
        mg="50 mg"
        title="Kwas hialuronowy"
        subtitle="Kwas hialuronowy jest kluczowym składnikiem płynu stawowego, który działa jak smar i amortyzator dla stawów. Suplementacja kwasem hialuronowym może pomóc w utrzymaniu prawidłowej objętości
i konsystencji płynu stawowego."
      />
    </motion.div>
  );
};

export default LeftColumnIngridients;
