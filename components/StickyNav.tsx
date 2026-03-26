'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { navItems } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ThemeToggle';
import { EASE_OUT_EXPO } from '@/animations/variants';
import styles from '@/components/components.module.css';

export function StickyNav() {
  const navIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(navIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navWrap}>
      <nav className={styles.nav}>
        <Link href="#hero" className={styles.brand}>
          Aditya Pant
        </Link>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} className={activeId === item.id ? `${styles.link} ${styles.active}` : styles.link}>
                <span>{item.label}</span>
                {activeId === item.id ? (
                  <motion.span
                    className={styles.navUnderline}
                    layoutId="nav-active-underline"
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.mobileToggle}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            Menu
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            {navItems.map((item) => (
              <Link key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
