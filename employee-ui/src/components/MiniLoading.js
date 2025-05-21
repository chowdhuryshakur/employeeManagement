import React from 'react'

function MiniLoading({className}) {
  return (
    // <div className={`mini-loading-wrapper ${className}`}>
    //   <div className="loading"></div>
    // </div>
    <div className="xui-loader xui-loader-small xui-button--loader xui-loader-retain-layout" role="progressbar">
      <div className="xui-loader--dot"></div>
      <div className="xui-loader--dot"></div>
      <div className="xui-loader--dot"></div>
    </div>
  )
}

export default MiniLoading