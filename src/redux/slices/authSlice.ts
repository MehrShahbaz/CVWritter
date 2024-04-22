/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from 'types/authTypes';

const initialState: AuthSliceState = {
  isAuthenticated: false,
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
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isAuthLoading = false;

      if (action.payload) {
        state.isAuthenticated = action.payload;
      }
    });
    builder.addCase(fetchCategories.rejected, (state, _action) => {
      state.isAuthLoading = false;
    });
  },
});

export const fetchCategories = createAsyncThunk('category/fetchCategories', async (isAuthenticated: boolean) => {
  try {
    console.log('Try');

    return isAuthenticated;
  } catch (err: any) {
    console.log(err);
  }
});

export default authSlice.reducer;
