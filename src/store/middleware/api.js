/*const action = {
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsRecievd",
    onError: "apiRequestFailed",
  },
};*/
import axios from "axios";
import * as actions from "../api";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) next(action);
    //api call
    //handle resolve casse
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      const reponse = await axios.request({
        baseURL: "http://localhost:3000/api",
        url,
        method,
        data,
      });
      // geneal success action
      dispatch(actions.apiCallSuccess(reponse.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: reponse.data });
    } catch (error) {
      // geneal error action
      dispatch(actions.apiCallFailed(error.message));
      // spesific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
