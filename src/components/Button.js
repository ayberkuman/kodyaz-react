import React from 'react'
import "./style.scss"

const Button = ({name}) => {
  return (
    <button className="myButton">
      {name}
    </button>
  )
}

export default Button
