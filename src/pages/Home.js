import React, { useState, useEffect } from "react";

import PostCompo from "../components/PostCompo/PostCompo";

function Home({ setIsLoading }) {
  const [posts, setPosts] = useState([]);

  //Getting all posts
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
      setIsLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-4">All Posts</h2>
      <div className="row">
        {/*Calling post component to show each post*/}

        {posts.map((post) => (
          <PostCompo key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
