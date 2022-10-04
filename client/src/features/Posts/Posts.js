import React from 'react';
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'

import { selectPosts } from './postsSlice';
import Post from './Post';



const Posts = () => {

  const pendingStatus = useSelector(state => state.posts.status)

  const posts = useSelector(selectPosts)
  const renderedposts = Object.values(posts).map((post) => {
    return (
      <Grid item xs={12} sm={6} key={post._id}>
        <Post post={post} />
      </Grid>
    )
  })

  if (pendingStatus === "loading") {
    return (
      <CircularProgress />
    )
  }

  return (
    <Grid className='container' container alignItems={"stretch"} spacing={3}>
      { renderedposts }
    </Grid>
  )
}
 
export default Posts;
