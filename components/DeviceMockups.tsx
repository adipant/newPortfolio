'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '@/sections/sections.module.css';

interface DeviceMockupsProps {
  image: string;
  title: string;
}

export function DeviceMockups({ image, title }: DeviceMockupsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const desktopY = useTransform(scrollYProgress, [0, 1], [18, -20]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [26, -26]);

  return (
    <div ref={targetRef} className={styles.mockupStage}>
      <motion.div className={styles.desktopMockup} style={{ y: desktopY }}>
        <Image src={image} alt={`${title} desktop mockup`} width={1400} height={900} className={styles.projectImage} loading="lazy" />
      </motion.div>

      <motion.div className={styles.phoneMockup} style={{ y: phoneY }}>
        <div className={styles.phoneNotch} />
        <Image src={image} alt={`${title} mobile mockup`} width={420} height={860} className={styles.phoneImage} loading="lazy" />
      </motion.div>
    </div>
  );
}
