import { useState } from 'react';
import { HiBriefcase } from 'react-icons/hi2';
import './BusinessNew.css';

const BusinessNew = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    contact: '',
    situation: '',
    consent: false
  });
  const [formErrors, setFormErrors] = useState({});

  const services = [
    {
      title: 'Комплексный аудит юридической функции бизнеса',
      benefit: 'Вместо того чтобы постоянно тушить юридические пожары — вы получаете карту рисков, приоритеты и план, как всё привести в порядок.',
      example: 'Пример: директор производственной компании обратился, когда узнал о возможных претензиях от налоговой. Выяснилось, что документооборот не был систематизирован 3 года.'
    },
    {
      title: 'Наладка договорной работы (шаблоны, проверки контрагентов)',
      benefit: 'Вместо "подписали, а потом разбираемся" — проверка условий и контрагентов до сделки и понятные шаблоны договоров.',
      example: 'Пример: интернет-магазин работал без договора с поставщиком. Когда возникла первая задержка — выяснилось, что спорить не с кем и не на каком основании.'
    },
    {
      title: 'Сопровождение сложных сделок и переговоров',
      benefit: 'Вместо провисания на переговорах и уступок "на эмоциях" — чёткая позиция, подготовленные аргументы и протокол договорённостей.',
      example: 'Пример: собственник кафе готовился продать бизнес, но не понимал, как правильно передать активы и минимизировать риски. Провели сделку без юридических хвостов.'
    },
    {
      title: 'Трудовые отношения: найм, увольнения, конфликты',
      benefit: 'Вместо "разрулим как-нибудь" — законные механизмы найма, мотивации и расставания с сотрудниками.',
      example: 'Пример: ИП не знал, как оформить сотрудника по закону, боялся проверок. Выстроили систему от договора до кадрового учёта.'
    },
    {
      title: 'Юридическое сопровождение как "внешний юротдел"',
      benefit: 'Вместо штатного юриста "на все случаи" — эксперт, который закрывает именно ваши вопросы и не пропадает.',
      example: 'Пример: небольшое digital-агентство не могло позволить себе юриста в штат, но нужна была регулярная поддержка. Работаем на постоянной основе.'
    }
  ];

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
    if (!formData.role.trim()) errors.role = true;
    if (!formData.contact.trim()) errors.contact = true;
    if (!formData.situation.trim()) errors.situation = true;
    if (!formData.consent) errors.consent = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', role: '', contact: '', situation: '', consent: false });
  };

  return (
    <div className="business-new-content">
      <p className="business-subtitle">
        Сначала разбираем, где у вас юридический хаос.
        Потом собираем понятную систему договоров, проверок и действий.
      </p>

      <div className="business-layout">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${expandedRow === index ? 'expanded' : ''}`}
              onClick={() => setExpandedRow(expandedRow === index ? null : index)}
            >
              <div className="service-main">
                <div className="service-left">
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="service-right">
                  <p className="service-benefit">{service.benefit}</p>
                </div>
              </div>
              {expandedRow === index && (
                <div className="service-example">
                  <div className="example-icon">
                    <HiBriefcase />
                  </div>
                  <div className="example-text">{service.example}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="form-sidebar">
          <div className="form-card">
            <h3 className="form-title">Нужен взгляд со стороны на ваши юридические риски?</h3>
            <p className="form-subtitle">Кратко опишите ситуацию — я скажу, имеет ли смысл работать дальше и как.</p>

            <form onSubmit={handleSubmit} className="consultation-form">
              <div className={`form-field ${formErrors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="form-input"
                />
                <label className="form-label">Ваше имя</label>
                {formErrors.name && <span className="error-message">Заполните поле</span>}
              </div>

              <div className={`form-field ${formErrors.role ? 'error' : ''}`}>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-input form-select"
                >
                  <option value="">Выберите роль</option>
                  <option value="owner">Собственник</option>
                  <option value="director">Директор</option>
                  <option value="ip">ИП</option>
                  <option value="other">Другое</option>
                </select>
                <label className="form-label">Роль в бизнесе</label>
                {formErrors.role && <span className="error-message">Выберите роль</span>}
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

              <div className={`form-field ${formErrors.situation ? 'error' : ''}`}>
                <textarea
                  name="situation"
                  value={formData.situation}
                  onChange={handleInputChange}
                  placeholder=" "
                  rows="4"
                  className="form-input form-textarea"
                />
                <label className="form-label">Кратко о ситуации</label>
                {formErrors.situation && <span className="error-message">Заполните поле</span>}
              </div>

              <div className={`form-checkbox ${formErrors.consent ? 'error' : ''}`}>
                <input
                  type="checkbox"
                  name="consent"
                  id="consent-business"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                <label htmlFor="consent-business">
                  Согласен(а) на обработку персональных данных
                </label>
              </div>

              <button type="submit" className="form-submit">
                Отправить заявку
              </button>

              <p className="form-note">
                Отвечаю лично, без ассистентов. Обычно в течение 1 рабочего дня.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNew;
