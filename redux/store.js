import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'


export const store = configureStore({
  /**
   * Compiles all of the reducers together
   * and initializes the initial states in
   * the store, which is called in _app.js.
   * 
   */
  reducer: {
    //isHeaderSearchOpen: headerSearchReducer, 

    // API
    //[fwvApi.reducerPath]: fwvApi.reducer,

    // testing only
    counter: counterReducer,
    //[example.reducerPath]: example.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(
      //fwvApi.middleware,
      //example.middleware
    )
  }
})