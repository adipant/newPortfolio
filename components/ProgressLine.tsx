'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import styles from '@/components/components.module.css';

export function ProgressLine() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 26, mass: 0.2 });

  return <motion.div className={styles.progress} style={{ scaleX }} aria-hidden />;
}
