# Redux Architecure

we can't mutate the state
reducer take the state and return the updated state
`reducer(state,action)`

> Arch = Action ==dispatch==> Store => <==Reducer

# STEPS TO CREATE REDUUX

1. Design the store
2. Define the Actions
3. Create a reducer
4. Set up the store

# STEP 1

app that show list of bugs

arch=> store design

```json
{
  "bugs": [
    {
      "id": 1,
      "description": "Bug 1",
      "resolved": false
    }
  ],
  "currentUser": {}
}
```

# STEP 2

Define the action

- add bug
- mark as resolved
- delete bug

```js
{
  type: "ADD_BUG"; // IMPORTANT
  payload: {
    //contain a minimum information we need about action
    id: 1;
  }
  description: "...";
}
```

# STEP 3

reducer is pure function always return the same result
create reducer.js in src/

```js
function refucer(state [], action){
switch(action.type){
case "bugAddeed":
return [
...state,
{
id:++lastId,
description: action.payload.description
resolved:true
}
]
case "bugRemoved":
retutn state.filter(bug => bug.id !== action.payload.id);
defulat
return state

    }

}
```

# STEP 4

in index file
import store
log(store)
log(store.getstate)
=> dispatch action

```js
store.dispatch({
    type:"bugAdded"
    payload:{
        id:1
    }
})
```

### subscripe to store

```js
const unsubscribe = store.subscribe(() =>
  log("store changed/", store.getState())
);
```

## action

seperate in file actionTypes
export const BUG_ADDED = "bugAdded";

## action create

create file actions.js
add functions bugadded
