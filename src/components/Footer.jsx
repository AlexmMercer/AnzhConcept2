import { HiPhone, HiEnvelope, HiChatBubbleLeftRight, HiFolder } from 'react-icons/hi2';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-pocket">
        <div className="container footer-container">
          <div className="footer-left">
            <h3 className="footer-title">Контакты</h3>
            <div className="footer-contacts">
              <div className="contact-item">
                <HiPhone className="contact-icon" />
                <span className="contact-text">+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="contact-item">
                <HiEnvelope className="contact-icon" />
                <span className="contact-text">info@vovsepravu.ru</span>
              </div>
              <div className="contact-item">
                <HiChatBubbleLeftRight className="contact-icon" />
                <span className="contact-text">@vovsepravu</span>
              </div>
            </div>
            <p className="footer-note">
              Если вы сомневаетесь, ваш ли это специалист — напишите коротко о ситуации.
              Я скажу честно, смогу помочь или нет.
            </p>
          </div>

          <div className="footer-right">
            <h3 className="footer-title">Выберите свой путь</h3>
            <div className="footer-buttons">
              <button
                className="footer-btn footer-btn-orange"
                onClick={() => scrollToSection('business')}
              >
                Нужна консультация по бизнесу
              </button>
              <button
                className="footer-btn footer-btn-purple"
                onClick={() => scrollToSection('course')}
              >
                Хочу на курс "яПрав!"
              </button>
            </div>
            <p className="footer-privacy">
              Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div className="footer-logo">
            <HiFolder className="footer-logo-icon" />
            <span className="footer-logo-text">ВоВсемПрав.ру</span>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} ВоВсемПрав.ру • Орлова Анжелика Александровна
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
