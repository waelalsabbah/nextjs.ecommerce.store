import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

export default function Post() {
  return (
    <div className={styles.Container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>xx</h1>
          <p className={styles.description}>xx</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src="https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg"
            alt="post image"
            fill={true}
          />
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum
          quibusdam illum? Sint blanditiis modi tenetur ab corrupti, porro eum
          maxime cum accusamus nesciunt dicta voluptatum neque doloribus itaque
          dignissimos.
        </p>
      </div>
    </div>
  );
}
