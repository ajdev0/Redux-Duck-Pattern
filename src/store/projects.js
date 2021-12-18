import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
        resolved: false,
      });
    },
    resolveProject: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects[index].resolved = true;
    },
  },
});
export const { addProject, resolveProject } = projectSlice.actions;
export default projectSlice.reducer;
