<script setup>
import { ref, computed } from 'vue'
import ParallaxBg from './ParallaxBg.vue'

const menuImg = '/images/terrasa/menu-bg.webp'

const tabs = [
  { id: 'coldStarters', label: 'Холодные закуски' },
  { id: 'hotStarters', label: 'Горячие закуски' },
  { id: 'salads', label: 'Салаты' },
  { id: 'soups', label: 'Супы' },
  { id: 'mains', label: 'Горячее' },
  { id: 'sides', label: 'Гарниры' },
  { id: 'desserts', label: 'Десерты' },
  { id: 'pies', label: 'Пироги' },
  { id: 'kids', label: 'Детское меню' },
]

const data = {
  coldStarters: [
    { name: 'Ассорти мясное', desc: 'Выход: 103&nbsp;г', price: '790' },
    { name: 'Ассорти сырное', desc: 'Выход: 160&nbsp;г', price: '750' },
    { name: 'Ассорти рыбное', desc: 'Выход: 95&nbsp;г', price: '850' },
    { name: 'Брускета с прошутто и томатами', desc: 'Выход: 70&nbsp;г', price: '240' },
    { name: 'Канноли с утиным паштетом', desc: 'Выход: 210&nbsp;г', price: '450' },
    { name: 'Севиче из морепродуктов', desc: 'Выход: 160&nbsp;г', price: '950' },
    { name: 'Овощное крудите', desc: 'Выход: 250&nbsp;г', price: '650' },
    { name: 'Разносолы', desc: 'Выход: 300&nbsp;г', price: '750' },
  ],
  hotStarters: [
    { name: 'Тортилья с рваной говядиной и сулугуни', desc: 'Выход: 240 / 60&nbsp;г', price: '750' },
    { name: 'Хрустящие креветки васаби', desc: 'Выход: 100 / 60&nbsp;г', price: '750' },
  ],
  salads: [
    { name: 'Оливье с уткой и копченым куриным филе', desc: 'Выход: 230&nbsp;г', price: '550' },
    { name: 'Салат греческий с печеным перцем', desc: 'Выход: 220&nbsp;г', price: '550' },
    { name: 'Салат с кальмаром лолиго, креветками и рукколой', desc: 'Выход: 240&nbsp;г', price: '950' },
    { name: 'Салат с копченым перепелиным яйцом и жареным беконом', desc: 'Выход: 210&nbsp;г', price: '600' },
    { name: 'Салат с хрустящими баклажанами, творожным сыром и азиатским соусом', desc: 'Выход: 220&nbsp;г', price: '550' },
    { name: 'Тар-тар из телячьей вырезки с грибным дюкселем, пудрой из пармезана и черным трюфелем', desc: 'Выход: 170&nbsp;г', price: '1 300' },
  ],
  soups: [
    { name: 'Борщ с телятиной, чесночной гренкой, салом и сметаной', desc: 'Выход: 300 / 50 / 25&nbsp;г', price: '550' },
    { name: 'Окрошка на квасе с пастрами', desc: 'Выход: 300&nbsp;г', price: '600' },
    { name: 'Суп-крем капучино из белых грибов', desc: 'Выход: 250&nbsp;г', price: '600' },
    { name: 'Уха из лосося', desc: 'Выход: 300&nbsp;г', price: '750' },
  ],
  mains: [
    { name: 'Лингвини с креветками том-ям', desc: 'Выход: 310&nbsp;г', price: '950' },
    { name: 'Лосось со спаржей в фисташковой панировке с соусом беарнез', desc: 'Выход: 100 / 60 / 60&nbsp;г', price: '1 450' },
    { name: 'Ризотто с белыми грибами и зеленым горошком', desc: 'Выход: 300&nbsp;г', price: '950' },
    { name: 'Телячьи щечки с пюре из запеченного картофеля, грибами и вялеными томатами', desc: 'Выход: 120 / 140 / 60 / 5 / 20&nbsp;г', price: '950' },
    { name: 'Утиное филе с карамелизированной тыквой и клюквенно-брусничным соусом', desc: 'Выход: 120 / 40 / 40&nbsp;г', price: '890' },
    { name: 'Филе миньон с овощами и соусом чими-чури', desc: 'Выход: 160 / 90 / 50&nbsp;г', price: '1 500' },
  ],
  sides: [
    { name: 'Хлебная корзинка', desc: 'Выход: 160&nbsp;г', price: '120' },
    { name: 'Пирожковая тарелка 6 шт.', desc: 'Выход: 240&nbsp;г', price: '350' },
  ],
  desserts: [
    { name: 'Анна Павлова', desc: 'Выход: 120&nbsp;г', price: '450' },
    { name: 'Манго маракуйя', desc: 'Выход: 140&nbsp;г', price: '480' },
    { name: 'Таежный десерт с брусникой, клюквой и сливочной эспумой', desc: 'Выход: 140&nbsp;г', price: '450' },
    { name: 'Трайфл Наполеон', desc: 'Выход: 150&nbsp;г', price: '400' },
    { name: 'Мороженое', desc: 'Выход: 100&nbsp;г', price: '220' },
    { name: 'Фруктовая тарелка', desc: 'Выход: 1000&nbsp;г', price: '2 500' },
    { name: 'Фондан', desc: 'Выход уточняется', price: '' },
  ],
  pies: [
    { name: 'С мясом', desc: 'Пироги на заказ', price: '' },
    { name: 'С картофелем', desc: 'Пироги на заказ', price: '' },
    { name: 'С капустой', desc: 'Пироги на заказ', price: '' },
    { name: 'С яйцом и луком', desc: 'Пироги на заказ', price: '' },
    { name: 'С яблоками', desc: 'Пироги на заказ', price: '' },
  ],
  kids: [
    { name: 'Суп с азбукой', desc: 'Выход: 250&nbsp;г', price: '250' },
    { name: 'Котлетки куриные с картофельным пюре', desc: 'Выход: 100 / 150&nbsp;г', price: '350' },
    { name: 'Бабушкина пицца', desc: 'Выход: 120&nbsp;г', price: '250' },
    { name: 'Мороженое с наполнителем на выбор', desc: 'Выход: 100&nbsp;г', price: '220' },
    { name: 'Молочный коктейль', desc: 'Выход: 250&nbsp;г', price: '250' },
  ],
}

const active = ref('coldStarters')
const items = computed(() => data[active.value])

function formatPrice(price) {
  return price ? `${price} ₽` : 'уточняйте'
}
</script>

<template>
  <section id="menu" class="section menu">
    <ParallaxBg :src="menuImg" :speed="0" overlay="default" />

    <div class="container section-inner">
      <header class="menu__head">
        <span class="eyebrow reveal">Сезонное меню</span>
        <h2 class="section-title reveal reveal--delay-1">
          Кухня, которая<br /><em>знает меру</em>
        </h2>
        <p class="reveal reveal--delay-2 muted menu__intro">
          В&nbsp;основе&nbsp;— блюда текущего сезона и&nbsp;любимые позиции,
          к&nbsp;которым гости возвращаются снова. Каждый сезон мы&nbsp;обновляем
          основные блюда, но&nbsp;не&nbsp;переписываем меню полностью.
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
            <span class="menu__item-price">{{ formatPrice(item.price) }}</span>
          </div>
          <p class="menu__item-desc" v-html="item.desc"></p>
        </li>
      </ul>

      <div class="menu__foot reveal">
        <p class="muted">
          Полное меню&nbsp;— у&nbsp;официанта или по&nbsp;запросу.
          Винную карту и&nbsp;барную карту добавим отдельно.
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
  min-height: 640px;
  align-content: start;
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
    min-height: 1080px;
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
