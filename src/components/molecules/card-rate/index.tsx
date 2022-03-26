import clsx from 'clsx'
import {
  PlaneSolid,
  TruckSolid,
  CheckSolid,
  MedalSolid,
} from '@/components/atoms/icons'
import { Rate } from '@/types/shipments'
import styles from './card-rate.module.css'
import React from 'react'

const iconArea = {
  plane: <PlaneSolid className="fill-sky-black" width={30} height={30} />,
  truck: <TruckSolid className="fill-sky-black" width={30} height={30} />,
}

type Props = {
  rate: Rate
  bestOption: boolean
} & React.ComponentPropsWithoutRef<'input'>

const addDays = (days: number) => {
  const limitDay = new Date()
  limitDay.setDate(limitDay.getDate() + days)
  return limitDay
}

export const CardRate = React.forwardRef(function RadioCardRate(
  props: Props,
  ref: React.Ref<HTMLInputElement>
) {
  const today = new Date()
  const { id, rate, bestOption = false, ...rest } = props
  const {
    id: idRate,
    attributes: {
      days,
      out_of_area,
      out_of_area_pricing,
      amount_local,
      total_pricing,
      service_level_name,
    },
  } = rate
  return (
    <label htmlFor={id} className={styles.cardRate}>
      <input
        type="radio"
        data-courier={service_level_name}
        className={styles.cardRateInput}
        ref={ref}
        {...rest}
      />
      <div className={styles.cardRateWraperIcon}>
        <CheckSolid width={24} height={24} className="fill-sky-violet" />
      </div>
      <div
        className={clsx([
          'rounded-md bg-white p-4 shadow-sm',
          styles.cardRateCheck,
        ])}
        id={id}
      >
        <div className="flex flex-row items-center justify-between  border-b border-gray-200 pb-2">
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs font-light text-gray-400">Referencia</p>
            <p className="text-sm text-gray-600">{idRate}</p>
          </div>
          <div className="flex items-center">
            {iconArea[out_of_area ? 'plane' : 'truck']}
          </div>
        </div>
        <div className="flex flex-col items-start py-10">
          <div>
            <div className={styles.cardRateSteep}>
              <div className="relative">
                <div className={styles.cardRateSteepCircle} />
                <div className={styles.cardRateSteepDashed} />
              </div>
              <div className={styles.cardRateSteepRight}>
                <p className={styles.cardRateSteepTitle}>
                  Salida:{' '}
                  {new Intl.DateTimeFormat('es', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  }).format(today)}
                </p>
              </div>
            </div>
            <div className={styles.cardRateSteep}>
              <div className="relative">
                <div className={styles.cardRateSteepCircle} />
                <div className={styles.cardRateSteepDashed} />
              </div>
              <div className={styles.cardRateSteepRight}>
                <p className={styles.cardRateSteepTitle}>
                  Llegada:{' '}
                  {new Intl.DateTimeFormat('es', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  }).format(addDays(days))}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <p className="flex justify-between text-sm">
              Envio: <span>{amount_local}</span>
            </p>
            <p className="mt-2 flex justify-between text-sm">
              Impuesto: <span>{out_of_area_pricing}</span>
            </p>
            <p className="text-md mt-2 flex items-center justify-between font-bold">
              Total:
              <span className={styles.cardRateAmout}>{total_pricing}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <div>
            <p className="text-xs text-gray-400">Courier</p>
            <p className="text-sm text-gray-600">{service_level_name}</p>
          </div>
          {bestOption ? (
            <div className="rounded">
              <MedalSolid className="fill-sky-red" />
            </div>
          ) : null}
        </div>
      </div>
    </label>
  )
})
