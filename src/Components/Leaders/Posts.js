import React from "react";
import "./Posts.css";
import PostsLoading from "../Mianloding/PostsLoading";
import Popup from "reactjs-popup";

function Posts() {
  return (
    <section className="col-lg-9 col-md-8 col-sm-12 console-side mx-0">
      <div className="container-md">
        <div className="d-flex justify-content-between mb-3 align-items-center add-post-paternt">
          <h4 className="text-center m-0">Posts</h4>
          <Popup
            trigger={
              <button className="add-post-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            }
          >
            {(close) => (
              <div onClick={close}>
                <PostPopup />
              </div>
            )}
          </Popup>
        </div>
        <div className="row">
          <PostsLoading />
          <PostsLoading />
          <PostsLoading />
          <PostsLoading />
          <PostsLoading />
          <PostsLoading />
        </div>
      </div>
    </section>
  );
}

export default Posts;
// -------popup-------
const PostPopup = () => {
  return <div>Comming Soon</div>;
};
