import React from "react";
import './loading.css'
function LoadingDiv() {
  return (
    <div className="loaderdiv">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="line-1"></div>
        <div className="line-2"></div>
        {/* <div className="line-3"></div>
        <div className="line-4"></div> */}
      </div>
    </div>
  );
}

export default LoadingDiv;
