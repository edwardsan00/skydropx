import { render, RenderResult } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Provider } from 'react-redux'
import store, { RootState, makeStore } from '@/store/index'

interface RenderWithRouterAndRedux {
  (
    ui: JSX.Element,
    routerOptions: NextRouter,
    preloadedState?: PreloadedState<RootState>
  ): RenderResult
}

export const renderWithRouterAndRedux: RenderWithRouterAndRedux = (
  ui,
  routerOptions,
  preloadedState
) => {
  const localStore = Boolean(preloadedState) ? makeStore(preloadedState) : store
  return render(
    <Provider store={localStore}>
      <RouterContext.Provider value={routerOptions}>
        {ui}
      </RouterContext.Provider>
    </Provider>
  )
}
