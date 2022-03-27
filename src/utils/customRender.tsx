import { render } from '@testing-library/react'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Provider } from 'react-redux'
import store from '@/store/index'

export const renderWithRouterAndRedux = (
  ui: JSX.Element,
  routeValue: NextRouter
) => {
  return render(
    <Provider store={store}>
      <RouterContext.Provider value={routeValue}>{ui}</RouterContext.Provider>
    </Provider>
  )
}
