import React from "react";
import { FaEye } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";


const Post = ({ post }) => {
  const handleOpenOptions =()=>{

  }
  return (
    <div className="card mb-3">
      <img
        className="card-img-top"
        src={post.imageUrl}
        style={{ height: "220px" }}
      />
      <div className="card-body">
        <h6 className="fw-bold text-muted d-flex gap-3 py-3">
          <span><FaPenFancy/></span>{post.category}</h6>
        <h5 className="card-title d-flex justify-content-between">{post.title}<span className="btn btn-light d-flex align-items-center px-3"><HiDotsHorizontal onClick={handleOpenOptions}/></span></h5>
        <p className="card-text text-muted">{post.content}
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
      <div className="card-body">
        <div className="d-flex flex-start">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src={post.userImage}
            alt="avatar"
            width="40"
            height="40"
          />
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">{post.postedBy}</h6>
              <p
                className="mb-0 text-muted d-flex align-items-center gap-4 fw-bold"
                style={{ fontSize: "small" }}
              >
                <span>
                  <FaEye />
                </span>
                {post.views}k views
                <button className="btn btn-light rounded d-flex justify-content-center align-items-center px-3">
                  <IoShareSocialSharp />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
