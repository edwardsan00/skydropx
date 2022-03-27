import { screen, fireEvent, waitFor, getByRole } from '@testing-library/react'

import { renderWithRouterAndRedux } from '@/utils/customRender'
import { createMockRouter } from '@/utils/createMockRouter'
import HomePage from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const title = 'Todos tus envíos en un mismo lugar'
    renderWithRouterAndRedux(<HomePage />, createMockRouter({}))
    expect(screen.getByLabelText('title')).toHaveTextContent(title)
  })
  it('Should push route to /shioments with query pararms', async () => {
    const expectData = {
      from: '10',
      to: '20',
      weight: '30',
      length: '40',
      width: '50',
      height: '60',
    }
    const router = createMockRouter({ query: expectData })
    const { getByRole } = renderWithRouterAndRedux(<HomePage />, router)
    fireEvent.change(screen.getByLabelText('from'), {
      target: { value: expectData.from },
    })
    fireEvent.change(screen.getByLabelText('to'), {
      target: { value: expectData.to },
    })
    fireEvent.change(screen.getByLabelText('weight'), {
      target: { value: expectData.weight },
    })
    fireEvent.change(screen.getByLabelText('length'), {
      target: { value: expectData.length },
    })
    fireEvent.change(screen.getByLabelText('width'), {
      target: { value: expectData.width },
    })
    fireEvent.change(screen.getByLabelText('height'), {
      target: { value: expectData.height },
    })
    fireEvent.submit(getByRole('button'))
    await waitFor(() => {
      expect(router.push).toBeCalledWith({
        pathname: '/shipments',
        query: expectData,
      })
    })
  })
})
