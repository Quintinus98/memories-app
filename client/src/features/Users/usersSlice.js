import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  0: {id: '0', name: 'David Obodo'},
  1: {id: '1', name: 'Peter Obodo'},
  2: {id: '2', name: 'Fidelis Ogbu'}
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export default usersSlice.reducer