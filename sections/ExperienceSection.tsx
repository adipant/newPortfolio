'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';
import { fadeUpChild, sectionVariants, staggerParent } from '@/animations/variants';
import styles from '@/sections/sections.module.css';

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className={`${styles.section} ${styles.experienceSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className={styles.overline}>Experience</p>
      <h2 className={styles.title}>A timeline of shipping focused digital products.</h2>

      <div className={styles.timelineWrap}>
        <motion.span
          className={styles.timelineLine}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div className={styles.timelineList} variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          {experience.map((item) => (
            <motion.article key={item.year + item.company} className={styles.timelineItem} variants={fadeUpChild}>
              <span className={styles.year}>{item.year}</span>
              <h3>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.body}>{item.details}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
