import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuoterType } from '@/types/shipments'
import type { RootState, AppThunk } from 'src/store'

const PARCEL = {
  weight: 0,
  distance_unit: 'CM',
  mass_unit: 'KG',
  height: 0,
  width: 0,
  length: 0,
}

const CREATE_SHIPMENT = {
  address_from: {
    province: 'Ciudad de México',
    city: 'Azcapotzalco',
    name: 'Jose Fernando',
    zip: '02900',
    country: 'MX',
    address1: 'Av. Principal #234',
    company: 'skydropx',
    address2: 'Centro',
    phone: '5555555555',
    email: 'skydropx@email.com',
  },
  parcels: [],
  address_to: {
    province: 'Jalisco',
    city: 'Guadalajara',
    name: 'Jorge Fernández',
    zip: '44100',
    country: 'MX',
    address1: ' Av. Lázaro Cárdenas #234',
    company: '-',
    address2: 'Americana',
    phone: '5555555555',
    email: 'ejemplo@skydropx.com',
    reference: 'Frente a tienda de abarro',
    contents: '',
  },
  consignment_note_class_code: '53131600',
  consignment_note_packaging_code: '1H1',
}

export type ShipmentsSliceState = {
  quoter: QuoterType
  isLoading: boolean
  error: null | string
}

const initialState: ShipmentsSliceState = {
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

export const createShipment = createAsyncThunk(
  'shipments/createShipment',
  async (_, { getState }) => {
    const {
      shipments: {
        quoter: { weight, width, length, height },
      },
    } = getState() as RootState
    try {
      const body = {
        ...CREATE_SHIPMENT,
        parcels: [
          ...CREATE_SHIPMENT.parcels,
          {
            ...PARCEL,
            weight,
            height,
            width,
            length,
          },
        ],
      }
      console.log('🚀 ~ file: index.ts ~ line 28 ~ body', body)
    } catch (err) {
      throw err
    }
    const response = await (await fetch('test')).json()
    return response.data
  }
)

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    saveQuoteInput: (state, action: PayloadAction<QuoterType>) => {
      state.quoter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShipment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createShipment.fulfilled, (state, action) => {})
      .addCase(createShipment.rejected, (state) => {
        state.isLoading = false
        state.error = 'Ocurrio un error'
      })
  },
})

export const { saveQuoteInput } = shipmentsSlice.actions

export default shipmentsSlice.reducer
