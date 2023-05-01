import React, { useState } from 'react';
import '../styles/AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={e => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 이동이 가능하다면?
        setPosition(prev => ({ ...prev, x: e.clientX }));
      }}
    >
      <span
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      />
    </div>
  );
}
