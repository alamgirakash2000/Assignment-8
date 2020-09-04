import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./PostCompo.style.css";

function PostCompo({ post }) {
  const [name, setName] = useState("");

  useEffect(() => {
    const getNameAndImage = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) => res.json())
        .then((data) => setName(data.name));
    };

    getNameAndImage();
  }, []);

  return (
    <div className=" col-md-6">
      <div className="post p-3 my-3">
        <div className="post__name text-warning d-flex align-items-center">
          <Avatar
            alt={name}
            src={`https://randomuser.me/api/portraits/thumb/men/${post.userId}.jpg`}
          />
          <h5 className="ml-3">{name}</h5>
        </div>
        <div className="post__body">
          <p>
            <strong>{post.title}</strong>
          </p>
          <p>{post.body}</p>
        </div>
        <Link to={`/${post.id}`} className="btn btn-danger">
          SEE MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCompo;
