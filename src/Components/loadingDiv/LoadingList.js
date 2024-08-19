import React from "react";
import './loading.css'
function LoadingList() {
  return (
    <div className="loaderlist">
      <div className="d-flex">
      <div className="col-1 d-flex align-items-center">
      <div className="wrapper w-100">
          <div className="line-1 w-50"></div>
        <div>
        </div>
      </div>
      </div>
      <div className="col-3">
      <div className="wrapper d-flex gap-2 align-items-center w-100">
        <div className="circle"></div>
        <div className="w-100">
          <div className="line-1 mb-2 w-75"></div>
          <div className="line-1"></div>
        </div>
        <div>
        </div>
      </div>
      </div>
      <div className="col-1 d-flex align-items-center">
      <div className="wrapper w-100">
          <div className="line-1"></div>
        <div>
        </div>
      </div>
      </div>
      <div className="col-2 d-flex align-items-center">
      <div className="wrapper w-100">
          <div className="line-1"></div>
        <div>
        </div>
      </div>
      </div>
      <div className="col-3 d-flex align-items-center">
      <div className="wrapper w-100">
          <div className="line-1 mb-2"></div>
          <div className="line-1 w-75"></div>
        <div>
        </div>
      </div>
      </div>
      <div className="col-2 d-flex align-items-center">
      <div className="wrapper w-100 d-flex gap-3">
          <div className="btn-loading"></div>
          <div className="btn-loading"></div>
        <div>
        </div>
      </div>
      </div>  
      </div>
    </div>
  );
}

export default LoadingList;
