<script setup>
import ParallaxBg from './ParallaxBg.vue'

const bg = 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2400&q=80'

const formats = [
  {
    title: 'Камерный ужин',
    persons: '6–14 персон',
    desc: 'Винный погреб, авторский сет из&nbsp;5–7 подач и&nbsp;сомелье, который ведёт вечер.',
    price: 'от 6 800 ₽ / гость',
    accent: false,
  },
  {
    title: 'Свадебное торжество',
    persons: '40–80 персон',
    desc: 'Полный выкуп ресторана, индивидуальное меню, координатор и&nbsp;флористика «под ключ».',
    price: 'от 480 000 ₽',
    accent: true,
  },
  {
    title: 'Корпоративный вечер',
    persons: '20–60 персон',
    desc: 'Банкет или фуршет, технические возможности для презентаций, парковка для&nbsp;гостей.',
    price: 'от 5 200 ₽ / гость',
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
          Мы&nbsp;ведём не&nbsp;больше двух частных событий в&nbsp;неделю —
          чтобы каждое получилось как&nbsp;надо. Координатор согласовывает
          меню, музыку, флористику и&nbsp;гостевую логистику.
        </p>
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
          <p class="event__desc" v-html="f.desc"></p>
          <div class="event__foot">
            <span class="event__price">{{ f.price }}</span>
            <a href="#booking" class="event__cta" @click.prevent="$emit('book')">
              Обсудить <span class="arrow">→</span>
            </a>
          </div>
        </article>
      </div>

      <div class="events__strip reveal">
        <div class="events__strip-item">
          <span class="events__strip-num">80</span>
          <span class="events__strip-label">Персон<br />в&nbsp;банкетной зоне</span>
        </div>
        <div class="events__strip-item">
          <span class="events__strip-num">9</span>
          <span class="events__strip-label">Шеф-сетов<br />под&nbsp;любой формат</span>
        </div>
        <div class="events__strip-item">
          <span class="events__strip-num">24/7</span>
          <span class="events__strip-label">Координатор<br />на&nbsp;связи до&nbsp;события</span>
        </div>
      </div>
    </div>
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
