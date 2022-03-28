import { logger } from 'redux-logger'
import {
  configureStore,
  ThunkAction,
  Action,
  StateFromReducersMapObject,
  PreloadedState,
} from '@reduxjs/toolkit'
import { shipmentsSlice } from '@/reducers/shipmentsReducer'
import { createWrapper } from 'next-redux-wrapper'

const reducer = {
  [shipmentsSlice.name]: shipmentsSlice.reducer,
}

export type RootState = StateFromReducersMapObject<typeof reducer>

export const makeStore = function makeStore(preloadedState?: any) {
  return configureStore({
    reducer: reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

const store = makeStore()

export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof makeStore>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export const wrapper = createWrapper<AppStore>(makeStore)
export default store
