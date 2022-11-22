// import React from 'react';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './features/Posts/postsSlice';
import { PostsList }from './features/Posts/PostsList';
import { SinglePostPage } from './features/Posts/SinglePostPage';
import NavBar from './app/AppBar';
import { AddPostForm } from './features/Form/AddPostForm';
import { EditPostForm } from './features/Form/EditPostForm';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <Router>
      <NavBar />
      <div className='App'>
        <Routes>
          {/* <Route exact path='/posts/:postId' component={SinglePostPage} /> */}
          <Route path='/' element={<> <AddPostForm /> <PostsList /> </> } />
          <Route path='/posts/:postId' element={<SinglePostPage />} />
          <Route path='/editPost/:postId' element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
   );
  }
  
  export default App;

{/* <Route exact path='/' render = { () => ( 
            <React.Fragment>
              <AddPostForm />
              <PostsList />
            </React.Fragment> )}  */}