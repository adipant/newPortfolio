'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import styles from '@/components/components.module.css';

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 26, stiffness: 260, mass: 0.45 });
  const springY = useSpring(y, { damping: 26, stiffness: 260, mass: 0.45 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return <motion.div className={styles.cursor} style={{ x: springX, y: springY }} aria-hidden />;
}
