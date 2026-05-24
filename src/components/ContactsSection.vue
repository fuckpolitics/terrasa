<script setup>
import ParallaxBg from './ParallaxBg.vue'

const bg = '/images/terrasa/contacts-bg.webp'
</script>

<template>
  <section id="contacts" class="section contacts">
    <ParallaxBg :src="bg" :speed="0.18" overlay="default" />

    <div class="container section-inner">
      <header class="contacts__head">
        <span class="eyebrow reveal">Контакты</span>
        <h2 class="section-title reveal reveal--delay-1">
          Найдите нас<br /><em>в&nbsp;центре Иваново</em>
        </h2>
      </header>

      <div class="contacts__grid">
        <div class="contacts__card reveal">
          <span class="contacts__card-eyebrow">Адрес</span>
          <p class="contacts__card-value">
            г.&nbsp;Иваново,<br />
            пл.&nbsp;Пушкина,&nbsp;2<br />
            <span class="contacts__card-hint">здание драмтеатра</span>
          </p>
          <a class="contacts__card-link" href="https://yandex.ru/maps/?text=Иваново+ресторан+ТЕРРАСА+площадь+Пушкина+2" target="_blank" rel="noopener">
            Открыть на&nbsp;карте <span class="arrow">→</span>
          </a>
        </div>

        <div class="contacts__card reveal reveal--delay-1">
          <span class="contacts__card-eyebrow">Телефоны</span>
          <p class="contacts__card-value">
            <a href="tel:+79060699118">+7 (906) 069-91-18</a><br />
            <a href="tel:+79060699107">+7 (906) 069-91-07</a>
          </p>
          <a class="contacts__card-link" href="https://wa.me/79060699118" target="_blank" rel="noopener">
            Написать в&nbsp;WhatsApp <span class="arrow">→</span>
          </a>
        </div>

        <div class="contacts__card reveal reveal--delay-2">
          <span class="contacts__card-eyebrow">Часы работы</span>
          <p class="contacts__card-value">
            Ежедневно<br />
            12:00–00:00
          </p>
          <a class="contacts__card-link" href="#booking" @click.prevent="$emit('book')">
            Забронировать <span class="arrow">→</span>
          </a>
        </div>

        <div class="contacts__card reveal reveal--delay-3">
          <span class="contacts__card-eyebrow">Почта</span>
          <p class="contacts__card-value">
            <a href="mailto:zastol2026@yandex.ru">zastol2026@yandex.ru</a>
          </p>
          <a class="contacts__card-link" href="mailto:zastol2026@yandex.ru">
            События и&nbsp;банкеты <span class="arrow">→</span>
          </a>
        </div>
      </div>

      <div class="contacts__map reveal reveal--scale">
        <div class="contacts__map-frame">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?text=Иваново%20ресторан%20ТЕРРАСА%20площадь%20Пушкина%202&z=17"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>
        <div class="contacts__map-pill">
          <span class="contacts__map-pill-label">ТЕРРАСА</span>
          <p>В&nbsp;здании Ивановского драмтеатра.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts__head {
  margin-bottom: 64px;
  max-width: 720px;
}

.contacts__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}

.contacts__card {
  padding: 32px 28px;
  background: rgba(20, 18, 14, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 220px;
  transition: background 0.4s var(--ease), border-color 0.4s var(--ease), transform 0.4s var(--ease);
}

.contacts__card:hover {
  background: rgba(28, 24, 18, 0.86);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.contacts__card-eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-2);
}

.contacts__card-value {
  font-family: var(--serif);
  font-size: 24px;
  line-height: 1.35;
  color: var(--ink);
  margin-top: auto;
}

.contacts__card-hint {
  display: inline-block;
  margin-top: 8px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.contacts__card-value a:hover {
  color: var(--accent);
}

.contacts__card-link {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s var(--ease), gap 0.3s var(--ease);
}

.contacts__card-link:hover {
  color: var(--accent);
  gap: 12px;
}

.contacts__map {
  position: relative;
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
}

.contacts__map-frame {
  position: relative;
  height: clamp(320px, 50vh, 520px);
  filter: grayscale(0.4) contrast(1.05) brightness(0.85);
}

.contacts__map-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.contacts__map-pill {
  position: absolute;
  left: 24px;
  bottom: 24px;
  width: fit-content;
  max-width: min(320px, calc(100% - 48px));
  padding: 14px 18px;
  background: rgba(14, 13, 11, 0.94);
  border: 1px solid var(--line-strong);
  border-radius: 4px;
}

.contacts__map-pill-label {
  display: inline-block;
  font-family: var(--serif);
  font-style: italic;
  font-size: 16px;
  line-height: 1;
  color: var(--accent-2);
  letter-spacing: 0.02em;
}

.contacts__map-pill p {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.4;
}

@media (max-width: 980px) {
  .contacts__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 540px) {
  .contacts__grid {
    grid-template-columns: 1fr;
  }
  .contacts__card {
    min-height: 0;
  }
  .contacts__map-pill {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
}
</style>
