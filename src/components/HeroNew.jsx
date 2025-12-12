import React from 'react';
import './HeroNew.css';

const HeroNew = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-new">
      <div className="hero-badge">
        10+ лет практики • МГЮА • Судебная и досудебная защита
      </div>

      <h1 className="hero-title">
        ВоВсемПрав.ру —<br />
        ваш правовой досье-офис для бизнеса и личных вопросов
      </h1>

      <p className="hero-subtitle">
        Структурируем юридические вопросы так же аккуратно,
        как дела в папке: от бизнеса до личной жизни
      </p>

      <div className="hero-actions">
        <button
          className="hero-btn hero-btn-orange"
          onClick={() => scrollToSection('business')}
        >
          <span className="btn-text">Оставить заявку на сопровождение бизнеса</span>
          <span className="btn-caption">Собственники, директора, ИП</span>
        </button>

        <button
          className="hero-btn hero-btn-purple"
          onClick={() => scrollToSection('course')}
        >
          <span className="btn-text">Записаться на поток январь 2026</span>
          <span className="btn-caption">Для людей, которые хотят понимать законы в быту</span>
        </button>
      </div>

      <p className="hero-note">
        Все обращения разбираю лично, без передачи на стажёров и ассистентов
      </p>
    </section>
  );
};

export default HeroNew;
