import { useSelector } from "react-redux";
import React from "react";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((posts) => (
    <article className="pb-5" key={posts.id}>
      <hr className="text-cust4"/>
      <h1 className="text-3xl">{posts.title}</h1>
      <p>{posts.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <div className="grid justify-center text-center p-2 bg-cust4 text-cust2">
      <h2 className="flex justify-center prose pb-4 w-full text-5xl text-cust1">Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostList;
