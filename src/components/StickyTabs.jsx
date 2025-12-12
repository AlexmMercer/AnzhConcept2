import React, { useState, useEffect } from 'react';
import './StickyTabs.css';

const StickyTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const sections = [
      { id: 'about', element: document.getElementById('about') },
      { id: 'business', element: document.getElementById('business') },
      { id: 'course', element: document.getElementById('course') }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.element) {
          observer.unobserve(section.element);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'about', label: 'Обо мне', color: 'gray' },
    { id: 'business', label: 'Бизнесу', color: 'orange' },
    { id: 'course', label: 'Курс "яПрав!"', color: 'purple' }
  ];

  return (
    <div className="sticky-tabs-container">
      <div className="sticky-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`sticky-tab sticky-tab-${tab.color} ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => scrollToSection(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StickyTabs;
