import React from 'react'

const faqData = [
  {
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces."
  },
  {
    "question": "How do I install React?",
    "answer": "You can install React using npm or yarn."
  },
  // Add more FAQ items here
]


function Accordion() {
  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default Accordion