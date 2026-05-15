<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__mark">T</span>
        <div>
          <span class="footer__name">Терраса</span>
          <span class="footer__sub">Ресторан · Иваново</span>
        </div>
      </div>

      <div class="footer__cols">
        <div class="footer__col">
          <span class="footer__h">Контакты</span>
          <a href="tel:+74932000000">+7 (4932) 00-00-00</a>
          <a href="mailto:hello@terrasa-ivanovo.ru">hello@terrasa-ivanovo.ru</a>
          <span>Иваново, пл.&nbsp;Пушкина, 2 — здание драмтеатра</span>
        </div>
        <div class="footer__col">
          <span class="footer__h">Часы</span>
          <span>Пн–Чт&nbsp;· 12:00–23:00</span>
          <span>Пт–Сб&nbsp;· 12:00–01:00</span>
          <span>Вс&nbsp;· 12:00–23:00</span>
        </div>
        <div class="footer__col">
          <span class="footer__h">Ссылки</span>
          <a href="#menu">Меню</a>
          <a href="#events">События и&nbsp;банкеты</a>
          <a href="#booking">Бронирование</a>
        </div>
        <div class="footer__col">
          <span class="footer__h">Соцсети</span>
          <a href="#" target="_blank" rel="noopener">Telegram</a>
          <a href="#" target="_blank" rel="noopener">VK</a>
          <a href="#" target="_blank" rel="noopener">YouTube</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom container">
      <span>© {{ year }} «Терраса». Все права защищены.</span>
      <span>
        <a href="#" class="footer__policy">Политика конфиденциальности</a>
        <span class="footer__sep">·</span>
        <a href="#" class="footer__policy">Договор оферты</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0a0908;
  border-top: 1px solid var(--line);
  padding: 80px 0 32px;
  position: relative;
  z-index: 2;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--line);
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer__mark {
  width: 56px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent);
  border-radius: 50%;
  font-family: var(--serif);
  font-size: 28px;
  color: var(--accent);
}

.footer__name {
  font-family: var(--serif);
  font-size: 28px;
  display: block;
  line-height: 1;
  margin-bottom: 4px;
}

.footer__sub {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.footer__cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink-dim);
}

.footer__col a {
  color: var(--ink-dim);
  transition: color 0.3s var(--ease);
}
.footer__col a:hover {
  color: var(--accent);
}

.footer__h {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-2);
  margin-bottom: 10px;
}

.footer__bottom {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-dim);
  letter-spacing: 0.04em;
}

.footer__policy {
  color: var(--ink-mute);
}
.footer__policy:hover {
  color: var(--accent);
}

.footer__sep {
  margin: 0 10px;
  color: var(--line-strong);
}

@media (max-width: 900px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer__cols {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer__bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>
