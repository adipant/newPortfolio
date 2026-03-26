'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { sectionVariants } from '@/animations/variants';
import styles from '@/sections/sections.module.css';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className={`${styles.section} ${styles.contact} ${styles.contactSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      <p className={styles.overline}>Contact</p>
      <h2 className={styles.title}>Let's build something great.</h2>
      <p className={styles.body}>Whether you are launching a new product or upgrading an existing one, I can help design and ship the right experience.</p>

      <div className={styles.heroActions}>
        <MagneticButton href="mailto:adityapant2018@gmail.com">Email Me</MagneticButton>
        <MagneticButton href="https://www.linkedin.com/in/adipantsde" variant="secondary">
          LinkedIn
        </MagneticButton>
      </div>
    </motion.section>
  );
}
