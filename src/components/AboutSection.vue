<script setup>
import ParallaxBg from './ParallaxBg.vue'

const aboutImg = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=80'
const sideImg = 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=80'
</script>

<template>
  <section id="about" class="section about">
    <ParallaxBg :src="aboutImg" :speed="0.22" overlay="side" position="right center" />

    <div class="container about__inner section-inner">
      <div class="about__text">
        <span class="eyebrow reveal">О ресторане</span>

        <h2 class="section-title reveal reveal--delay-1">
          Место, где<br />
          <em>начинается вечер</em>
        </h2>

        <div class="about__copy reveal reveal--delay-2 muted">
          <p>
            «Терраса» открылась в&nbsp;2026&nbsp;году в&nbsp;историческом здании
            Ивановского областного драматического театра&nbsp;— как продолжение
            самого театра, только за&nbsp;столом. Сюда приходят до&nbsp;спектакля,
            после спектакля и&nbsp;вместо спектакля.
          </p>
          <p>
            Мы&nbsp;работаем с&nbsp;локальными фермерами Ивановской области,
            привозим вино из&nbsp;винодельческих регионов России, Италии и&nbsp;Грузии,
            а&nbsp;каждый сезон полностью переписываем меню заново.
          </p>
        </div>

        <ul class="about__list reveal reveal--delay-3">
          <li><span>01</span>Ужин по&nbsp;будням до&nbsp;23:00, по&nbsp;выходным до&nbsp;01:00</li>
          <li><span>02</span>Закрытый зал на&nbsp;28&nbsp;персон для частных вечеров</li>
          <li><span>03</span>Сомелье и&nbsp;шеф-повар лично сопровождают гостей</li>
          <li><span>04</span>Театральное меню за&nbsp;90&nbsp;минут до&nbsp;спектакля</li>
        </ul>
      </div>

      <div class="about__visual reveal--scale reveal reveal--delay-2">
        <div class="about__photo" :style="{ backgroundImage: `url(${sideImg})` }">
          <div class="about__photo-frame"></div>
        </div>
        <div class="about__quote">
          <span class="ornament">премьера&nbsp;2026</span>
          <p>
            «Хороший ресторан&nbsp;— это не&nbsp;только тарелка.
            Это вечер, который вы&nbsp;запомните дольше, чем меню».
          </p>
          <span class="about__quote-author">— Команда «Террасы»</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: center;
}

.about__text {
  max-width: 560px;
}

.section-title {
  margin-top: 28px;
  margin-bottom: 32px;
}

.about__copy {
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 17px;
  line-height: 1.75;
  max-width: 520px;
}

.about__list {
  margin-top: 44px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about__list li {
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 18px 0;
  border-top: 1px solid var(--line);
  font-size: 15px;
  color: var(--ink-dim);
  transition: color 0.4s var(--ease), padding-left 0.4s var(--ease);
}

.about__list li:last-child {
  border-bottom: 1px solid var(--line);
}

.about__list li:hover {
  color: var(--ink);
  padding-left: 8px;
}

.about__list span {
  font-family: var(--serif);
  color: var(--accent);
  font-size: 14px;
  letter-spacing: 0.18em;
  min-width: 32px;
}

.about__visual {
  position: relative;
}

.about__photo {
  position: relative;
  aspect-ratio: 4 / 5;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 40px 100px -40px rgba(0, 0, 0, 0.7);
}

.about__photo-frame {
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(244, 236, 224, 0.18);
  pointer-events: none;
}

.about__quote {
  position: absolute;
  right: -8%;
  bottom: -8%;
  max-width: 340px;
  padding: 28px 32px;
  background: rgba(14, 13, 11, 0.92);
  backdrop-filter: blur(8px);
  border: 1px solid var(--line-strong);
  border-radius: 4px;
}

.about__quote p {
  font-family: var(--serif);
  font-style: italic;
  font-size: 19px;
  line-height: 1.45;
  margin: 16px 0 12px;
  color: var(--ink);
}

.about__quote-author {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-mute);
}

@media (max-width: 980px) {
  .about__inner {
    grid-template-columns: 1fr;
  }
  .about__visual {
    order: -1;
    margin-bottom: 24px;
  }
  .about__quote {
    right: 4%;
    bottom: -32px;
    max-width: 80%;
  }
}

@media (max-width: 600px) {
  .about__quote {
    position: relative;
    right: auto;
    bottom: auto;
    max-width: 100%;
    margin-top: 24px;
  }
}
</style>
