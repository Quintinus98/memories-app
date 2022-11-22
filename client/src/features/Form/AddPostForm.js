import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material"
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPosts } from "../Posts/postsSlice";
// import boy_life from "../../assets/love_family.jpg"



export const AddPostForm = () => {

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
    <div className="form-img-wrapper">
      {/* <div className="img_wrapper">
        <img src={boy_life} alt="Boy living his best life" className="boy_image"/>
      </div> */}
      <div className="form-wrapper">
        <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
          <Typography variant="h5">Create a Memory</Typography>
          <TextField name="creator" variant="standard" className="common" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" className="common" variant="standard" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" multiline rows={2} className="common" variant="standard" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" className="common" variant="standard" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

          <div className="fileInput">
            <FileBase type = 'file' multiple = {false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>

          <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

        </form>
      </div>
    </div>
    
    
   );
}