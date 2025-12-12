import React, { useEffect, useRef, useState } from 'react';
import './SheetContainer.css';

const SheetContainer = ({ id, number, title, color = 'gray', children, offset = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
      },
      { threshold: 0.15 }
    );

    if (sheetRef.current) {
      observer.observe(sheetRef.current);
    }

    return () => {
      if (sheetRef.current) {
        observer.unobserve(sheetRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      className={`sheet-container ${isVisible ? 'visible' : ''}`}
      ref={sheetRef}
      style={{ '--offset': `${offset}px` }}
    >
      <div className="sheet-stack">
        <div className="sheet-layer sheet-back"></div>
        <div className="sheet-layer sheet-middle"></div>
        <div className={`sheet-main sheet-${color}`}>
          <div className={`sheet-tab sheet-tab-${color}`}>
            Лист {number}
          </div>
          <div className="sheet-header">
            <h2 className="sheet-title">{title}</h2>
            <div className="sheet-line"></div>
          </div>
          <div className="sheet-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SheetContainer;
