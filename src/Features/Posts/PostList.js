import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./postSlice";

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(posts =>(
        <article key={posts.id}>
            <h1 className="text-3xl">{posts.title}</h1>
            <p>{posts.content.substring(0, 100)}</p>
        </article>
    ))

  return (
    <section>
        <h2 className='flex justify'>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList