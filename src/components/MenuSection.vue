<script setup>
import { ref, computed } from 'vue'
import ParallaxBg from './ParallaxBg.vue'

const menuImg = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2400&q=80'

const tabs = [
  { id: 'starters', label: 'Закуски' },
  { id: 'mains', label: 'Горячее' },
  { id: 'desserts', label: 'Десерты' },
  { id: 'wine', label: 'Винная карта' },
]

const data = {
  starters: [
    { name: 'Тартар из говядины', desc: 'Выдержанная говядина, желток, каперсы, тост из&nbsp;закваски', price: '890' },
    { name: 'Севиче из дорадо', desc: 'Цитрусовый маринад, авокадо, манго, перец халапеньо', price: '1 240' },
    { name: 'Татаки из тунца', desc: 'Кунжут, понзу, маринованный имбирь, кинза', price: '1 380' },
    { name: 'Ивановская свёкла', desc: 'Печёная свёкла, козий сыр, грецкий орех, бальзамик', price: '640' },
  ],
  mains: [
    { name: 'Каре ягнёнка', desc: 'Розмарин, тыквенное пюре, демиглас на&nbsp;красном вине', price: '2 480' },
    { name: 'Сибас на угле', desc: 'Цельный сибас, лимонное масло, цукини на&nbsp;гриле', price: '1 980' },
    { name: 'Ризотто с белыми грибами', desc: 'Карнароли, пармезан 24&nbsp;месяца, трюфельное масло', price: '1 480' },
    { name: 'Утиная грудка', desc: 'Соус из&nbsp;вишни, картофель фондан, лук-шалот', price: '1 740' },
  ],
  desserts: [
    { name: 'Павлова с маракуйей', desc: 'Хрустящее безе, маскарпоне, тропические фрукты', price: '620' },
    { name: 'Шоколадный фондан', desc: 'Тёмный шоколад 70&nbsp;%, мороженое с&nbsp;солёной карамелью', price: '680' },
    { name: 'Тарт татен', desc: 'Карамелизованные яблоки, песочное тесто, ваниль Бурбон', price: '590' },
    { name: 'Чизкейк New York', desc: 'Сливочный сыр, малиновый кулис, базилик', price: '560' },
  ],
  wine: [
    { name: 'Brut Nature, Кубань', desc: 'Россия · игристое · сухое · бокал/бутылка', price: '480 / 2 800' },
    { name: 'Saperavi Reserve', desc: 'Грузия · красное · сухое · бокал/бутылка', price: '620 / 3 400' },
    { name: 'Chianti Classico', desc: 'Италия · красное · сухое · бокал/бутылка', price: '780 / 4 600' },
    { name: 'Sancerre', desc: 'Франция · белое · сухое · бокал/бутылка', price: '860 / 5 200' },
  ],
}

const active = ref('starters')
const items = computed(() => data[active.value])
</script>

<template>
  <section id="menu" class="section menu">
    <ParallaxBg :src="menuImg" :speed="0.18" overlay="default" />

    <div class="container section-inner">
      <header class="menu__head">
        <span class="eyebrow reveal">Сезонное меню</span>
        <h2 class="section-title reveal reveal--delay-1">
          Кухня, которая<br /><em>знает меру</em>
        </h2>
        <p class="reveal reveal--delay-2 muted menu__intro">
          Шесть месяцев в&nbsp;году, четыре подачи в&nbsp;день, один принцип&nbsp;—
          чистый вкус продукта. Ниже — самые частые гости в&nbsp;заказах
          текущего сезона.
        </p>
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
          :style="{ '--i': i }"
        >
          <div class="menu__item-row">
            <h3 class="menu__item-name">{{ item.name }}</h3>
            <span class="menu__item-dots"></span>
            <span class="menu__item-price">{{ item.price }}&nbsp;₽</span>
          </div>
          <p class="menu__item-desc" v-html="item.desc"></p>
        </li>
      </ul>

      <div class="menu__foot reveal">
        <p class="muted">
          Полное меню&nbsp;— у&nbsp;официанта или по&nbsp;запросу.
          Сезонная карта обновляется каждый март и&nbsp;октябрь.
        </p>
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
}

.menu__item {
  padding: 28px 0;
  border-bottom: 1px solid var(--line);
  animation: menu-in 0.6s var(--ease) both;
  animation-delay: calc(var(--i, 0) * 80ms);
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
