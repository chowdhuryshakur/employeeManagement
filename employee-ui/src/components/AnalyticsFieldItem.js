import React from 'react'
import {useDrag} from 'react-dnd'

function AnalyticsFieldItem({sheet, label, id}) {
   // useDrap
   const [{ isDragging }, drag] = useDrag(() => ({
      type: "div",
      item: {sheet, label, id},
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

  return (
    <li key={id} ref={drag} style={isDragging ? {border: "2px solid green", borderRadius: "3px"} : {border: "2px solid transparent"}} className={"field-child-item"}>
        <span>{label}</span>
    </li>
  )
}

export default AnalyticsFieldItem