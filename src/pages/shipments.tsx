import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import clsx from 'clsx'
import { useAppSelector, useAppDispatch } from '@/hooks/custom-redux'
import {
  createShipment,
  createLabel,
  resetShipments,
} from '@/reducers/shipmentsReducer'
import { QuoterType } from '@/types/shipments'
import { FullLoaderScreen } from '@/components/molecules/loader'
import { CardRate } from '@/components/molecules/card-rate'
import styles from '@/styles/shipments.module.css'

export type Props = {
  queryPage: QuoterType
}

type RateSelected = {
  rateId: string
  courier: string
}

const ShipmentsPage: NextPage<Props> = ({ queryPage }) => {
  const router = useRouter()
  const [rateSelected, setRateSelected] = useState<null | RateSelected>(null)
  const { rates, loading, error, label } = useAppSelector(
    (state) => state.shipments
  )
  const dispatch = useAppDispatch()

  const handleSelectRate = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value: rateId } = currentTarget
    const courier = currentTarget.dataset.courier as string
    setRateSelected({ courier, rateId })
  }

  const handleSendRate = () => {
    if (rateSelected?.rateId)
      dispatch(createLabel(parseInt(rateSelected.rateId)))
  }

  useEffect(() => {
    if (label && label.label_url) {
      window.open(label.label_url, '_blank')
      router.push('/')
      return () => {
        dispatch(resetShipments())
      }
    }
  }, [label])

  useEffect(() => {
    dispatch(createShipment(queryPage))
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
      <header className="m-auto flex h-16 w-full max-w-screen-lg items-center justify-between px-4 ">
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
      <main className="m-auto flex w-full max-w-screen-lg grow flex-col px-4 pb-20">
        {rates.length ? (
          <>
            <h2 className="mb-10 mt-10 text-2xl font-bold text-sky-blue">
              Todos los envios disponibles para ti
            </h2>
            <div
              className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3
            "
            >
              {rates.map((rate, index) => (
                <CardRate
                  bestOption={index == 0}
                  key={rate.id}
                  value={rate.id}
                  rate={rate}
                  onChange={handleSelectRate}
                  name="shipmentRate"
                />
              ))}
            </div>
          </>
        ) : null}
        {(loading === 'READY' && !rates.length) || error ? (
          <div className=" flex w-full flex-col items-center justify-center">
            <img
              className={styles.shipmentNotFound}
              src="/assets/images/not-found.svg"
              alt="No hay envios disponibles"
            />
            <p className="mt-5 text-center text-2xl font-bold text-sky-red">
              ¡Lo sentimos!
            </p>
            <p className="mt-2 text-center text-sm text-sky-black">
              No encontramos envios disponibles para ti en este momento
            </p>
          </div>
        ) : null}
      </main>
      {loading === 'LOADING' ? <FullLoaderScreen /> : null}
      <div
        className={clsx([
          styles.shipmentFixFooter,
          'shadow-lg',
          { [styles.shipmentFixFooterActive]: rateSelected },
        ])}
      >
        <div className="m-auto flex h-full w-full max-w-screen-lg items-center justify-between px-4 ">
          <div>
            <p className="text-xs">{rateSelected?.rateId}</p>
            <p className="font-bold">{rateSelected?.courier}</p>
          </div>
          <button
            onClick={handleSendRate}
            className="rounded bg-sky-green p-3 text-white transition-all hover:bg-green-400"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

ShipmentsPage.getInitialProps = async ({ query, res }) => {
  const queryValidate: (keyof QuoterType)[] = [
    'from',
    'to',
    'weight',
    'height',
    'length',
    'width',
  ]
  const queryPage = query as QuoterType
  const isValidQuery = queryValidate.every(
    (val) =>
      Object.prototype.hasOwnProperty.call(queryPage, val) && queryPage[val]
  )
  if (!isValidQuery) {
    res?.writeHead(301, { Location: '/' })
    res?.end()
  }

  return { queryPage }
}

export default ShipmentsPage
