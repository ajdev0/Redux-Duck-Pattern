import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import error from "./middleware/error";
import logger from "./middleware/logger";
import api from "./middleware/api";
import reducer from "./reducer";
//creta store

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destnation: "console" }),
      error,
      api,
    ],
  }); // return store element
}
