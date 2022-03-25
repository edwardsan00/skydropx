import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useAppSelector, useAppDispatch } from '@/hooks/custom-redux'
import { createShipment } from '@/reducers/shipmentsReducer'

const ShipmentsPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const { quoter } = useAppSelector((store) => store.shipments)

  useEffect(() => {
    if (Object.values(quoter).every((val) => val)) {
      dispatch(createShipment())
    } else {
      console.log('no hay na')
    }
  }, [])

  return <div>Hola</div>
}

export default ShipmentsPage
