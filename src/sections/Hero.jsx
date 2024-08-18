
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function HeroSection() {
  const [showText, setShowText] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const text = "Welcome to Victoriam";
  const characters = text.split('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
      setTextIndex(textIndex + 1);
    }, 20 * textIndex); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [textIndex]);

  useEffect(() => {
    if (showText && textIndex === text.length) {
      setTimeout(() => {
        setShowText(false);
        setTextIndex(0);
      }, 1000); // Adjust the delay as needed
    }
  }, [showText, textIndex, text.length]);

  const fadeIn = useSpring({
    opacity: showText ? 1 : 0,
    config: { duration: 100 }
  });

  return (
    <div
      className="w-full text-center p-5 bg-hero-image  min-h-[100vh] bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(17, 25, 32, 0.64) 0%, rgba(17, 25, 32, 0.64) 100%), url('./hero_background.png')",
      }}
    >
      <h2 className="leading-none text-[46px] md:text-[72px] font-bold text-white max-w-6xl">
        Innovating with AI -{' '}
        <animated.span style={fadeIn}>
          {characters.slice(0, textIndex).map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </animated.span>
      </h2>
      <p className="max-w-3xl text-center text-xl text-white mt-2">
        Providing a range of AI-driven solutions tailored to meet the diverse needs of the market. By leveraging AI algorithms and data-driven insights, Victoriam provides impactful solutions to propagate creativity and enhance accessibility.
      </p>
    </div>
  );
}

export default HeroSection;
