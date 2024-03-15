// import React from 'react'
import { useState } from 'react'

function ShowHide() {
    const [show, setshow] = useState(true);
    
    // eslint-disable-next-line no-unused-vars
    const handleClick = (event) => {
        setshow(!show);
    }

  return (
    <div className='HiddenText'>
        <button onClick={handleClick}>{show ? "Hide " : "Show "} Text </button>
        {show && <h2> Hide me </h2>}
    </div>
  )
}

export default ShowHide
