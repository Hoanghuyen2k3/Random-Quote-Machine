import React, { useEffect, useRef } from 'react';

const FallingFlower = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createFlower = () => {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      container.appendChild(flower);

      const left = Math.random() * (window.innerWidth - 100);
      flower.style.left = `${left}px`;

      const duration = Math.random() * 5 + 5;
      flower.style.animationDuration = `${duration}s`;

      setTimeout(() => {
        container.removeChild(flower);
      }, duration * 1000);
    };

    const handleMouseMove = (event) => {
      const flowers = container.getElementsByClassName('flower');
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];
        const rect = flower.getBoundingClientRect();
        const flowerX = rect.left + rect.width / 2;
        const flowerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - flowerX, 2) + Math.pow(mouseY - flowerY, 2)
        );

        if (distance < 100) {
          const angle = Math.atan2(mouseY - flowerY, mouseX - flowerX);
          const newX = flowerX - Math.cos(angle) * 100;
          const newY = flowerY - Math.sin(angle) * 100;
          flower.style.left = `${newX}px`;
          flower.style.top = `${newY}px`;
        }
      }
    };


    document.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(createFlower, 200);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="flower-container"></div>;
};

export default FallingFlower;
