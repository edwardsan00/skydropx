import { logger } from 'redux-logger' 
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userReducer from 'src/reducers/userReducer'


export const makeStore = function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })
} 

const store = makeStore()

export type RootState  = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState ,
  unknown,
  Action<string>
>

export default store