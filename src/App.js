import "./App.css";
import configureStore from "./store/configureStore";
// import {
//   bugAdded,
//   bugResolved,
//   getUnresolvedBugs,
//   getBugsByUser,
//   assignBugUser,
// } from "./store/bugs";
// import { addProject, resolveProject } from "./store/projects";
import React, { Component } from "react";
import * as actions from "./store/api";
import { loadBugs } from "./store/bugs";
// import { addUser } from "./store/auth";

const store = configureStore();
// console.log(store);
//api
store.dispatch(loadBugs());

/*
store.dispatch({ type: "error", payload: { message: "An error occured" } });
store.dispatch((dispatch, getState) => {
  //Call Api
  //when propise is resolved dispatch
  dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
  console.log(getState());
  //if the proise is rejectied dispatch
});


const unsubscribe = store.subscribe(() =>
  console.log("Store Changed", store.getState())
);
//User
store.dispatch(addUser({ name: "abrar" }));

//Projects
// store.dispatch(addProject({ name: "project 1" }));
// store.dispatch(resolveProject({ id: 1 }));

// //Bugs
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));

// //Assign bug to user {normlize conacept}
// store.dispatch(assignBugUser({ bugId: 2, userId: 1 }));
// store.dispatch(assignBugUser({ bugId: 3, userId: 1 }));

// // store.dispatch(bugAdd("Bug 2"));
// store.dispatch(bugResolved({ id: 1 }));

// // unsubscribe();
// // store.dispatch(bugRemove(1));

// //User Associteds bugs
// const userBugs = getBugsByUser(1)(store.getState());
// console.log("User Bugs List", userBugs);

// //Resolved Bugs
// const unResolvedBugs = getUnresolvedBugs(store.getState());
// console.log("unResolvedBugs", unResolvedBugs);
*/
class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default App;
