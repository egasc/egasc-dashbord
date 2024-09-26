import React from "react";
import "./leaders.css";
import PostsLoading from "../Mianloding/PostsLoading";
function Leaders() {
  return (
    <section className="col-lg-9 col-md-8 col-sm-12 console-side mx-0">
      <p className="text-center">Posts</p>
      <PostsLoading/>
    </section>
  );
}

export default Leaders;
