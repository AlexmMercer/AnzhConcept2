import React, { useState, useEffect } from 'react';
import './CourseNew.css';

const CourseNew = () => {
  const [visibleTopics, setVisibleTopics] = useState([]);
  const [tooltipTopic, setTooltipTopic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    purpose: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState({});

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
    topics.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTopics(prev => [...prev, index]);
      }, index * 120);
    });
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
    setFormData({ name: '', contact: '', purpose: '', consent: false });
  };

  return (
    <div className="course-new-content">
      <div className="course-layout">
        <div className="course-left">
          <p className="course-intro">
            Курс для людей, которые хотят не бояться законов, а использовать их в быту:
            жильё, работа, семья, покупки, кредиты, полиция.
          </p>

          <div className="course-benefits">
            <h3 className="benefits-title">Что вы поймёте и сможете после курса</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-arrow">→</div>
                <div className="benefit-text">Где заканчиваются "просьбы" и начинаются ваши законные права</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-arrow">→</div>
                <div className="benefit-text">Как разговаривать с ЖКХ, работодателем, продавцами и банками без истерик и унижений</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-arrow">→</div>
                <div className="benefit-text">Как проверять договоры, которые вы подписываете каждый день (аренда, работа, услуги)</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-arrow">→</div>
                <div className="benefit-text">Что делать, если "всё уже случилось": штраф, претензия, повестка, коллекторы</div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-right">
          <h3 className="topics-title">Программа курса</h3>
          <div className="topics-list">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`topic-card ${visibleTopics.includes(index) ? 'visible' : ''}`}
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
                <div className="topic-help">?</div>
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
              <div className={`form-field ${formErrors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="form-input"
                />
                <label className="form-label">ФИО</label>
                {formErrors.name && <span className="error-message">Заполните поле</span>}
              </div>

              <div className={`form-field ${formErrors.contact ? 'error' : ''}`}>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="form-input"
                />
                <label className="form-label">Телефон или Telegram</label>
                {formErrors.contact && <span className="error-message">Заполните поле</span>}
              </div>
            </div>

            <div className={`form-field ${formErrors.purpose ? 'error' : ''}`}>
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
              {formErrors.purpose && <span className="error-message">Заполните поле</span>}
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

            <button type="submit" className="form-submit">
              Успеть на поток январь 2026
            </button>

            <p className="form-note">
              Количество мест ограничено — работаем в небольших группах
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseNew;
