// RightTextAnimation.tsx
import React from 'react';

const items = ["Frontend Developer", "Figma", "JavaScript", "HTML", "CSS", "Vue.js", "Tailwind CSS"];

export default function RightTextAnimation() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-[200%] whitespace-nowrap gap-12 animate-marquee will-change-transform">
        {items.concat(items).map((text, i) => (
          <h4 key={i} className="whitespace-nowrap">{text}</h4>
        ))}
      </div>
    </div>
  );
}
