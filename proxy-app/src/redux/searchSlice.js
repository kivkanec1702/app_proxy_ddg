import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchQuery = createAsyncThunk('search/query', async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const searchHistoryQuery = createAsyncThunk('search/historyQuery', async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    status: 'idle',
    error: null,
    history: [],
  },
  reducers: {
    addToSearchHistory: (state, action) => {
      state.history.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchQuery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchQuery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(searchQuery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchHistoryQuery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchHistoryQuery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.history = action.payload;
      })
      .addCase(searchHistoryQuery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectSearchResults = (state) => state.search.results;
export const selectSearchHistory = (state) => state.search.history;

export const { addToSearchHistory } = searchSlice.actions;

export default searchSlice.reducer;