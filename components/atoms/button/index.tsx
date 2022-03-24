import React from 'react'
import clsx from 'clsx'
import styles from './button.module.css'

type ButtonProps = {
  fullWidth?: boolean
  loading?: boolean
} & React.ComponentPropsWithoutRef<'button'>

export const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    className,
    children,
    fullWidth = false,
    loading = false,
    ...rest
  } = props
  return (
    <button
      aria-label="button"
      className={clsx([
        styles.button,
        { [styles.buttonFull]: fullWidth },
        className,
      ])}
      ref={ref}
      {...rest}
    >
      {loading ? <div className="button__loader" /> : children}
    </button>
  )
})
