import React from 'react'


const HeaderBox = ({type, title, user, subHeading}: HeaderBoxProps) => {
  return (
    <div>
    <h1 className="font-bold">{title}
        {type === "greeting" && <span className="text-blue-600"> {user}</span>} 
        </h1>
        <p className='text-sm text-gray-500 '>{subHeading}</p>
    </div>
  )
}

export default HeaderBox
