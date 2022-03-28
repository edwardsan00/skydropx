import styles from './loader.module.css'

export const FullLoaderScreen = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderBox}>
        <span className={styles.loaderLoader}></span>
        <p className={styles.loaderLoading}>Cargando...</p>
      </div>
    </div>
  )
}
