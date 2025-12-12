import { HiAcademicCap, HiScale, HiChartBar } from 'react-icons/hi2';
import './AboutNew.css';

const AboutNew = () => {
  const credentials = [
    { icon: HiAcademicCap, title: 'МГЮА', subtitle: 'Московский государственный юридический университет' },
    { icon: HiScale, title: 'Медиатор', subtitle: 'Подготовка по медиации и переговорам' },
    { icon: HiChartBar, title: 'Проектное управление', subtitle: 'Постановка и контроль юридических задач как проектов' }
  ];

  const reasons = [
    'Перевожу юридический язык на человеческий, без канцелярита',
    'Не просто решаю разовый вопрос, а выстраиваю систему',
    'Честно обозначаю риски и границы закона, не обещаю невозможного',
    'Остаюсь на связи, пока вопрос не доведён до конца'
  ];

  return (
    <div className="about-new-content">
      <div className="about-columns">
        <div className="about-left">
          <div className="expert-fields">
            <div className="expert-field">
              <div className="field-label">ФИО:</div>
              <div className="field-value">Орлова Анжелика Александровна</div>
            </div>
            <div className="expert-field">
              <div className="field-label">СТАЖ:</div>
              <div className="field-value">10+ лет правовой и судебной работы</div>
            </div>
            <div className="expert-field">
              <div className="field-label">СПЕЦИАЛИЗАЦИЯ:</div>
              <div className="field-value">
                Правовое сопровождение бизнеса, споры с контрагентами,
                трудовые конфликты, договоры, бытовое право для людей
              </div>
            </div>
            <div className="expert-field">
              <div className="field-label">ФОРМАТ РАБОТЫ:</div>
              <div className="field-value">
                Анализ ситуации, план действий, сопровождение до результата
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="credentials-grid">
            {credentials.map((cred, index) => {
              const IconComponent = cred.icon;
              return (
                <div key={index} className="credential-badge">
                  <div className="badge-icon">
                    <IconComponent />
                  </div>
                  <div className="badge-text">
                    <div className="badge-title">{cred.title}</div>
                    <div className="badge-subtitle">{cred.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="about-footer">
        <h3 className="footer-title">Почему ко мне возвращаются?</h3>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <div className="reason-check">✓</div>
              <div className="reason-text">{reason}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutNew;
