<script setup>
import ParallaxBg from './ParallaxBg.vue'
import site from '../content/site.json'

const heroImg = '/images/terrasa/hero.webp'
const hero = site.hero

defineEmits(['book'])

function scrollToMenu() {
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="section section--full hero">
    <ParallaxBg :src="heroImg" :speed="0.12" overlay="hero" />

    <div class="container hero__inner">
      <div class="hero__top">
        <span class="eyebrow">{{ hero.eyebrow }}</span>
      </div>

      <h1 class="hero__title display">
        <span class="split-line">
          <span class="split-line__inner" :style="{ '--d': '0.05s' }" v-html="hero.titleLine1"></span>
        </span>
        <span class="split-line">
          <span class="split-line__inner" :style="{ '--d': '0.18s' }" v-html="hero.titleLine2"></span>
        </span>
        <span class="split-line">
          <span class="split-line__inner" :style="{ '--d': '0.32s' }" v-html="hero.titleLine3"></span>
        </span>
        <span class="split-line">
          <span class="split-line__inner" :style="{ '--d': '0.46s' }" v-html="hero.titleLine4"></span>
        </span>
      </h1>

      <div class="hero__bottom">
        <p class="hero__lead reveal reveal--delay-2">{{ hero.lead }}</p>

        <div class="hero__cta reveal reveal--delay-3">
          <button class="btn" @click="$emit('book')">
            Забронировать стол
            <span class="arrow">→</span>
          </button>
          <button class="btn btn--ghost" @click="scrollToMenu">
            Смотреть меню
          </button>
        </div>

        <div class="hero__meta reveal reveal--delay-4">
          <div v-for="(s, i) in hero.stats" :key="i" class="hero__meta-item">
            <span class="hero__meta-num">{{ s.num }}</span>
            <span class="hero__meta-label" v-html="s.label"></span>
          </div>
        </div>
      </div>

      <a href="#about" class="hero__scroll" @click.prevent="document.getElementById('about').scrollIntoView({behavior:'smooth'})">
        <span>Листать</span>
        <span class="hero__scroll-line"></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 0;
  padding-bottom: 0;
  min-height: 100vh;
  min-height: 100dvh;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-height: 100dvh;
  padding-top: clamp(140px, 18vh, 220px);
  padding-bottom: clamp(60px, 8vh, 120px);
  gap: clamp(60px, 8vh, 120px);
}

.hero__top {
  position: relative;
}

.hero__title {
  font-family: var(--serif);
  font-weight: 300;
  font-size: clamp(46px, 9.5vw, 156px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-top: 24px;
}

.hero__title em {
  font-style: italic;
  color: var(--accent);
  font-weight: 400;
}

.hero__bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  gap: clamp(32px, 5vw, 80px);
}

.hero__lead {
  max-width: 540px;
  font-size: clamp(17px, 1.35vw, 20px);
  font-weight: 500;
  line-height: 1.6;
  color: var(--ink);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
}

.hero__cta {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
}

.hero__meta {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  padding-top: 36px;
  border-top: 1px solid var(--line);
  margin-top: 36px;
}

.hero__meta-item {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.hero__meta-num {
  font-family: var(--serif);
  font-size: clamp(38px, 4.5vw, 68px);
  color: var(--accent-2);
  line-height: 1;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.hero__meta-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero__scroll {
  position: absolute;
  right: var(--gutter);
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-dim);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero__scroll-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  position: relative;
  overflow: hidden;
}

.hero__scroll-line::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, var(--accent), transparent);
  animation: scroll-pulse 2.4s var(--ease) infinite;
}

@keyframes scroll-pulse {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(120%); }
}

@media (max-width: 768px) {
  .hero__bottom {
    grid-template-columns: 1fr;
  }
  .hero__meta {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .hero__meta-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .hero__scroll {
    display: none;
  }
}
</style>
