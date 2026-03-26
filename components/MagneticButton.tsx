'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { EASE_OUT_EXPO } from '@/animations/variants';
import styles from '@/components/components.module.css';

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const magnetic = useMagnetic(0.24);

  return (
    <motion.div onMouseMove={magnetic.onMouseMove} onMouseLeave={magnetic.onMouseLeave} style={magnetic.style}>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ ease: EASE_OUT_EXPO, duration: 0.35 }}>
        <Link href={href} className={`${styles.button} ${variant === 'primary' ? styles.primary : styles.secondary}`}>
          <span>{children}</span>
          <span className={styles.buttonIcon} aria-hidden>
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
