'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import styles from '@/components/components.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      className={styles.themeToggle}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      type="button"
    >
      <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </motion.button>
  );
}
