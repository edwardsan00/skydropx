import { screen } from '@testing-library/react'
import { renderWithRedux } from '@/utils/renderWithRedux'
import HomePage from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const title = 'Todos tus envíos en un mismo lugar'
    renderWithRedux(<HomePage />)
    expect(screen.getByLabelText('title')).toHaveTextContent(title)
  })
})
