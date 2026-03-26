'use client';

import { motion } from 'framer-motion';
import { fadeUpChild, sectionVariants, staggerParent } from '@/animations/variants';
import { skills } from '@/data/portfolio';
import styles from '@/sections/sections.module.css';

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className={`${styles.section} ${styles.skillsSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
    >
      <p className={styles.overline}>Skills</p>
      <h2 className={styles.title}>Modern product engineering with frontend depth and backend pragmatism.</h2>

      <motion.div className={styles.skillGrid} variants={staggerParent}>
        {skills.map((skill) => (
          <motion.article
            key={skill.title}
            variants={fadeUpChild}
            className={'isAi' in skill ? styles.aiCard : styles.skillCard}
            whileHover={
              'isAi' in skill
                ? { y: -6, scale: 1.01, boxShadow: '0 22px 44px rgba(189, 95, 255, 0.2)' }
                : { y: -6, scale: 1.01, boxShadow: '0 22px 44px rgba(15, 23, 42, 0.14)' }
            }
            transition={{ duration: 0.35 }}
          >
            {'isAi' in skill ? (
              <div className={styles.aiCardInner}>
                <div className={styles.aiHeader}>
                  <svg className={styles.aiIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                    <path d="M5 3v4M7 5H3" />
                  </svg>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.summary}</p>
              </div>
            ) : (
              <>
                <h3>{skill.title}</h3>
                <p>{skill.summary}</p>

                <div className={styles.progressTrack} aria-hidden>
                  {/* Progress bar is animated only when card enters viewport for subtle, performant emphasis. */}
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </>
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
