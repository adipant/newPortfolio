'use client';

import { motion } from 'framer-motion';
import styles from '@/components/components.module.css';

export function AmbientBackground() {
  return (
    <div className={styles.ambient} aria-hidden>
      <motion.div
        className={styles.blobA}
        animate={{ x: [0, 40, -10, 0], y: [0, -24, 15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.blobB}
        animate={{ x: [0, -35, 15, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.blobC}
        animate={{ x: [0, 22, -20, 0], y: [0, -15, 12, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
