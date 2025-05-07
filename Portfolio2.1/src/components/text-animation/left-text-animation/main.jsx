// LeftTextAnimation.tsx
import React from 'react';

const items = ["Web Design", "React", "CMS", "UX/UI", "TypeScript", "Node.js", "API's", "Wordpress"];

export default function LeftTextAnimation() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-[200%] whitespace-nowrap gap-12 animate-marquee-reverse will-change-transform">
        {items.concat(items).map((text, i) => (
          <h4 key={i} className="whitespace-nowrap">{text}</h4>
        ))}
      </div>
    </div>
  );
}
