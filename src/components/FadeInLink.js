'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function FadeInLink({ href, children, className = '', style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={`fade-in${visible ? ' visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Link>
  );
}
