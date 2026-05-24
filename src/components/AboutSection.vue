<script setup>
import ParallaxBg from './ParallaxBg.vue'

const aboutImg = '/images/terrasa/about-bg.webp'
const sideImg = '/images/terrasa/about-side.webp'
</script>

<template>
  <section id="about" class="section about">
    <ParallaxBg :src="aboutImg" :speed="0.22" overlay="side" position="right center" />

    <div class="container about__inner section-inner">
      <div class="about__text">
        <span class="eyebrow reveal">О ресторане</span>

        <h2 class="section-title reveal reveal--delay-1">
          О ресторане<br />
          <em>ТЕРРАСА</em>
        </h2>

        <div class="about__copy reveal reveal--delay-2 muted">
          <p>
            «ТЕРРАСА»&nbsp;— это не&nbsp;просто ресторан. Это место в&nbsp;самом
            сердце города, куда приходят не&nbsp;поесть, а&nbsp;прожить вечер.
            Атмосфера, пространство, ощущение&nbsp;— вот настоящий продукт.
          </p>
          <p>
            Меню живёт вместе с&nbsp;сезоном: каждый сезон мы&nbsp;обновляем
            основные блюда, сохраняя любимые позиции и&nbsp;общий характер кухни.
          </p>
        </div>

        <ul class="about__list reveal reveal--delay-3">
          <li><span>01</span>Работаем ежедневно с&nbsp;12:00 до&nbsp;00:00</li>
          <li><span>02</span>Закрытые мероприятия до&nbsp;80&nbsp;персон</li>
          <li><span>03</span>Сезонные обновления основных блюд</li>
          <li><span>04</span>Главный зал, терраса и&nbsp;банкетное пространство</li>
        </ul>
      </div>

      <div class="about__visual reveal--scale reveal reveal--delay-2">
        <div class="about__photo" :style="{ backgroundImage: `url(${sideImg})` }">
          <div class="about__photo-frame"></div>
        </div>
        <div class="about__quote">
          <span class="ornament">премьера&nbsp;2026</span>
          <p>
            «ТЕРРАСА»&nbsp;— это вечер, который вы&nbsp;запомните
            не&nbsp;меньше, чем вкус любимого блюда.
          </p>
          <span class="about__quote-author">— Команда «ТЕРРАСЫ»</span>
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
  top: 14px;
  right: 14px;
  bottom: 14px;
  left: 14px;
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
