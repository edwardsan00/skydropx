import styles from './loader.module.css'

type Props = {
  withText?: boolean
}

export const FullLoaderScreen: React.FC<Props> = ({ withText = false }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderBox}>
        <span className={styles.loaderLoader}></span>
        {withText ? <p className={styles.loaderLoading}>Cargando...</p> : null}
      </div>
    </div>
  )
}
