import React from "react";
import Post from "./Post";
import { posts } from "../postes";
import { MdLocationPin } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { PiWarningCircleThin } from "react-icons/pi";


const Content = () => {
  return (
    <div className="px-md-0 px-sm-0 container pt-3">
      <div
        className="row px-lg-5 px-md-0 px-sm-0"
        style={{ flexWrap: "wrap-reverse" }}
      >
        <div className="col-md-8 p-0">
          {posts.map((post) => (
            <Post post={post} key={post.title} />
          ))}
        </div>
        <div className="col-md-3 p-3 my-md-3 my-sm-3" style={{marginLeft:'auto'}}>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <span>
                <MdLocationPin />
              </span>
              <span>Noida, India</span>
            </div>
            <div>
              <FaPen />
            </div>
          </div>
          <hr />
          <p className="p-3 mt-3 d-flex gap-2" style={{fontSize:'x-small', color:'#76727275'}}>
            <span><PiWarningCircleThin/></span>
            <span className="">
            Your location will help us serve better and extend a personalised experience.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
