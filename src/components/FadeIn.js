'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, className = '', style, tag = 'div' }) {
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

  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={`fade-in${visible ? ' visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
