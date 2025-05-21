import React from 'react'

function WhiteCanvas({h2, p, icon, children, parentClass}) {
  return (
    <div className={`analytics-body ${parentClass}`}>
      {/* guide */}
      <div className="analytics-guide">
        <h2>{h2}</h2>
        <p>{p}</p>
        {icon}
        {children}
      </div>

    </div>
  )
}

export default WhiteCanvas