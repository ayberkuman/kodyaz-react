import React from 'react'
import "./style.scss"

const Button = ({name , style }) => {
  
  return (
    <button style={style} className="myButton">
      {name}
    </button>
  )
}

export default Button
