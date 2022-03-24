import clsx from 'clsx'
import { useForm, Controller } from 'react-hook-form'
import { Input } from 'components/atoms/input'
import { Button } from 'components/atoms/button'
import { LocationSolid, WeightSolid, LengthSolid } from 'components/atoms/icons'
import styles from './formBudget.module.css'

export type FormInputs = {
  from: number | string
  to: number | string
  weight: number | string
  length: number | string
  width: number | string
  height: number | string
}

type Props = {
  onHandleSubmitData: (data: FormInputs) => void
}

export const FormBudget: React.FC<Props> = ({ onHandleSubmitData }) => {
  const numberRegex = /^\d+$/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      from: '',
      to: '',
      weight: '',
      length: '',
      width: '',
      height: '',
    },
  })
  const onSubmitForm = (data: FormInputs) => {
    onHandleSubmitData(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className={clsx([
        'flex w-full flex-col rounded-md bg-white px-8 pt-8 pb-5',
        styles.formBudgetBlur,
      ])}
    >
      <div className="flex w-full flex-col md:flex-row">
        <Input
          type="number"
          min={0}
          aria-label="from"
          {...register('from', { required: true, pattern: numberRegex })}
          fullWidth
          className="mb-2 md:mr-2"
          icon={<LocationSolid className="fill-sky-red" />}
          placeholder="Codigo origen"
        />

        <Input
          type="number"
          min={0}
          aria-label="to"
          {...register('to', { required: true, pattern: numberRegex })}
          fullWidth
          className="mb-2"
          icon={<LocationSolid className="fill-sky-red" />}
          placeholder="Codigo destino"
        />
      </div>
      <div className="flex w-full flex-col md:flex-row">
        <Input
          type="number"
          min={0}
          aria-label="weight"
          {...register('weight', { required: true, pattern: numberRegex })}
          fullWidth
          className="mb-2 md:mr-2"
          icon={<WeightSolid className="fill-sky-blue" />}
          placeholder="Peso (KG)"
        />

        <Input
          type="number"
          min={0}
          aria-label="length"
          {...register('length', { required: true, pattern: numberRegex })}
          fullWidth
          className="mb-2"
          icon={<LengthSolid className="fill-sky-black" />}
          placeholder="Largo (CM)"
        />
      </div>
      <div className="flex w-full flex-col md:flex-row">
        <Input
          type="number"
          min={0}
          aria-label="width"
          {...register('width', { required: true, pattern: numberRegex })}
          fullWidth
          className="mb-2 md:mr-2 md:mb-0"
          placeholder="Ancho (CM)"
        />

        <Input
          fullWidth
          type="number"
          min={0}
          aria-label="height"
          {...register('height', { required: true, pattern: numberRegex })}
          className="mb-2"
          placeholder="Alto (CM)"
        />
      </div>
      <div className="mt-2">
        <p
          aria-label="disclaimer"
          className={clsx([
            'mb-4 text-xs italic text-sky-gray',
            { ['text-red-900 underline']: Object.keys(errors).length },
          ])}
        >
          * Debes completar todos los campos para poder cotizar
        </p>
        <Button type="submit" className="w-full bg-sky-red text-white md:w-40">
          Buscar
        </Button>
      </div>
    </form>
  )
}
