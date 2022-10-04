import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material"
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPosts } from "../Posts/postsSlice";

const Form = () => {

  const [postData, setPostData ] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosts(postData))
    clear()
  };

  const clear = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  };

  return ( 
    <Paper className="paper">
      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="standard" className="common" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" className="common" variant="standard" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" multiline rows={4} className="common" variant="standard" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" className="common" variant="standard" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

        <div className="fileInput">
        {/* <Button variant="contained" mt={2} mb={2}> */}
          <FileBase type = 'file' multiple = {false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
        {/* </Button> */}
        </div>

        <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

      </form>
    </Paper>
    
    
   );
}
 
export default Form;