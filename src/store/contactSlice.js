import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submissions: [],
  status: "idle", // idle | sending | success | error
  error: null
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submitStart: (state) => {
      state.status = "sending";
      state.error = null;
    },
    submitSuccess: (state, action) => {
      state.status = "success";
      state.submissions.push(action.payload);
    },
    submitFailure: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    resetStatus: (state) => {
      state.status = "idle";
    }
  }
});

export const { submitStart, submitSuccess, submitFailure, resetStatus } = contactSlice.actions;

// Simulating Async API Post Call
export const submitContactForm = (messageData) => (dispatch) => {
  dispatch(submitStart());
  
  setTimeout(() => {
    dispatch(
      submitSuccess({
        ...messageData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      })
    );
  }, 1500);
};

export default contactSlice.reducer;
