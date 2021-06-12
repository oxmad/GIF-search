import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchImages } from "@api/index";
import { DEFAULT_ERROR_MESSAGE, NO_RESULTS_ERROR } from "@constants/errors";

const initialState = {
  data: [],
  isLoading: false,
  viewedIds: [],
  error: null,
  searchText: "",
};

export const getImages = createAsyncThunk("app/getImages", fetchImages);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    addViewedImageId(state, action) {
      state.viewedIds.push(action.payload);
    },
  },
  extraReducers: {
    [getImages.pending]: state => {
      state.isLoading = true;
      state.viewedIds = [];
    },
    [getImages.fulfilled]: (state, action) => {
      state.data = action.payload;
      const [firstImage] = action.payload;

      if (!firstImage) {
        state.error = NO_RESULTS_ERROR;
      }

      state.isLoading = false;
    },
    [getImages.rejected]: state => {
      state.isLoading = false;
      state.error = DEFAULT_ERROR_MESSAGE;
    },
  },
});

export const {
  setError,
  clearError,
  setSearchText,
  addViewedImageId,
} = appSlice.actions;

export default appSlice.reducer;
