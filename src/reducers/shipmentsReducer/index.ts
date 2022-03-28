import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toast'
import { Skydropx } from '@/constants/endpoints'
import { Post } from '@/utils/api'
import {
  QuoterType,
  Rate,
  ShipmentsAttr,
  RateAttributes,
  LabelAttributes,
  Label,
} from '@/types/shipments'

type Loading = 'NEW' | 'LOADING' | 'READY'

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
    contents: 'caja',
  },
  consignment_note_class_code: '53131600',
  consignment_note_packaging_code: '1H1',
}

export type ShipmentsSliceState = {
  rates: Rate[]
  label: LabelAttributes | null
  loading: Loading
  error: null | string
}

const initialState: ShipmentsSliceState = {
  label: null,
  rates: [],
  loading: 'NEW',
  error: null,
}

export const createShipment = createAsyncThunk(
  'shipments/createShipment',
  async (quote: QuoterType) => {
    const { weight, width, height, length } = quote
    const body = {
      ...CREATE_SHIPMENT,
      parcels: [
        ...CREATE_SHIPMENT.parcels,
        {
          ...PARCEL,
          weight: parseInt(weight),
          height: parseInt(height),
          width: parseInt(width),
          length: parseInt(length),
        },
      ],
    } as any
    return await Post(Skydropx.CreateShipment, {
      body,
    })
  }
)

export const createLabel = createAsyncThunk(
  'shipments/createLabel',
  async (rateId: number) => {
    const body = { rate_id: rateId, label_format: 'pdf' }
    return await Post(Skydropx.CreateLabel, {
      body,
    })
  }
)

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    resetShipments: (state) => {
      state.error = initialState.error
      state.label = initialState.label
      state.loading = initialState.loading
      state.rates = initialState.rates
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShipment.pending, (state) => {
        state.loading = 'LOADING'
      })
      .addCase(
        createShipment.fulfilled,
        (state, action: PayloadAction<Record<string, any>>) => {
          const { included = [] } = action.payload
          state.loading = 'READY'
          state.rates = included
            .filter(
              (included: ShipmentsAttr<RateAttributes>) =>
                included.type === 'rates'
            )
            .sort((a: Rate, b: Rate) => {
              return (
                parseInt(a.attributes.total_pricing, 10) -
                parseInt(b.attributes.total_pricing, 10)
              )
            })
        }
      )
      .addCase(createShipment.rejected, (state) => {
        const message = 'Ha ocurrido un error generando la cotizacion'
        state.loading = 'READY'
        state.error = message
        toast.error(message)
      })
      .addCase(createLabel.pending, (state) => {
        state.loading = 'LOADING'
      })
      .addCase(
        createLabel.fulfilled,
        (state, action: PayloadAction<{ data: Label }>) => {
          state.loading = 'READY'
          state.label = action?.payload?.data?.attributes

          const {
            data: { attributes: { status, error_message = [] } = {} } = {},
          } = action.payload

          if (status === 'ERROR' && error_message.length) {
            error_message.forEach(({ message }) => toast.error(message))
          }
        }
      )
      .addCase(createLabel.rejected, (state) => {
        const message = 'Ha ocurrido un error generando el pdf'
        state.loading = 'READY'
        state.error = message
        toast.error(message)
      })
  },
})

export const { resetShipments } = shipmentsSlice.actions

export default shipmentsSlice.reducer
