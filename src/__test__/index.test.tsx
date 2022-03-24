import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const title = 'Todos tus envíos en un mismo lugar'
    render(<HomePage />)
    expect(screen.getByLabelText('title')).toHaveTextContent(title)
  })
})
