import { logger } from 'redux-logger'
import {
  configureStore,
  ThunkAction,
  Action,
  StateFromReducersMapObject,
  PreloadedState,
} from '@reduxjs/toolkit'
import shipmentsReducer from '@/reducers/shipmentsReducer'

const reducer = {
  shipments: shipmentsReducer,
}

export type RootState = StateFromReducersMapObject<typeof reducer>

export const makeStore = function makeStore(
  preloadedState?: PreloadedState<RootState>
) {
  return configureStore({
    reducer: reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
