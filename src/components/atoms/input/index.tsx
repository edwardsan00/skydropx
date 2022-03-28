import React from 'react'
import clsx from 'clsx'
import styles from './input.module.css'

type InputProps = {
  fullWidth?: boolean
  icon?: JSX.Element
} & React.ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const { className, fullWidth = false, icon = undefined, ...rest } = props

  const RenderIcon = (icon: JSX.Element) => {
    return React.cloneElement(icon, {
      className: `${icon.props.className}  ${styles.inputIcon}`,
    })
  }

  return (
    <div
      className={clsx([
        styles.inputContainer,
        { [styles.fullWidth]: fullWidth },
        className,
      ])}
    >
      <div className={styles.inputWrapper}>
        {icon ? RenderIcon(icon) : null}
        <input
          aria-label="input"
          {...rest}
          ref={ref}
          className={clsx([styles.input, { [styles.inputPadding]: icon }])}
        />
      </div>
    </div>
  )
})
