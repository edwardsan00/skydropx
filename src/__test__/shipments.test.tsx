import { screen, fireEvent, waitFor } from '@testing-library/react'
import { createMockRouter } from '@/utils/createMockRouter'
import { renderWithRouterAndRedux } from '@/utils/customRender'
import { rates } from './__mocks__/rates'
import ShipmentsPage from '@/pages/shipments'
import { QuoterType, Rate } from '@/types/shipments'

const query = {
  from: '10',
  to: '20',
  weight: '1',
  length: '10',
  width: '10',
  height: '10',
} as QuoterType

describe('pages/shipments', () => {
  it('Should be render page', () => {
    renderWithRouterAndRedux(
      <ShipmentsPage queryPage={query} />,
      createMockRouter({})
    )
    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })
  it('Should be show rates iteration', () => {
    renderWithRouterAndRedux(
      <ShipmentsPage queryPage={query} />,
      createMockRouter({}),
      {
        shipments: {
          error: null,
          label: null,
          loading: 'READY',
          rates: rates as Rate[],
        },
      }
    )
    expect(screen.getAllByLabelText('rate').length).toEqual(2)
  })
})
