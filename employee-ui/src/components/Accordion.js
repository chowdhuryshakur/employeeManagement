import React, { useState } from 'react';

function Accordion({ title, children, position, classContent, classItem, classWrapper, classTitle }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`accordion-wrapper ${classWrapper} ${isOpen ? "open" : ""}`}>

      <div className={`accordion-title ${classTitle} ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
        {/* <span className='position'>{position}</span> */}
        <h4>{title}</h4>
      </div>
      <div className={`accordion-item ${classItem} ${!isOpen ? "collapsed" : ""}`}>
        <div className={`accordion-content ${classContent}`}>{children}</div>
      </div>
    </div>
  )
}
export default Accordion
