




// ${isActive ? "border-b-[1px] border-[#111111]" : ""}

const NavbarItem = ({ label, to, isActive, onClick }) => {
  return (
    <li onClick={onClick} className={`transition-colors `}>
        <a className={`mb-1 block relative futura-medium uppercase text-base ${isActive ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:block after:h-[1px] after:bg-[#111111]": ""}`} href={to}>{label}</a>
    </li>
  )
}

export default NavbarItem