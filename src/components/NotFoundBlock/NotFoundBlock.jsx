
import styles from './NotFoundBlock.module.scss'
export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}> <span>😞</span>
        <br />
        Ничего не найдено!
      </h1>
    </div>
  )
}
