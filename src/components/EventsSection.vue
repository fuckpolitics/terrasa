<script setup>
import { ref } from 'vue'
import ParallaxBg from './ParallaxBg.vue'
import CallbackModal from './CallbackModal.vue'

const bg = '/images/terrasa/events-bg.webp'

const showCallback = ref(false)
const callbackTopic = ref('')

function discuss(format) {
  callbackTopic.value = format.title
  showCallback.value = true
}

const formats = [
  {
    title: 'Музыкальный вечер',
    persons: '6 июня · сб',
    desc: 'Живой саксофон в&nbsp;«ТЕРРАСЕ»&nbsp;— атмосферный вечер под музыку саксофониста. Вход свободный, столик бронируйте по&nbsp;телефону или через форму обратной связи.',
    price: '20:00–22:00',
    accent: true,
    cta: 'Забронировать стол',
    image: '/images/terrasa/sax.webp',
  },
  {
    title: 'Свадебное торжество',
    persons: '30–70 персон',
    desc: 'Торжество в&nbsp;банкетном пространстве с&nbsp;согласованным меню, рассадкой и&nbsp;вниманием к&nbsp;деталям вечера.',
    price: 'от 3 500 ₽ / гость',
    accent: false,
  },
  {
    title: 'Корпоративный вечер',
    persons: '30–80 персон',
    desc: 'Банкет или фуршет для команды, партнёров и&nbsp;гостей с&nbsp;индивидуальным подбором меню.',
    price: 'от 4 000 ₽ / гость',
    accent: false,
  },
]
</script>

<template>
  <section id="events" class="section events">
    <ParallaxBg :src="bg" :speed="0.2" overlay="default" />

    <div class="container section-inner">
      <div class="events__head">
        <div class="events__head-text">
          <span class="eyebrow reveal">События</span>
          <h2 class="section-title reveal reveal--delay-1">
            Вечера, которые<br /><em>вы&nbsp;запомните</em>
          </h2>
        </div>
        <p class="events__lead reveal reveal--delay-2 muted">
          Здесь будем публиковать анонсы вечеров и&nbsp;собирать частные события:
          свадьбы, корпоративы и&nbsp;банкеты в&nbsp;пространстве до&nbsp;80&nbsp;гостей.
        </p>
      </div>

      <div class="events__grid">
        <article
          v-for="(f, i) in formats"
          :key="f.title"
          class="event reveal"
          :class="[{ 'event--accent': f.accent, 'event--media': f.image }, `reveal--delay-${i + 1}`]"
        >
          <div v-if="f.image" class="event__media">
            <img :src="f.image" :alt="f.title" loading="lazy" />
          </div>
          <div class="event__top">
            <span class="event__num">0{{ i + 1 }}</span>
            <span class="event__persons">{{ f.persons }}</span>
          </div>
          <h3 class="event__title">{{ f.title }}</h3>
          <p class="event__desc" v-html="f.desc"></p>
          <div class="event__foot">
            <span class="event__price">{{ f.price }}</span>
            <a href="#" class="event__cta" @click.prevent="discuss(f)">
              {{ f.cta || 'Обсудить' }} <span class="arrow">→</span>
            </a>
          </div>
        </article>
      </div>

      <div class="events__strip reveal">
        <div class="events__strip-item">
          <span class="events__strip-num">30–80</span>
          <span class="events__strip-label">человек<br />на&nbsp;банкет</span>
        </div>
        <div class="events__strip-item">
          <span class="events__strip-num">30–70</span>
          <span class="events__strip-label">персон<br />на&nbsp;свадьбу</span>
        </div>
        <div class="events__strip-item">
          <span class="events__strip-num">от 4000</span>
          <span class="events__strip-label">рублей / гость<br />на&nbsp;корпоратив</span>
        </div>
      </div>
    </div>

    <CallbackModal v-model="showCallback" :topic="callbackTopic" />
  </section>
</template>

<style scoped>
.events__head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: 64px;
}

.events__lead {
  font-size: 17px;
  line-height: 1.7;
  max-width: 480px;
  justify-self: end;
}

.events__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 80px;
}

.event {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 36px 32px 32px;
  background: rgba(20, 18, 14, 0.72);
  backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  border-radius: 4px;
  min-height: 420px;
  transition: transform 0.5s var(--ease), border-color 0.5s var(--ease), background 0.5s var(--ease);
}

.event:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  background: rgba(28, 24, 18, 0.85);
}

.event--accent {
  background: rgba(201, 169, 110, 0.08);
  border-color: rgba(201, 169, 110, 0.4);
}

.event__media {
  margin: -36px -32px 28px;
  height: 260px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}

.event__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  display: block;
  transition: transform 0.6s var(--ease);
}

.event--media:hover .event__media img {
  transform: scale(1.04);
}

.event--media .event__top {
  margin-bottom: 24px;
}

.event__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
}

.event__num {
  font-family: var(--serif);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--accent-2);
}

.event__persons {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.event__title {
  font-family: var(--serif);
  font-size: clamp(28px, 2.6vw, 40px);
  font-weight: 400;
  line-height: 1.05;
  margin-bottom: 18px;
}

.event__desc {
  color: var(--ink-dim);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: auto;
}

.event__desc :deep(.event__link) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.3s var(--ease);
}

.event__desc :deep(.event__link:hover) {
  color: var(--accent-2);
}

.event__foot {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.event__price {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
}

.event__cta {
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

.event__cta:hover {
  color: var(--accent);
  gap: 12px;
}

.events__strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 48px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.events__strip-item {
  display: flex;
  align-items: baseline;
  gap: 18px;
}

.events__strip-num {
  font-family: var(--serif);
  font-size: clamp(40px, 4vw, 64px);
  color: var(--accent-2);
  line-height: 1;
  font-weight: 500;
}

.events__strip-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-dim);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .events__head {
    grid-template-columns: 1fr;
  }
  .events__lead {
    justify-self: start;
  }
  .events__grid {
    grid-template-columns: 1fr;
  }
  .events__strip {
    grid-template-columns: 1fr;
    padding: 32px;
    gap: 24px;
  }
}
</style>
