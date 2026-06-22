<script setup>
import ParallaxBg from './ParallaxBg.vue'
import site from '../content/site.json'

const bg = '/images/terrasa/chef-bg.webp'
const chef = site.chef
</script>

<template>
  <section id="chef" class="section chef">
    <ParallaxBg :src="bg" :speed="0.18" overlay="vignette" />

    <div class="container section-inner chef__inner">
      <div class="chef__text">
        <span class="eyebrow reveal">{{ chef.eyebrow }}</span>
        <h2 class="section-title reveal reveal--delay-1" v-html="chef.title"></h2>

        <div class="chef__bio reveal reveal--delay-2 muted">
          <p v-for="(p, i) in chef.paragraphs" :key="i">{{ p }}</p>
        </div>

        <div class="chef__awards reveal reveal--delay-3">
          <div v-for="(a, i) in chef.awards" :key="i" class="chef__award">
            <span class="chef__award-num">{{ a.num }}</span>
            <span class="chef__award-text" v-html="a.text"></span>
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
