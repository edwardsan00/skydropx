import clsx from 'clsx'
import { PlaneSolid, TruckSolid } from '@/components/atoms/icons'
import { TypeShipments } from '@/types/shipments'
import styles from './card-rate.module.css'

export type Attributes = {
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

export type Rate = {
  id: string
  type: TypeShipments
  attributes: Attributes
}

const iconArea = {
  plane: <PlaneSolid className="fill-sky-black" width={30} height={30} />,
  truck: <TruckSolid className="fill-sky-black" width={30} height={30} />,
}

type Props = {}

export const CardRate: React.FC<Props> = () => {
  return (
    <div className=" rounded-md bg-white p-4 shadow-sm">
      <div className="flex flex-row items-center justify-between  border-b border-gray-200 pb-2">
        <div className="flex flex-col items-start justify-center">
          <p className="text-xs font-light text-gray-400">Referencia</p>
          <p className="text-sm text-gray-600">UH-434234234</p>
        </div>
        <div className="flex items-center">{iconArea['truck']}</div>
      </div>
      <div className="flex flex-col items-start py-10">
        <div>
          <div className={styles.cardRateSteep}>
            <div className="relative">
              <div className={styles.cardRateSteepCircle} />
              <div className={styles.cardRateSteepDashed} />
            </div>
            <div className={styles.cardRateSteepRight}>
              <p className={styles.cardRateSteepTitle}>Salida: 25 Abril 2021</p>
            </div>
          </div>
          <div className={styles.cardRateSteep}>
            <div className="relative">
              <div className={styles.cardRateSteepCircle} />
              <div className={styles.cardRateSteepDashed} />
            </div>
            <div className={styles.cardRateSteepRight}>
              <p className={styles.cardRateSteepTitle}>Llegada 31 Abril 2021</p>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <p className="flex justify-between text-sm">
            Envio: <span>119.0</span>
          </p>
          <p className="mt-2 flex justify-between text-sm">
            Impuesto: <span>0.0</span>
          </p>
          <p className="text-md mt-2 flex items-center justify-between font-bold">
            Total:<span className={styles.cardRateAmout}>119.0</span>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-2">
        <p className="text-xs text-gray-400">Courier</p>
        <p className="text-sm text-gray-600">Fedex Express Saver</p>
      </div>
    </div>
  )
}
