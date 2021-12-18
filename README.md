# Redux Duck Pattern

create redux with duck pattern

## File Structure

```
|src/
|   store/
|   |   auth.js => actionCreators+actionTypes+reducer
|   |   bugs.js =>  actionCreators+actionTypes+reducer
|   |   configureStore.js => store
|   |   entites.js => combineReducer
```

each file in store represent a feature

## Rules To Follow Duck Pattern

1. reducer must be a default export
2. exprot indivdual action creators

# Redux ToolKit

### Benfits

- create store by use {configureStore}
- dipatch asyn operatoin
- no need to devTools Enhancer
- simplify actions by use {createAction}
- combine actiontypes and the actionCreators by using createAction
- crate reducer by createReducer([],{actions})
- create Slice combine action and reducer

# Designing Redux Store

Store ALL State at state exclude form state store it local.

- unified data access
- cacheablity
- easier debugging
- more testable code

# Combine Reducers

- add reducer.js file
- imp {combineReducers}

```js
combineReducers({
  bugs: bugReducer,
  projects: projectRrducer,
});
```

-

# Normlization

we should not duplicate data in our store
we can use libray called normlizr

# Selectors

is fuction that take state and return combuted state

# Memorize Selector

npm i reslect

- cache the result
