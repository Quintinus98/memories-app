import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPosts, selectPostById, updatePosts } from "../Posts/postsSlice";
import { Typography, TextField, Button } from "@mui/material";

export const EditPostForm = () => {
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, postId));

  const [postEdit, setPostEdit] = useState({
    title: post.title,
    message: post.message,
    tags: post.tags,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updatePosts({_id: postId, ...postEdit})).unwrap();
    dispatch(getPosts());
    clear();
    navigate(`/posts/${postId}`);
  };

  const clear = () => {
    setPostEdit({
      title: "",
      message: "",
      tags: "",
    });
  };

  return (
    <div className="form-img-wrapper">
      <div className="form-wrapper">
        <form
          autoComplete="off"
          noValidate
          className="form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h5">Editing a Memory</Typography>
          <TextField
            name="title"
            className="common"
            variant="standard"
            label="Title"
            fullWidth
            value={postEdit.title}
            onChange={(e) =>
              setPostEdit({ ...postEdit, title: e.target.value })
            }
          />
          <TextField
            name="message"
            multiline
            rows={2}
            className="common"
            variant="standard"
            label="Message"
            fullWidth
            value={postEdit.message}
            onChange={(e) =>
              setPostEdit({ ...postEdit, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            className="common"
            variant="standard"
            label="Tags"
            fullWidth
            value={postEdit.tags}
            onChange={(e) => setPostEdit({ ...postEdit, tags: e.target.value })}
          />

          <Button
            className="buttonSubmit"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Save Post
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </div>
    </div>
  );
};
