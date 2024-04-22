/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from 'types/authTypes';

const initialState: AuthSliceState = {
  isLoggedIn: false,
  isAuthLoading: false,
};
const authSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, _action) => {
      state.isAuthLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, _action) => {
      state.isAuthLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state, _action) => {
      state.isAuthLoading = false;
    });
  },
});

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  try {
    console.log('Try');
  } catch (err: any) {
    console.log(err);
  }
});

export default authSlice.reducer;
