import React, { useState, useEffect, useRef } from 'react';
import './Course.css';

const Course = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTopics, setVisibleTopics] = useState([]);
  const [tooltipTopic, setTooltipTopic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    purpose: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState({});
  const sectionRef = useRef(null);

  const topics = [
    {
      title: 'Ваши права в быту: магазины, услуги, онлайн-покупки',
      tooltip: 'Разбираем реальные ситуации: возврат товара, навязанная гарантия, странные "договоры" при доставке, подписания "не глядя".'
    },
    {
      title: 'Жильё: аренда, коммуналка, споры с соседями и УК',
      tooltip: 'Как защитить себя при аренде квартиры, что делать с необоснованными счетами за ЖКХ, как решать конфликты с управляющей компанией.'
    },
    {
      title: 'Работа: трудовой договор, увольнение, переработки',
      tooltip: 'Разбираем ваши права на работе: что должно быть в договоре, как законно уволиться или защититься от незаконного увольнения, переработки и компенсации.'
    },
    {
      title: 'Деньги: кредиты, долги, коллекторы, расписки',
      tooltip: 'Как работают кредиты, что делать с долгами, как законно общаться с коллекторами, как правильно оформить расписку или заём.'
    },
    {
      title: 'Госорганы: полиция, суд, инспекции — как себя вести и что говорить',
      tooltip: 'Ваши права при общении с полицией, как вести себя в суде, что делать при проверках и как правильно давать объяснения.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          topics.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTopics(prev => [...prev, index]);
            }, index * 150);
          });
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) errors.name = true;
    if (!formData.contact.trim()) errors.contact = true;
    if (!formData.purpose.trim()) errors.purpose = true;
    if (!formData.consent) errors.consent = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert('Заявка на курс отправлена! Мы свяжемся с вами для уточнения деталей.');
    setFormData({
      name: '',
      contact: '',
      purpose: '',
      consent: false
    });
  };

  return (
    <section id="course" className="course" ref={sectionRef}>
      <div className="container">
        <div className={`sheet ${isVisible ? 'visible' : ''}`}>
          <div className="sheet-tab tab-purple">Лист 3</div>
          <div className="sheet-header">
            <h2 className="sheet-title">Лист 3. Курс "яПрав!"</h2>
            <div className="sheet-line"></div>
          </div>

          <div className="course-layout">
            <div className="course-left">
              <p className="course-intro">
                Курс для людей, которые хотят не бояться законов, а использовать их в быту:
                жильё, работа, семья, покупки, кредиты, полиция.
              </p>

              <div className="course-benefits">
                <h3 className="course-benefits-title">Что вы поймёте и сможете после курса</h3>
                <ul className="course-benefits-list">
                  <li>Где заканчиваются "просьбы" и начинаются ваши законные права</li>
                  <li>Как разговаривать с ЖКХ, работодателем, продавцами и банками без истерик и унижений</li>
                  <li>Как проверять договоры, которые вы подписываете каждый день (аренда, работа, услуги)</li>
                  <li>Что делать, если "всё уже случилось": штраф, претензия, повестка, коллекторы</li>
                </ul>
              </div>
            </div>

            <div className="course-right">
              <h3 className="topics-title">Программа курса</h3>
              <div className="topics-list">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className={`topic-item ${visibleTopics.includes(index) ? 'visible' : ''}`}
                    onMouseEnter={() => setTooltipTopic(index)}
                    onMouseLeave={() => setTooltipTopic(null)}
                  >
                    <div className="topic-number">{index + 1}</div>
                    <div className="topic-content">
                      <div className="topic-title">{topic.title}</div>
                      {tooltipTopic === index && (
                        <div className="topic-tooltip">
                          {topic.tooltip}
                        </div>
                      )}
                    </div>
                    <div className="topic-icon">?</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="course-form-section">
            <div className="course-form-card">
              <h3 className="form-title">Записаться на поток январь 2026</h3>
              <p className="form-subtitle">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </p>

              <form onSubmit={handleSubmit} className="course-form">
                <div className="form-row">
                  <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label">ФИО</label>
                    {formErrors.name && <span className="form-error-text">Пожалуйста, заполните поле</span>}
                  </div>

                  <div className={`form-group ${formErrors.contact ? 'error' : ''}`}>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label">Телефон или Telegram</label>
                    {formErrors.contact && <span className="form-error-text">Пожалуйста, заполните поле</span>}
                  </div>
                </div>

                <div className={`form-group ${formErrors.purpose ? 'error' : ''}`}>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    placeholder=" "
                    rows="3"
                    className="form-input form-textarea"
                  />
                  <label className="form-label">Как вы хотите использовать знания?</label>
                  <span className="form-hint">Для себя, для семьи, для работы, для бизнеса…</span>
                  {formErrors.purpose && <span className="form-error-text">Пожалуйста, заполните поле</span>}
                </div>

                <div className={`form-checkbox ${formErrors.consent ? 'error' : ''}`}>
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent-course"
                    checked={formData.consent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="consent-course">
                    Согласен(а) на обработку персональных данных
                  </label>
                </div>

                <button type="submit" className="form-submit btn-purple">
                  Успеть на поток январь 2026
                </button>

                <p className="form-note">
                  Количество мест ограничено — работаем в небольших группах
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
