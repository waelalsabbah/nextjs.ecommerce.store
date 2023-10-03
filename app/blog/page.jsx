import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Blog() {
  return (
    <div className={styles.container}>
      <Link href="/id" className={styles.post}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={
              'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg'
            }
            width={350}
            height={250}
            alt="post image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>post Title</h1>
            <p className={styles.text}>post Text</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={
              'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg'
            }
            width={350}
            height={250}
            alt="post image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>post Title</h1>
            <p className={styles.text}>post Text</p>
          </div>
        </div>
      </Link>
      <Link href="/id" className={styles.post}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={
              'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg'
            }
            width={350}
            height={250}
            alt="post image"
          />
          <div className={styles.content}>
            <h1 className={styles.title}>post Title</h1>
            <p className={styles.text}>post Text</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
