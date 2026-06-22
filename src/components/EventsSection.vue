<script setup>
import { ref } from 'vue'
import ParallaxBg from './ParallaxBg.vue'
import CallbackModal from './CallbackModal.vue'
import eventsData from '../content/events.json'

const bg = '/images/terrasa/events-bg.webp'

const events = eventsData
const feature = eventsData.feature
const formats = eventsData.formats
const strip = eventsData.strip

const showCallback = ref(false)
const callbackTopic = ref('')

function discuss(topic) {
  callbackTopic.value = topic
  showCallback.value = true
}
</script>

<template>
  <section id="events" class="section events">
    <ParallaxBg :src="bg" :speed="0.2" overlay="default" />

    <div class="container section-inner">
      <div class="events__head">
        <div class="events__head-text">
          <span class="eyebrow reveal">{{ events.eyebrow }}</span>
          <h2 class="section-title reveal reveal--delay-1" v-html="events.title"></h2>
        </div>
        <p class="events__lead reveal reveal--delay-2 muted">{{ events.lead }}</p>
      </div>

      <div v-if="feature && feature.show" class="events__feature reveal">
        <a
          class="events__feature-media"
          href="#"
          aria-label="Забронировать стол на ближайшее событие"
          @click.prevent="discuss(feature.bookingTopic)"
        >
          <img
            :src="feature.poster"
            :alt="feature.posterAlt"
            loading="lazy"
          />
        </a>
        <div class="events__feature-text">
          <span class="eyebrow">{{ feature.dateLabel }}</span>
          <h3 class="events__feature-title" v-html="feature.title"></h3>
          <p class="muted">{{ feature.text }}</p>
          <button class="btn" @click="discuss(feature.bookingTopic)">
            Забронировать стол <span class="arrow">→</span>
          </button>
        </div>
      </div>

      <div class="events__grid">
        <article
          v-for="(f, i) in formats"
          :key="f.title"
          class="event reveal"
          :class="[{ 'event--accent': f.accent }, `reveal--delay-${i + 1}`]"
        >
          <div class="event__top">
            <span class="event__num">0{{ i + 1 }}</span>
            <span class="event__persons">{{ f.persons }}</span>
          </div>
          <h3 class="event__title">{{ f.title }}</h3>
          <p class="event__desc">{{ f.desc }}</p>
          <div class="event__foot">
            <span class="event__price">{{ f.price }}</span>
            <a href="#" class="event__cta" @click.prevent="discuss(f.title)">
              {{ f.cta || 'Обсудить' }} <span class="arrow">→</span>
            </a>
          </div>
        </article>
      </div>

      <div class="events__strip reveal">
        <div v-for="(s, i) in strip" :key="i" class="events__strip-item">
          <span class="events__strip-num">{{ s.num }}</span>
          <span class="events__strip-label" v-html="s.label"></span>
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

.events__feature {
  display: grid;
  grid-template-columns: minmax(260px, 360px) 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
  margin-bottom: 64px;
  padding: clamp(24px, 4vw, 48px);
  background: rgba(201, 169, 110, 0.06);
  border: 1px solid rgba(201, 169, 110, 0.32);
  border-radius: 6px;
}

.events__feature-media {
  display: block;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s var(--ease);
}

.events__feature-media:hover {
  transform: translateY(-5px);
}

.events__feature-media img {
  display: block;
  width: 100%;
  height: auto;
}

.events__feature-title {
  font-family: var(--serif);
  font-size: clamp(30px, 3.4vw, 46px);
  font-weight: 400;
  line-height: 1.05;
  margin: 18px 0 20px;
}

.events__feature-text p {
  color: var(--ink-dim);
  font-size: 16px;
  line-height: 1.7;
  max-width: 540px;
  margin-bottom: 30px;
}

.events__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  .events__feature {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 28px;
  }
  .events__feature-media {
    max-width: 340px;
  }
  .events__feature-text p {
    margin-left: auto;
    margin-right: auto;
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
