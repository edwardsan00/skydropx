import store from '@/store/index'
import reducerShipments, {
  ShipmentsSliceState,
  resetShipments,
  createShipment,
  createLabel,
} from '@/reducers/shipmentsReducer'
import createShipmentResponse from '@/reducers/shipmentsReducer/__mocks__/create-shipments.json'
import createLabelResponse from '@/reducers/shipmentsReducer/__mocks__/create-label.json'

const initialSate = {
  label: null,
  rates: [],
  loading: 'NEW',
  error: null,
} as ShipmentsSliceState

describe('reducers/shipments', () => {
  it('Should return initial state', () => {
    const shipments = store.getState().shipments
    expect(shipments).toEqual(initialSate)
  })
  it('Should reset the store with reducer', () => {
    const previousState = {
      rates: [],
      error: null,
      loading: 'READY',
      label: null,
    } as ShipmentsSliceState
    expect(reducerShipments(previousState, resetShipments())).toEqual(
      initialSate
    )
  })
  describe('createAsyncThunk/createShipment', () => {
    it('Should be createShipment pending', () => {
      const action = { type: createShipment.pending }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('LOADING')
    })
    it('Should be createShipment fulfilled', () => {
      const action = {
        type: createShipment.fulfilled,
        payload: createShipmentResponse,
      }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('READY')
      expect(reducer.rates.length).toEqual(5)
    })
    it('Should be createShipment rejected', () => {
      const action = {
        type: createShipment.rejected,
      }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('READY')
      expect(reducer.error).toEqual(
        'Ha ocurrido un error generando la cotizacion'
      )
    })
  })

  describe('createAsyncThunk/createLabel', () => {
    it('Should be createLabel pending', () => {
      const action = { type: createLabel.pending }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('LOADING')
    })
    it('Should be createLabel fulfilled', () => {
      const action = {
        type: createLabel.fulfilled,
        payload: createLabelResponse,
      }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('READY')
      expect(reducer.label).not.toBeNull()
    })
    it('Should be createLabel rejected', () => {
      const action = {
        type: createLabel.rejected,
      }
      const reducer = reducerShipments(initialSate, action)
      expect(reducer.loading).toEqual('READY')
      expect(reducer.error).toEqual('Ha ocurrido un error generando el pdf')
    })
  })
})
