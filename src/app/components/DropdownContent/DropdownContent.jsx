import React from 'react'

const DropdownContent = ({ children, open }) => {
  return (
    <div className='absolute min-w-full flex flex-col items-center py-2 px-4 mt-0.5 bg-slate-100 shadow max-h-40 rounded overflow-scroll'>
      {children}
    </div>
  )
}

export default DropdownContent