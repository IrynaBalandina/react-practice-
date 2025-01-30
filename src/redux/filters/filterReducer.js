import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filter: "",
};

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filter/setFilter": {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

// const setFilter = (payload) => {
//     return {
//         type: "filter/setFilter",
//         payload
//     }
// }