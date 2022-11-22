import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";


export const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector(state => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <article className="post">
      <h2>{ post.title }</h2>
      <p>Created by { post.creator }. Associated tags { post.tags }</p>
      <p className="post-message">{ post.message } </p>
      <Link to={`/editPost/${postId}`} className="button">Edit Post</Link>
    </article>
  )

}