import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
let lastId = 0;

// Action Creators + action types combined
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsResived: (bugs, action) => {
      bugs.list = action.payload;
    },
    assignBugUser: (bugs, action) => {
      const { userId, bugId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});
// expor action + reducer
export const { bugAdded, bugResolved, assignBugUser, bugsResived } =
  slice.actions;
export default slice.reducer;

//action creator
const url = "/bugs ";
export const loadBugs = () =>
  apiCallBegan({
    url: url,
    onSuccess: bugsResived.type,
  });

//Selector

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs, //we can pass multi selectors
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs, //we can pass multi selectors
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
