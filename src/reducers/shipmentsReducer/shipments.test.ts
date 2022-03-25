import store from '@/store/index'
import { saveQuoteInput } from '@/reducers/shipmentsReducer'
import { QuoterType } from '@/types/quoter'

describe('reducers/shipments', () => {
  it('Should return initial state', () => {
    const initialSate = {
      quoter: {
        from: '',
        height: '',
        length: '',
        to: '',
        weight: '',
        width: '',
      },
      isLoading: false,
      error: null,
    }
    const shipments = store.getState().shipments
    expect(shipments).toEqual(initialSate)
  })
  it('Should assing new values in quoter propertie', () => {
    const data = {
      from: '100',
      height: '100',
      length: '100',
      to: '100',
      weight: '100',
      width: '100',
    } as QuoterType
    let shipments = store.getState().shipments
    store.dispatch(saveQuoteInput(data))
    shipments = store.getState().shipments
    expect(shipments.quoter).toEqual(data)
  })
})
