import { FaChevronDown } from "react-icons/fa";

const DropdownButton = ({ children, open, toggle, color }) => {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
  }

  return (
    <button onClick={toggle} className={`${colorVariants[color]}'flex shadow items-center py-2 px-4 rounded transition ease-in'`}>
      {children}
      <span className='pl-1'>
        {open ? <FaChevronDown /> : <FaChevronDown />}
      </span>
    </button>
  )
}

export default DropdownButton