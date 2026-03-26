'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sectionVariants } from '@/animations/variants';
import styles from '@/sections/sections.module.css';

export function AboutSection() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0.1, 0.4], [1.02, 1.11]);

  return (
    <motion.section
      id="about"
      className={`${styles.section} ${styles.aboutSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className={styles.twoCol}>
        <div>
          <p className={styles.overline}>About</p>
          <h2 className={styles.title}>Building calm, human software from first idea to final release.</h2>
          <p className={styles.body}>
            Over the past months, I have contributed to building digital experiences alongside product teams.
            My work focuses on the intersection of engineering and design, paying attention to details like spacing, simple animations, and smooth loading states that help improve product quality.
          </p>
          <p className={styles.body}>
            I am passionate about writing maintainable code, learning performance best practices, and creating interfaces that users find intuitive and reliable.
          </p>
        </div>

        <motion.div className={styles.avatarWrap} style={{ scale: imageScale }}>
          <Image
            src="/images/mainImg.png"
            alt="Developer portrait style card"
            width={600}
            height={760}
            sizes="(max-width: 920px) 90vw, (max-width: 1200px) 50vw, 600px"
            className={styles.avatar}
            priority={false}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
