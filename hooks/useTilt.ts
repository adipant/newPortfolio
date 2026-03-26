'use client';

import { MouseEvent, useMemo } from 'react';
import { MotionValue, useMotionValue, useSpring } from 'framer-motion';

interface TiltResult {
  onMouseMove: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}

export function useTilt(maxTilt = 6): TiltResult {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(pointerY, { stiffness: 220, damping: 22, mass: 0.35 });
  const rotateY = useSpring(pointerX, { stiffness: 220, damping: 22, mass: 0.35 });

  return useMemo(
    () => ({
      onMouseMove: (event: MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        pointerX.set((x - 0.5) * maxTilt * 2);
        pointerY.set((0.5 - y) * maxTilt * 2);
      },
      onMouseLeave: () => {
        pointerX.set(0);
        pointerY.set(0);
      },
      rotateX,
      rotateY
    }),
    [maxTilt, pointerX, pointerY, rotateX, rotateY]
  );
}
