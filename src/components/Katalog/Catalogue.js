import React, {useState, useEffect} from 'react'

const Catalogue = () => {
  const [asd, setAsd] = useState("Hazır mıyız")

  useEffect(() => {
    setAsd("sikler")
  }, [])

  return (
    
    <div className="catWrapper" >
      
      <div className="card1">
        <p>{asd}</p>
      </div>
      <div className="card2"></div>
      <div className="card3"></div>
      <div className="card4"></div>
      <div className="card5"></div>
      <div className="card6"></div>
      <div className="card7"></div>
      <div className="card8"></div>
    </div>
  )
}

export default Catalogue
