<script setup>
import { ref, computed } from 'vue'
import ParallaxBg from './ParallaxBg.vue'
import menu from '../content/menu.json'

const menuImg = '/images/terrasa/menu-bg.webp'

// Показываем только непустые разделы, чтобы случайно пустая категория
// из CMS не ломала вкладки.
const sections = computed(() =>
  (menu.sections || []).filter((s) => s.items && s.items.length),
)
const tabs = computed(() => sections.value.map((s) => ({ id: s.id, label: s.label })))

const active = ref(tabs.value[0]?.id || '')
const items = computed(() => {
  const section = sections.value.find((s) => s.id === active.value)
  return section ? section.items : []
})

function formatPrice(price) {
  return price ? `${price} ₽` : 'уточняйте'
}
</script>

<template>
  <section id="menu" class="section menu">
    <ParallaxBg :src="menuImg" :speed="0" overlay="default" />

    <div class="container section-inner">
      <header class="menu__head">
        <span class="eyebrow reveal">{{ menu.eyebrow }}</span>
        <h2 class="section-title reveal reveal--delay-1" v-html="menu.title"></h2>
        <p class="reveal reveal--delay-2 muted menu__intro">{{ menu.intro }}</p>
      </header>

      <div class="menu__tabs reveal reveal--delay-3">
        <button
          v-for="t in tabs"
          :key="t.id"
          class="menu__tab"
          :class="{ 'is-active': active === t.id }"
          @click="active = t.id"
        >
          {{ t.label }}
        </button>
      </div>

      <ul class="menu__list">
        <li
          v-for="(item, i) in items"
          :key="active + i"
          class="menu__item"
          :class="{ 'menu__item--head': item.heading }"
          :style="{ '--i': i }"
        >
          <h4 v-if="item.heading" class="menu__subhead">{{ item.name }}</h4>
          <template v-else>
            <div class="menu__item-row">
              <h3 class="menu__item-name">{{ item.name }}</h3>
              <span class="menu__item-dots"></span>
              <span class="menu__item-price">{{ formatPrice(item.price) }}</span>
            </div>
            <p v-if="item.desc" class="menu__item-desc">{{ item.desc }}</p>
          </template>
        </li>
      </ul>

      <div class="menu__foot reveal">
        <p class="muted">{{ menu.footnote }}</p>
        <button class="btn btn--ghost" @click="$emit('book')">
          Забронировать стол
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu__head {
  max-width: 720px;
  margin-bottom: 56px;
}

.menu__intro {
  margin-top: 28px;
  font-size: 17px;
  line-height: 1.7;
  max-width: 560px;
}

.menu__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 48px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.menu__tab {
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink);
  transition: all 0.4s var(--ease);
}

.menu__tab:hover {
  color: var(--ink);
  border-color: var(--ink-dim);
}

.menu__tab.is-active {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 80px;
  align-content: start;
}

/*
 * Фон секции привязан к высоте экрана, а не к содержимому списка.
 * Так при переключении вкладок (разной длины) фоновая картинка
 * не пере-масштабируется из-за изменения высоты секции.
 */
.menu :deep(.bg-layer) {
  height: 100vh;
  height: 100dvh;
  bottom: auto;
}

.menu__item {
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
  animation: menu-in 0.6s var(--ease) both;
  animation-delay: calc(var(--i, 0) * 80ms);
}

.menu__item--head {
  grid-column: 1 / -1;
  padding: 36px 0 8px;
  border-bottom: none;
}

.menu__list .menu__item--head:first-child {
  padding-top: 0;
}

.menu__subhead {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent-2);
}

@keyframes menu-in {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}

.menu__item-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
}

.menu__item-name {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.005em;
  color: var(--ink);
}

.menu__item-dots {
  flex: 1;
  border-bottom: 1px dotted var(--line-strong);
  height: 1px;
  align-self: center;
}

.menu__item-price {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  font-weight: 400;
}

.menu__item-desc {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: var(--ink-dim);
  line-height: 1.6;
  max-width: 520px;
}

.menu__foot {
  margin-top: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.menu__foot p {
  max-width: 560px;
  font-size: 14px;
}

@media (max-width: 900px) {
  .menu__list {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 560px) {
  .menu__item-name {
    font-size: 20px;
  }
  .menu__item-price {
    font-size: 18px;
  }
}
</style>
