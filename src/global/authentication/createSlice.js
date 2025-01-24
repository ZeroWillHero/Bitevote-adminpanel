import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid: null,
    email: null,
    accessToken : null,
    
  },
  reducers: {
    setUid: (state, action) => {
        state.uid = action.payload;
      
    },

    setEmail: (state, action) => {
        state.email = action.payload;
      
    },

    setAccessToken: (state, action) => {
        state.accessToken = action.payload;
    }
  }
})

export const { setUid, setEmail, setAccessToken } = authSlice.actions;

export default authSlice.reducer