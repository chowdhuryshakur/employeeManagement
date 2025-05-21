// AccordionItem.js
import React, { useState } from 'react';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
      <div className="question">{question}</div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}

export default AccordionItem;