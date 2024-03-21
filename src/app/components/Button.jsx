import React from 'react'

const Button = (props) => {
  return (
    <div>
<button className="text-white bg-black border-white border-[2px] px-4 py-2 rounded-full">
       {props.text}
      </button>    </div>
  )
}

export default Button

