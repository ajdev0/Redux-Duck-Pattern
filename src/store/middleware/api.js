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
    next(action);
    if (action.type !== actions.apiCallBegan.type) return next(action);
    //api call
    //handle resolve casse
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const reponse = await axios.request({
        baseURL: "http://localhost:3000/api",
        url: "/bugs",
        method,
        data,
      });
      // geneal success action
      dispatch(actions.apiCallSuccess(reponse.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: reponse.data });
    } catch (error) {
      // geneal error action
      dispatch(actions.apiCallFailed(error));
      // spesific
      if (onError) dispatch({ type: onError, payload: error });
    }
  };

export default api;
