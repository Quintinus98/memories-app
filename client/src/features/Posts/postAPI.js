// A mock function to mimic making an async request for data
import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)
export const fetchSinglePost = (postId) => axios.get(url, postId);
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)