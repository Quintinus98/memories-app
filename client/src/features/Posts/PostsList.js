import React from 'react';
import { useSelector } from 'react-redux'
import { Grid, CircularProgress, Container, Typography } from '@mui/material'

import { selectPosts } from './postsSlice';
import Post from './Post';

// import { Container, AppBar, Typography, Grow } from '@mui/material';


export const PostsList = () => {

  const pendingStatus = useSelector(state => state.posts.status)
  
  
  const posts = useSelector(selectPosts)
  const renderedposts = Object.values(posts).map((post) => {
    return (
      <Grid item key={post._id}>
        <Post id={post._id} post={post}/>
      </Grid>
    )
  })

  if (pendingStatus === "loading") {
    return (
      <CircularProgress />
      )
    } 
    
    return (
    <Container maxWidth="lg">
      <Typography variant='h6'>My Memories</Typography>
      <Container>
        <Grid container alignItems={"stretch"} spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={12}>
            { renderedposts }
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

{/* <Grid className='container' container alignItems={"stretch"} spacing={3}>
{ renderedposts }
</Grid> */}