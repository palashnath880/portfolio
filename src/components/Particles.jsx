"use client";
import React, { useEffect, useRef, useState } from "react";

const Particle = (x, y, size, image, speedX, speedY) => {
  const obj = {};

  obj.draw = (ctx) => {
    ctx.drawImage(image, x - size / 2, y - size / 2, size, size);
  };

  obj.update = () => {
    x += speedX;
    y += speedY;

    // Check for bouncing off edges (simple example)
    if (x + size > canvas.width || x - size < 0) {
      speedX *= -1;
    }
    if (y + size > canvas.height || y - size < 0) {
      speedY *= -1;
    }
  };

  return obj;
};

export default function Particles() {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [ctx, setCtx] = useState(null);

  return (
    <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }}>
      {particles.map((particle) => (
        <React.Fragment key={particle.id}>
          {/* Avoid relying on index as key */}
          {particle.draw(ctx)}
        </React.Fragment>
      ))}
    </canvas>
  );
}
