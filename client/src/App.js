import React, { useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './features/Posts/postsSlice';
import Posts from './features/Posts/Posts';
import Form from './features/Form/Form';
import memories from './assets/memories.png';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return ( 
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography  className="heading" variant="h2">Memories</Typography>
        <img src={memories} className="image" alt="Memories" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems={"stretch"} spacing={3}>
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>    
   );
}

export default App;