import { createSlice } from '@reduxjs/toolkit';

const customizableBtn = createSlice({
  name: 'add',
  initialState: {
    customBtn: false,
  },
  reducers: {
    setisCustomizable: (state, action) => {
      state.customBtn = action.payload;
    },
  },
});

export const { setisCustomizable } = customizableBtn.actions;
export default customizableBtn.reducer;