import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '@/store/index'

export const renderWithRedux = (ui: JSX.Element): RenderResult =>
  render(<Provider store={store}>{ui}</Provider>)
