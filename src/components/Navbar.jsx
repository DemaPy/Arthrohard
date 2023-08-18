import { useState } from "react";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

const navigation = [
  {
    id: 1,
    label: "Co nas wyróżnia",
    to: "#cowyroznia",
  },
  {
    id: 2,
    label: "Skład",
    to: "#sklad",
  },
  {
    id: 3,
    label: "Produkty",
    to: "#producty",
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState("")

  return (
    <nav className="xl:px-24 md:py-12 sm:py-8 py-6 flex md:flex-row flex-col items-center xl:gap-80 md:gap-40 sm:gap-10 gap-6">
      <header>
        <Logo />
      </header>
      <ul className="flex md:gap-10 sm:gap-6 min-w-max gap-2 items-center justify-center">
        {navigation.map((item) => (
          <NavbarItem onClick={() => setIsActive(item.label)} isActive={isActive === item.label} key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
