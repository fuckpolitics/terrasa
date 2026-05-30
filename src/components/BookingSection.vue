<script setup>
import ParallaxBg from './ParallaxBg.vue'
import { WIDGET_IFRAME_URL, openBooking } from '../lib/booking.js'

const bg = '/images/terrasa/booking-bg.webp'
</script>

<template>
  <section id="booking" class="section booking">
    <ParallaxBg :src="bg" :speed="0.18" overlay="default" />

    <div class="container section-inner booking__inner">
      <div class="booking__text">
        <span class="eyebrow reveal">Бронирование</span>
        <h2 class="section-title reveal reveal--delay-1">
          Закрепим<br /><em>ваш вечер</em>
        </h2>
        <p class="reveal reveal--delay-2 muted booking__lead">
          Выберите дату, время и&nbsp;стол прямо здесь&nbsp;— бронь подтвердится
          онлайн, а&nbsp;администратор останется на&nbsp;связи. Для банкетов
          на&nbsp;30–80&nbsp;человек мы&nbsp;заранее согласуем формат, меню
          и&nbsp;рассадку.
        </p>

        <ul class="booking__features reveal reveal--delay-3">
          <li>Бронирование столов и&nbsp;заявки на&nbsp;банкет в&nbsp;одной форме</li>
          <li>Закрытые мероприятия до&nbsp;80&nbsp;персон обсуждаются отдельно</li>
          <li>Любые предпочтения по&nbsp;меню&nbsp;— заранее, мы&nbsp;учтём</li>
        </ul>

        <button class="btn booking__open reveal reveal--delay-3" @click="openBooking">
          Открыть бронирование
          <span class="arrow">→</span>
        </button>
      </div>

      <div class="booking__widget reveal reveal--delay-2 reveal--scale">
        <iframe
          :src="WIDGET_IFRAME_URL"
          class="booking__iframe"
          title="Бронирование столика в ресторане ТЕРРАСА"
          loading="lazy"
          allow="payment"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking__inner {
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

.booking__text {
  position: sticky;
  top: 120px;
  max-width: 480px;
}

.section-title {
  margin-top: 28px;
  margin-bottom: 32px;
}

.booking__lead {
  font-size: 17px;
  line-height: 1.7;
}

.booking__features {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.booking__features li {
  position: relative;
  padding-left: 28px;
  font-size: 14px;
  color: var(--ink-dim);
}

.booking__features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 16px;
  height: 1px;
  background: var(--accent);
}

.booking__open {
  margin-top: 36px;
}

.booking__widget {
  background: rgba(20, 18, 14, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  padding: 10px;
  overflow: hidden;
}

.booking__iframe {
  display: block;
  width: 100%;
  height: clamp(560px, 78vh, 760px);
  border: 0;
  border-radius: 4px;
  background: #34353e;
}

@media (max-width: 980px) {
  .booking__inner {
    grid-template-columns: 1fr;
  }
  .booking__text {
    position: static;
  }
}
</style>
