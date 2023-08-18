






const NavbarItem = ({ label, to, isActive, onClick }) => {
  return (
    <li onClick={onClick} className={`transition-colors ${isActive ? "border-b-2 border-[#111111]" : ""}`}>
        <a className={`mb-2 block futura-nav-item md:text-base text-xs`} href={to}>{label}</a>
    </li>
  )
}

export default NavbarItem