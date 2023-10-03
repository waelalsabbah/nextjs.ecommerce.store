import Image from 'next/image';
import Hero from '../public/images/Hero.svg';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}> your best choice destination</h1>
        <p className={styles.descreption}>
          Discover a world of indless Shoping
        </p>
        <button className={styles.button}>Shop now</button>
      </div>

      <div className={styles.col}>
        <Image src={Hero} alt="WAELSHOP" />
      </div>
    </div>
  );
}
