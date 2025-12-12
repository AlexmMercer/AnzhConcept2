import { useState, useEffect } from 'react';
import { HiFolder } from 'react-icons/hi2';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <HiFolder className="logo-icon" />
          <span className="logo-text">ВоВсемПрав.ру</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            Обо мне
          </button>
          <button onClick={() => scrollToSection('business')} className="nav-link">
            Бизнесу
          </button>
          <button onClick={() => scrollToSection('course')} className="nav-link">
            Курс "яПрав!"
          </button>
          <button onClick={() => scrollToSection('business')} className="nav-btn-cta">
            Оставить заявку
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
