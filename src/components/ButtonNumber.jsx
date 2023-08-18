








const ButtonNumber = ({ title, number }) => {
  return (
    <div className="flex md:gap-5 gap-2 justify-start items-center">
        <span className="rounded-full futura-heavy button-shadow w-11 h-11 flex items-center justify-center font-bold text-xl leading-6">{number}</span>
        <span className="leading-6 text-xl futura-medium">{title}</span>
    </div>
  )
}

export default ButtonNumber