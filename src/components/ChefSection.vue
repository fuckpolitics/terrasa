<script setup>
import { ref } from 'vue'
import ParallaxBg from './ParallaxBg.vue'
import { useParallax } from '../composables/useParallax.js'

const bg = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=2400&q=80'
const portrait = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1400&q=80'

const portraitRef = ref(null)
useParallax(portraitRef, { speed: -0.12 })
</script>

<template>
  <section id="chef" class="section chef">
    <ParallaxBg :src="bg" :speed="0.18" overlay="vignette" />

    <div class="container section-inner chef__inner">
      <div class="chef__portrait reveal reveal--scale">
        <div
          ref="portraitRef"
          class="chef__photo"
          :style="{ backgroundImage: `url(${portrait})` }"
        ></div>
        <div class="chef__signature">
          <span class="ornament">Chef</span>
          <span class="chef__sig-name">А.&nbsp;Корнев</span>
        </div>
      </div>

      <div class="chef__text">
        <span class="eyebrow reveal">Шеф-повар</span>
        <h2 class="section-title reveal reveal--delay-1">
          Александр<br /><em>Корнев</em>
        </h2>

        <div class="chef__bio reveal reveal--delay-2 muted">
          <p>
            Двенадцать лет на&nbsp;кухне, шесть&nbsp;— стажировки в&nbsp;Москве,
            Тбилиси и&nbsp;Сан-Себастьяне. В&nbsp;2026&nbsp;году переехал
            в&nbsp;Иваново, чтобы открыть «Террасу» и&nbsp;собрать первую
            сезонную карту.
          </p>
          <p>
            «Я&nbsp;не&nbsp;люблю громкие слова про авторскую кухню.
            Хороший ужин&nbsp;— это когда вы&nbsp;улыбаетесь между подачами,
            а&nbsp;не&nbsp;спрашиваете, что это было».
          </p>
        </div>

        <div class="chef__awards reveal reveal--delay-3">
          <div class="chef__award">
            <span class="chef__award-num">2023</span>
            <span class="chef__award-text">Шеф года<br />по&nbsp;версии Eat&nbsp;Out</span>
          </div>
          <div class="chef__award">
            <span class="chef__award-num">2024</span>
            <span class="chef__award-text">Гран-при<br />«Лучший ресторан ЦФО»</span>
          </div>
          <div class="chef__award">
            <span class="chef__award-num">2025</span>
            <span class="chef__award-text">Финалист<br />The Russian Menu Awards</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chef__inner {
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: center;
}

.chef__portrait {
  position: relative;
}

.chef__photo {
  aspect-ratio: 4 / 5;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  filter: saturate(0.9) contrast(1.05);
  box-shadow: 0 50px 120px -40px rgba(0, 0, 0, 0.7);
  will-change: transform;
}

.chef__signature {
  position: absolute;
  bottom: -32px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: var(--bg);
  border: 1px solid var(--line-strong);
  border-radius: 4px;
}

.chef__sig-name {
  font-family: var(--serif);
  font-style: italic;
  font-size: 22px;
  color: var(--ink);
}

.chef__text {
  max-width: 560px;
}

.section-title {
  margin-top: 28px;
  margin-bottom: 32px;
}

.chef__bio {
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 17px;
  line-height: 1.75;
}

.chef__awards {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}

.chef__award {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chef__award-num {
  font-family: var(--serif);
  font-size: 38px;
  color: var(--accent-2);
  line-height: 1;
  font-weight: 500;
}

.chef__award-text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-dim);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .chef__inner {
    grid-template-columns: 1fr;
  }
  .chef__portrait {
    max-width: 460px;
    margin: 0 auto 56px;
  }
}

@media (max-width: 560px) {
  .chef__awards {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .chef__award {
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--line);
  }
}
</style>
