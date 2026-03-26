'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { pageVariants } from '@/animations/variants';
import { StickyNav } from '@/components/StickyNav';
import { ProgressLine } from '@/components/ProgressLine';
import { CustomCursor } from '@/components/CustomCursor';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const HeroSection = dynamic(() => import('@/sections/HeroSection').then((mod) => mod.HeroSection));
const AboutSection = dynamic(() => import('@/sections/AboutSection').then((mod) => mod.AboutSection));
const SkillsSection = dynamic(() => import('@/sections/SkillsSection').then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import('@/sections/ProjectsSection').then((mod) => mod.ProjectsSection));
const ExperienceSection = dynamic(() => import('@/sections/ExperienceSection').then((mod) => mod.ExperienceSection));
const ContactSection = dynamic(() => import('@/sections/ContactSection').then((mod) => mod.ContactSection));

export default function HomePage() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <ProgressLine />
      {!prefersReducedMotion ? <CustomCursor /> : null}
      <StickyNav />

      {/* Root fade/translate creates a subtle page-transition feel on first load. */}
      <motion.main initial="initial" animate="animate" variants={pageVariants}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </motion.main>
    </>
  );
}
