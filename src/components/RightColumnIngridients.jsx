import { useInView } from "framer-motion";
import { IngridientsItem } from "./";
import { useRef } from "react";

const RightColumnIngridients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return (
    <div
      className="flex flex-col gap-2"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <IngridientsItem
        mg="250 mg"
        title="Czarci pazur"
        subtitle="Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i przeciwbólowe. Może to pomóc zwierzętom, które doświadczają bólu i stanu zapalnego związanego z problemami ze stawami."
      />
      <IngridientsItem
        mg="50 mg"
        title="Witamina C"
        subtitle="Witamina C jest potężnym przeciwutleniaczem,
        który może pomóc w ochronie stawów poprzez neutralizację wolnych rodników, które mogą uszkadzać chrząstkę. Ponadto, witamina C odgrywa ważną rolę w produkcji kolagenu, kluczowego składnika chrząstki."
      />
      <IngridientsItem
        mg="50 mg"
        title="MSM"
        subtitle="Metylosulfonylometan, czyli MSM, to naturalny związek siarki, który pomaga w utrzymaniu zdrowych stawów poprzez zmniejszenie stanu zapalnego i bólu. MSM może również pomagać
        w produkcji kolagenu, co przyczynia się do zdrowia chrząstki stawowej."
      />
    </div>
  );
};

export default RightColumnIngridients;
