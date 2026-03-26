'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { AmbientBackground } from '@/components/AmbientBackground';
import { characterReveal, fadeUpChild, staggerParent } from '@/animations/variants';
import styles from '@/sections/sections.module.css';

const headline = 'Designing seamless web & mobile experiences';
const letters = Array.from(headline);

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 55]);

  return (
    <section id="hero" className={`${styles.section} ${styles.hero}`}>
      <AmbientBackground />
      <motion.div
        className={styles.heroGradient}
        aria-hidden
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div className={styles.heroInner} style={{ y }} variants={staggerParent} initial="hidden" animate="visible">
        <motion.p className={styles.kicker} variants={fadeUpChild}>
          Web & Mobile App Developer
        </motion.p>

        <h1 className={styles.heroTitle} aria-label="Designing seamless web and mobile experiences">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className={letter === ' ' ? styles.space : styles.word}
              variants={characterReveal}
              custom={index}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p className={styles.heroSub} variants={fadeUpChild}>
          I build thoughtful digital products with React, Next.js, and React Native, balancing performance, clarity, and motion.
        </motion.p>

        <motion.div className={styles.heroActions} variants={fadeUpChild}>
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Start a Conversation
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
