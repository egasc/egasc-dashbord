import React from "react";
import "./loding.css";
function PostsLoading() {
  return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
  );
}

export default PostsLoading;
