import React, {useState} from 'react'


export function Numbers() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);

    return (
      <div className={click ? "class_one" : "class_two"} onClick={handleClick}>1</div>
    )
  }

 export function Numbers2() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
      <div className={click ? "class_one" : "class_two"} onClick={handleClick}>2</div>
    )
  }

  
 export function Numbers3() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);

    return (
      <div className={click ? "class_one" : "class_two"} onClick={handleClick}>3</div>
    )
  }