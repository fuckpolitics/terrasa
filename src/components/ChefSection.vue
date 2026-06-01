<script setup>
import ParallaxBg from './ParallaxBg.vue'

const bg = '/images/terrasa/chef-bg.webp'
</script>

<template>
  <section id="chef" class="section chef">
    <ParallaxBg :src="bg" :speed="0.18" overlay="vignette" />

    <div class="container section-inner chef__inner">
      <div class="chef__text">
        <span class="eyebrow reveal">Шеф-повар</span>
        <h2 class="section-title reveal reveal--delay-1">
          Кухня<br /><em>от шефа</em>
        </h2>

        <div class="chef__bio reveal reveal--delay-2 muted">
          <p>
            Наш шеф-повар больше 20&nbsp;лет на&nbsp;кухне и&nbsp;за&nbsp;это
            время прошёл путь через десятки команд, запусков и&nbsp;сильных
            ресторанных историй.
          </p>
          <p>
            За&nbsp;его плечами больше 10&nbsp;успешных проектов, а&nbsp;теперь
            его кухня стала частью «ТЕРРАСЫ»&nbsp;— с&nbsp;сезонными блюдами,
            понятным вкусом и&nbsp;вниманием к&nbsp;деталям.
          </p>
        </div>

        <div class="chef__awards reveal reveal--delay-3">
          <div class="chef__award">
            <span class="chef__award-num">20+</span>
            <span class="chef__award-text">лет<br />на&nbsp;кухне</span>
          </div>
          <div class="chef__award">
            <span class="chef__award-num">10+</span>
            <span class="chef__award-text">успешных<br />проектов</span>
          </div>
          <div class="chef__award">
            <span class="chef__award-num">3</span>
            <span class="chef__award-text">блюда<br />от&nbsp;шефа</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chef__inner {
  display: flex;
  justify-content: center;
}

.chef__text {
  max-width: 640px;
  text-align: center;
}

.chef__bio,
.chef__awards {
  text-align: left;
}

.eyebrow {
  justify-content: center;
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
