import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./Comment.style.css";

function Comment({ comment }) {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    const getImgUrl = async () => {
      await fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => setImgUrl(data.results[0].picture.thumbnail));
    };
    getImgUrl();
  }, []);

  return (
    <div className=" row px-5 my-2">
      <div className="comment px-3 py-2">
        <div className="comment__head text-warning d-flex align-items-center">
          <Avatar alt={comment.email} src={imgUrl} />
          <h5 className="ml-3">{comment.email}</h5>
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;
