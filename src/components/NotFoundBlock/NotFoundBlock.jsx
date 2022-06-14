import { Link } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        {' '}
        <span>😞</span>
        <br />
        Ничего не найдено!
      </h1>
      <span className={styles.back}>
        <Link to="/">Вернуться на главную</Link>
      </span>
    </div>
  );
};
