import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const folderRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const folder = folderRef.current;
    const tabs = tabsRef.current;

    if (folder) {
      setTimeout(() => {
        folder.style.opacity = '1';
        folder.style.transform = 'scaleY(1) rotateX(0deg)';
      }, 300);
    }

    tabs.forEach((tab, index) => {
      if (tab) {
        setTimeout(() => {
          tab.style.opacity = '1';
          tab.style.transform = 'translateY(0)';
        }, 450 + index * 100);
      }
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabClick = (section) => {
    scrollToSection(section);
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            10+ лет практики • МГЮА • Судебная и досудебная защита
          </div>
          <div className="hero-logo">
            <span className="hero-logo-icon">📁</span>
            <span className="hero-logo-text">ВоВсемПрав.ру</span>
          </div>
          <h1 className="hero-title">
            ВоВсемПрав.ру —<br />
            ваш правовой досье-офис для бизнеса и личных вопросов
          </h1>
          <p className="hero-subtitle">
            Структурируем юридические вопросы так же аккуратно,
            как дела в папке: от бизнеса до личной жизни
          </p>
          <div className="hero-buttons">
            <button
              className="hero-btn hero-btn-orange"
              onClick={() => scrollToSection('business')}
            >
              Оставить заявку на сопровождение бизнеса
              <span className="hero-btn-caption">Собственники, директора, ИП</span>
            </button>
            <button
              className="hero-btn hero-btn-purple"
              onClick={() => scrollToSection('course')}
            >
              Записаться на поток январь 2026
              <span className="hero-btn-caption">Для людей, которые хотят понимать законы в быту</span>
            </button>
          </div>
          <p className="hero-note">
            Все обращения разбираю лично, без передачи на стажёров и ассистентов
          </p>
        </div>
        <div className="hero-right">
          <div className="folder-visual" ref={folderRef}>
            <div className="folder-spine"></div>
            <div className="folder-tabs">
              <div
                className="folder-tab tab-gray"
                ref={el => tabsRef.current[0] = el}
                onClick={() => handleTabClick('about')}
              >
                Обо мне
              </div>
              <div
                className="folder-tab tab-orange"
                ref={el => tabsRef.current[1] = el}
                onClick={() => handleTabClick('business')}
              >
                Бизнесу
              </div>
              <div
                className="folder-tab tab-purple"
                ref={el => tabsRef.current[2] = el}
                onClick={() => handleTabClick('course')}
              >
                Курс "яПрав!"
              </div>
            </div>
            <div className="folder-content">
              <div className="folder-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
