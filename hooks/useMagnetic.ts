'use client';

import { MouseEvent, useCallback, useMemo, useState } from 'react';

interface MagneticState {
  x: number;
  y: number;
}

export function useMagnetic(strength = 0.32) {
  const [point, setPoint] = useState<MagneticState>({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      setPoint({ x, y });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => setPoint({ x: 0, y: 0 }), []);

  const style = useMemo(
    () => ({
      transform: `translate3d(${point.x}px, ${point.y}px, 0)`
    }),
    [point.x, point.y]
  );

  return { onMouseMove, onMouseLeave, style };
}
