const error = (store) => (next) => (action) => {
  if (action.type === "error") console.log("Notify :", action.payload.message);
  else next(action);
};
export default error;
