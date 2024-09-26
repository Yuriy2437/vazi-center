import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  filteredQuestions: [],
  filter: '',
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setFilteredQuestions: (state, action) => {
      state.filteredQuestions = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setQuestions, setFilteredQuestions, setFilter } =
  feedbackSlice.actions;

export default feedbackSlice.reducer;
