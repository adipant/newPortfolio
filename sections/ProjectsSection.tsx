'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { DeviceMockups } from '@/components/DeviceMockups';
import { projects } from '@/data/portfolio';
import { useTilt } from '@/hooks/useTilt';
import { sectionVariants } from '@/animations/variants';
import styles from '@/sections/sections.module.css';

function ProjectPanel({
  title,
  tagline,
  description,
  stack,
  image,
  links
}: {
  title: string;
  tagline: string;
  description: string;
  stack: readonly string[];
  image: string;
  links: { live: string; code: string };
}) {
  const panelRef = useRef<HTMLElement>(null);
  const tilt = useTilt(4.2);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start 85%', 'end 20%']
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.93, 1.03]);
  const imageY = useTransform(scrollYProgress, [0, 1], [22, -14]);

  return (
    <motion.article
      ref={panelRef}
      className={styles.projectPanel}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1300 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0.18, y: 34, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, boxShadow: '0 34px 70px rgba(15, 23, 42, 0.2)' }}
      viewport={{ amount: 0.32 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.projectContent}>
        <p className={styles.overline}>Featured Project</p>
        <h3>{title}</h3>
        <p className={styles.projectTagline}>{tagline}</p>
        <p className={styles.body}>{description}</p>

        <ul className={styles.stack}>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.projectLinks}>
          <Link href={links.live}>
            <span>Live</span>
            <span className={styles.linkIcon} aria-hidden>
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link href={links.code}>
            <span>Code</span>
            <span className={styles.linkIcon} aria-hidden>
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9m0 0-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <motion.div style={{ scale: imageScale, y: imageY }} className={styles.projectImageFrame}>
        <DeviceMockups image={image} title={title} />
      </motion.div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className={`${styles.section} ${styles.projectsSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className={styles.projectsIntro}>
        <p className={styles.overline}>Projects</p>
        <h2 className={styles.title}>Product storytelling with engineering precision.</h2>
      </div>

      <div className={styles.projectRail}>
        {projects.map((project) => (
          <ProjectPanel key={project.id} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
