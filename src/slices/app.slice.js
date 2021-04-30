import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const DEFAULT_ERROR_MESSAGE = "Request failed. Try again later.";

const getImages = createAsyncThunk("app/getImages", loadData);

const initialState = {
    data: [],
    isLoading: false,
    currentImage: null,
    viewedIds: [],
    error: null,
    searchText: "",
};

createSlice({
    name: "app",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [getImages.pending]: state => {
            state.isLoading = true;
        },
        [getImages.fulfilled]: (state, action) => {
            const [firstImage] = action.payload;
            state.data = action.payload;

            if (firstImage) {
                state.currentImage = firstImage;
                state.viewedIds.push(firstImage.id);
            }

            state.isLoading = false;
        },
        [getImages.rejected]: state => {
            state.isLoading = false;
            state.error = DEFAULT_ERROR_MESSAGE;
        },
    },
});
