import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextSplitAnimation = ({ text }) => {
  const textRef = useRef([]);

  useEffect(() => {
    // Animate each letter with GSAP
    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1, // delay between letters
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  // Split text into an array of characters
  const letters = text.split("");

  return (
    <div>
      {letters.map((letter, index) => (
        <span
          key={index}
          ref={(el) => (textRef.current[index] = el)}
          style={{ display: "inline-block" }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextSplitAnimation;
