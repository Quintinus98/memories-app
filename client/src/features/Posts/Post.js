import React from "react";
import moment from 'moment';
import { 
  Card, 
  CardHeader,
  CardActions, 
  CardContent, 
  CardMedia,
  Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = ({ post }) => {

  const handlePost = ( msg ) => {
    const n = 30;
    if (msg.length > n) {
      const msgStore = msg.substring(0, n)
      return msgStore.concat('...')
    }
    return msg
  }


  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            O
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => {}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.selectedFile}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="body">{`By ${post.creator}`}</Typography>
        <Typography variant="body2" color="text.secondary">{handlePost(post.message)}</Typography>
        <Typography variant="body2" color="text.secondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like Post" onClick={() => {}}>
          <FavoriteIcon />
          {post.likeCount}
        </IconButton>
        <IconButton aria-label="Delete Post" className="deleteLeft" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

 
export default Post;