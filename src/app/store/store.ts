import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postsApi} from "../../shared";

export const rootReducer= combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
});
