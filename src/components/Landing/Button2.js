import React from 'react'
import "./style.scss"
const Button2 = ({name , style}) => {
  return (
    <div>
      <button style={style} className="myButton2">
      {name}
    </button>
    </div>
  )
}

export default Button2