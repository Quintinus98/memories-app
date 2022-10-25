import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes); // http://localhost:5000/posts

// https://www.mongodb.com/cloud/atlas

// for security, save password as env variables.
const CONNECTION_URL = 'mongodb+srv://quentinsop:quentinsop98@cluster0.hmqder0.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));