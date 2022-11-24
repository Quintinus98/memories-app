# memories-app
An app that stores your Memories

## Creating the App

- Create a Folder named memories-app
- Create two subdirectories client/ server/

### Client directory
Run the command to create a create app in the current directory
```sh
npx create-react-app ./
```

Install the following packages
- axios: For making api requests
- moment: js library for working with time and date
- react-file-base64: Use this to convert our images
- react-redux: For state management.
- @reduxjs/toolkit: Everything redux.
```sh
npm install axios moment react-file-base64 @reduxjs/toolkit @mui/material react-redux
```

### server directory
Run the command to initialize an empty package.json
```sh
npm init -y
```
Install the following packages
- body-parser: For sending Post requests
- cors: Cross Origin requests
- express: Framework for routing of our application
- mongoose: Create models for our post
- nodemon: reset server whenever we make changes

```sh
npm install body-parser cors express mongoose nodemon
```

**Create a free mongodb account @ https://mongodb.com/cloud/atlas**

## RUNNNG the App
### Start the backend server

- cd into server
- run the code:
```sh
npm start
```

### Start the Frontend server

- cd into client
- run the code:
```sh
npm run start
```

### File Upload
View this link on how to get started [here](https://kris101.medium.com/react-file-upload-the-easy-way-with-nodejs-e94c5e81fb8)