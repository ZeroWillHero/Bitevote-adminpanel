import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState: {
    page: 'add',
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = sideBarSlice.actions;
export default sideBarSlice.reducer;
