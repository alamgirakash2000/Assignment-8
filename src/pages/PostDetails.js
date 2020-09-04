import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Comment from "../components/Comment/Comment";

function PostDetails({ setIsLoading }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const postId = useParams().postId;

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data));

      await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
        .then((res) => res.json())
        .then((data) => setComments(data));
      setIsLoading(false);
    };
    getPost();
  }, []);

  return (
    <div className="details container">
      <div className="details__post py-4">
        <h4 className="text-center">{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <h5>Comments ({comments.length}) :</h5>
      <div className="details__comments row">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostDetails;
