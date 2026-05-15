<script setup>
import ParallaxBg from './ParallaxBg.vue'

const bg = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2400&q=80'

const tiles = [
  {
    img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1400&q=80',
    title: 'Главный зал',
    text: 'Тёплый свет, дубовые столы, открытая кухня и&nbsp;вид во&nbsp;внутренний двор.',
    span: 'large',
  },
  {
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80',
    title: 'Бар',
    text: 'Авторские коктейли и&nbsp;500&nbsp;позиций крепкого алкоголя.',
  },
  {
    img: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80',
    title: 'Винный погреб',
    text: 'Камерный зал на&nbsp;8&nbsp;персон для дегустаций.',
  },
  {
    img: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1400&q=80',
    title: 'Терраса',
    text: 'Открытая веранда с&nbsp;мая по&nbsp;сентябрь, 40&nbsp;посадочных мест.',
    span: 'wide',
  },
]
</script>

<template>
  <section id="atmosphere" class="section atmosphere">
    <ParallaxBg :src="bg" :speed="0.16" overlay="default" />

    <div class="container section-inner">
      <header class="atmosphere__head">
        <span class="eyebrow reveal">Атмосфера</span>
        <h2 class="section-title reveal reveal--delay-1">
          Четыре пространства<br /><em>под один вечер</em>
        </h2>
      </header>

      <div class="atmosphere__grid">
        <article
          v-for="(t, i) in tiles"
          :key="i"
          class="tile reveal"
          :class="[`tile--${t.span || 'reg'}`, `reveal--delay-${(i % 4) + 1}`]"
        >
          <div class="tile__media">
            <div
              class="tile__image"
              :style="{ backgroundImage: `url(${t.img})` }"
            ></div>
          </div>
          <div class="tile__caption">
            <h3>{{ t.title }}</h3>
            <p v-html="t.text"></p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.atmosphere__head {
  max-width: 720px;
  margin-bottom: 64px;
}

.atmosphere__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 240px;
  gap: 16px;
}

.tile {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: var(--bg-2);
  border: 1px solid var(--line);
  isolation: isolate;
}

.tile--large {
  grid-column: span 4;
  grid-row: span 2;
}

.tile--reg {
  grid-column: span 2;
  grid-row: span 1;
}

.tile--wide {
  grid-column: span 6;
  grid-row: span 1;
}

.tile__media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.tile__image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 1.2s var(--ease), filter 0.6s var(--ease);
  filter: saturate(0.92) contrast(1.02);
}

.tile:hover .tile__image {
  transform: scale(1.06);
  filter: saturate(1.05) contrast(1.05);
}

.tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(14, 13, 11, 0.05) 0%, rgba(14, 13, 11, 0.85) 100%);
  z-index: 1;
}

.tile__caption {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 22px;
  z-index: 2;
  color: var(--ink);
}

.tile__caption h3 {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 8px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

.tile__caption p {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  max-width: 380px;
  line-height: 1.55;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 900px) {
  .atmosphere__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  .tile--large {
    grid-column: span 2;
    grid-row: span 2;
  }
  .tile--reg {
    grid-column: span 1;
  }
  .tile--wide {
    grid-column: span 2;
  }
}

@media (max-width: 540px) {
  .atmosphere__grid {
    grid-auto-rows: 220px;
  }
  .tile--reg {
    grid-column: span 2;
  }
}
</style>
