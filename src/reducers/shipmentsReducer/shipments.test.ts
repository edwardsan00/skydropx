import store from '@/store/index'
import { resetShipments } from '@/reducers/shipmentsReducer'
import { QuoterType } from '@/types/shipments'

describe('reducers/shipments', () => {
  it('Should return initial state', () => {
    const initialSate = {
      label: null,
      rates: [],
      loading: 'READY',
      error: null,
    }
    const shipments = store.getState().shipments
    expect(shipments).toEqual(initialSate)
  })
})
