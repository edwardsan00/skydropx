import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import clsx from 'clsx'
import { useAppSelector, useAppDispatch } from '@/hooks/custom-redux'
import { createShipment } from '@/reducers/shipmentsReducer'
import { FullLoaderScreen } from '@/components/molecules/loader'
import { CardRate } from '@/components/molecules/card-rate'
import styles from '@/styles/shipments.module.css'

const ShipmentsPage: NextPage = () => {
  const data = {
    id: '7146454',
    type: 'rates',
    attributes: {
      created_at: '2018-12-18T15:00:22.141-06:00',
      updated_at: '2018-12-18T15:00:22.141-06:00',
      amount_local: '149.0',
      currency_local: 'MXN',
      provider: 'FEDEX',
      service_level_name: 'Fedex Express Saver',
      service_level_code: 'FEDEX_EXPRESS_SAVER',
      service_level_terms: null,
      days: 5,
      duration_terms: null,
      zone: null,
      arrives_by: null,
      out_of_area: true,
      out_of_area_pricing: '145.00',
      total_pricing: '294.0',
      is_occure: true,
    },
  } as any
  const dispatch = useAppDispatch()
  const { quoter } = useAppSelector((store) => store.shipments)

  useEffect(() => {
    if (Object.values(quoter).every((val) => val)) {
      dispatch(createShipment())
    } else {
      console.log('no hay na')
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-screen flex-col bg-sky-bg2',
        styles.shipments,
      ])}
    >
      <Head>
        <title>Shipments</title>
      </Head>
      <header className="m-auto flex h-16 w-full max-w-screen-lg items-center px-4 md:justify-between ">
        <img
          src="/assets/images/skydropx-logo.svg"
          className={styles.shipmentsLogo}
          alt="Skydropx"
        />
        <div>
          <p className="text-xs">
            Desde: <span className="font-bold">Ciudad de México</span>
          </p>
          <p className="text-xs">
            Hasta: <span className="font-bold">Jalisco</span>
          </p>
        </div>
      </header>
      <main className="m-auto flex w-full max-w-screen-lg grow flex-col px-4">
        <h2 className="mb-10 mt-10 text-2xl font-bold text-sky-blue">
          Todos los envios disponibles para ti
        </h2>
        <div
          className="mb-10 grid grid-cols-3 gap-10
        "
        >
          {[1, 2, 3, 4].map(() => (
            <CardRate />
          ))}
        </div>
      </main>
      {/* <FullLoaderScreen /> */}
    </div>
  )
}

export default ShipmentsPage
