# Руководство по кастомизации сайта

## Изменение контактной информации

### Footer.jsx (строки 11-23)
Замените placeholder-контакты на реальные:

```javascript
<div className="contact-item">
  <span className="contact-icon">📞</span>
  <span className="contact-text">+7 (XXX) XXX-XX-XX</span> // <- Замените здесь
</div>
<div className="contact-item">
  <span className="contact-icon">✉️</span>
  <span className="contact-text">info@vovsepravu.ru</span> // <- Замените здесь
</div>
<div className="contact-item">
  <span className="contact-icon">💬</span>
  <span className="contact-text">@vovsepravu</span> // <- Замените здесь
</div>
```

## Изменение цветовой схемы

### src/styles/global.css (строки 1-11)
Измените CSS-переменные для изменения цветов:

```css
:root {
  --bg-paper-main: #FAF6EF;    /* Основной фон */
  --bg-sheet: #FFFFFF;         /* Фон листов */
  --text-main: #333333;        /* Основной текст */
  --text-muted: #777777;       /* Второстепенный текст */
  --accent-orange: #D8742A;    /* Акцент для бизнеса - измените этот */
  --accent-purple: #7A3CB8;    /* Акцент для курса - измените этот */
  --border-light: #D8D2C4;     /* Границы */
  --footer-bg: #F0E7D8;        /* Фон футера */
}
```

## Изменение текстов

### Hero.jsx
- Заголовок: строка 41
- Подзаголовок: строка 44-45
- Тексты кнопок: строки 49, 55

### About.jsx
- ФИО эксперта: строка 38
- Стаж: строка 42
- Специализация: строка 46-48
- Формат работы: строка 53
- Причины возвращения: строки 73-76

### Business.jsx
- Услуги и их описания: массив `services` (строки 37-68)

### Course.jsx
- Темы курса: массив `topics` (строки 20-48)
- Преимущества курса: строки 111-114

## Изменение шрифтов

### index.html (строка 8)
Замените Google Fonts на другие шрифты:

```html
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=PT+Sans:wght@400;700&family=PT+Sans+Caption:wght@400;700&display=swap" rel="stylesheet">
```

### src/styles/global.css (строки 18, 23, 31)
Обновите семейства шрифтов в CSS:

```css
body {
  font-family: 'PT Sans', sans-serif; /* Основной шрифт */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'PT Serif', serif; /* Шрифт заголовков */
}

/* PT Sans Caption используется для подписей */
```

## Подключение формы к бэкенду

### Business.jsx (строка 86)
Замените `alert()` на реальную отправку данных:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // ... валидация ...

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Заявка отправлена!');
      // Очистка формы
    }
  } catch (error) {
    alert('Ошибка отправки. Попробуйте позже.');
  }
};
```

### Course.jsx (строка 67)
Аналогично для формы курса.

## Настройка мета-тегов для SEO

### index.html
Добавьте в `<head>`:

```html
<meta name="description" content="ВоВсемПрав.ру - правовое сопровождение бизнеса и курс по бытовому праву">
<meta name="keywords" content="юридические услуги, правовое сопровождение, курс права">
<meta property="og:title" content="ВоВсемПрав.ру">
<meta property="og:description" content="Ваш правовой досье-офис для бизнеса и личных вопросов">
<meta property="og:image" content="/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## Добавление аналитики

### index.html
Добавьте Google Analytics или Яндекс.Метрику перед закрывающим `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Яндекс.Метрика -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## Замена эмодзи на SVG-иконки

Если хотите заменить эмодзи на профессиональные иконки:

1. Используйте библиотеку иконок (например, React Icons)
2. Установите: `npm install react-icons`
3. Импортируйте нужные иконки в компонентах
4. Замените эмодзи на компоненты иконок

Пример:
```javascript
import { FaPhone, FaEnvelope, FaTelegram } from 'react-icons/fa';

<span className="contact-icon"><FaPhone /></span>
<span className="contact-icon"><FaEnvelope /></span>
<span className="contact-icon"><FaTelegram /></span>
```

## Добавление анимаций при загрузке

Все анимации уже встроены, но вы можете настроить их:

### Hero.css (строка 11)
Измените скорость анимации:

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Применяется с duration 0.6s - измените в animation */
```

## Изменение breakpoints для адаптивности

В каждом CSS-файле есть media queries:

```css
@media (max-width: 1024px) { /* Планшет */ }
@media (max-width: 768px) { /* Мобильный */ }
```

Измените значения при необходимости.

## Настройка поведения форм

### Floating Labels
Плавающие лейблы настроены в CSS. Для изменения:

- Цвет фокуса: `--accent-orange` или `--accent-purple`
- Позиция лейбла: `transform: translateY(-20px)` в CSS
- Анимация ошибки: `@keyframes shake` в Business.css/Course.css

## Развертывание

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Загрузите папку dist в Netlify
```

### GitHub Pages
```bash
npm run build
# Загрузите содержимое dist в gh-pages branch
```

## Полезные ресурсы

- [React документация](https://react.dev)
- [Vite документация](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
