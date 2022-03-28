export type TypeShipments = 'shipments' | 'parcels' | 'rates' | 'addresses'

export type BaseShipment = {
  id: string
  type: TypeShipments
}

export type ShipmentsAttr<Attributes> = {
  attributes: Attributes
} & BaseShipment

export type QuoterType = {
  from: string
  to: string
  weight: string
  length: string
  width: string
  height: string
}

export type RateAttributes = {
  created_at: string
  updated_at: string
  amount_local: string
  currency_local: string
  provider: string
  service_level_name: string
  service_level_code: string
  service_level_terms: string | null
  days: number
  duration_terms: string | null
  zone: string | null
  arrives_by: string | null
  out_of_area: boolean
  out_of_area_pricing: string
  total_pricing: string
  is_occure: boolean
}

export type LabelAttributes = {
  created_at: string
  updated_at: string
  status: string | null
  tracking_number: string
  tracking_status: string | null
  label_url: string
  tracking_url_provider: string
  rate_id: number
  error_message: Array<{ message: string }>
}

export type Label = ShipmentsAttr<LabelAttributes>
export type Rate = ShipmentsAttr<RateAttributes>
