import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className={`sheet ${isVisible ? 'visible' : ''}`}>
          <div className="sheet-tab">Лист 1</div>
          <div className="sheet-header">
            <h2 className="sheet-title">Лист 1. Эксперт</h2>
            <div className="sheet-line"></div>
          </div>

          <div className="about-content">
            <div className="about-left">
              <div className="expert-card">
                <div className="expert-field">
                  <div className="expert-label">ФИО:</div>
                  <div className="expert-value">Орлова Анжелика Александровна</div>
                </div>
                <div className="expert-field">
                  <div className="expert-label">СТАЖ:</div>
                  <div className="expert-value">10+ лет правовой и судебной работы</div>
                </div>
                <div className="expert-field">
                  <div className="expert-label">СПЕЦИАЛИЗАЦИЯ:</div>
                  <div className="expert-value">
                    Правовое сопровождение бизнеса, споры с контрагентами,
                    трудовые конфликты, договоры, бытовое право для людей
                  </div>
                </div>
                <div className="expert-field">
                  <div className="expert-label">ФОРМАТ РАБОТЫ:</div>
                  <div className="expert-value">
                    Анализ ситуации, план действий, сопровождение до результата
                  </div>
                </div>
              </div>
            </div>

            <div className="about-right">
              <div className="stamps">
                <div className="stamp">
                  <div className="stamp-icon">🎓</div>
                  <div className="stamp-text">
                    <div className="stamp-title">МГЮА</div>
                    <div className="stamp-subtitle">Московский государственный юридический университет</div>
                  </div>
                </div>
                <div className="stamp">
                  <div className="stamp-icon">⚖️</div>
                  <div className="stamp-text">
                    <div className="stamp-title">Медиатор</div>
                    <div className="stamp-subtitle">Подготовка по медиации и переговорам</div>
                  </div>
                </div>
                <div className="stamp">
                  <div className="stamp-icon">📊</div>
                  <div className="stamp-text">
                    <div className="stamp-title">Проектное управление</div>
                    <div className="stamp-subtitle">Постановка и контроль юридических задач как проектов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-footer">
            <h3 className="about-footer-title">Почему ко мне возвращаются?</h3>
            <ul className="about-list">
              <li>Перевожу юридический язык на человеческий, без канцелярита</li>
              <li>Не просто решаю разовый вопрос, а выстраиваю систему</li>
              <li>Честно обозначаю риски и границы закона, не обещаю невозможного</li>
              <li>Остаюсь на связи, пока вопрос не доведён до конца</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
