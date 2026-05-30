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
  { id: 'lunch', label: 'Бизнес-ланч' },
  { id: 'bar', label: 'Барная карта' },
]

const data = {
  coldStarters: [
    { name: 'Ассорти мясное', desc: 'Выход: 103&nbsp;г', price: '750' },
    { name: 'Ассорти сырное', desc: 'Выход: 160&nbsp;г', price: '690' },
    { name: 'Ассорти рыбное', desc: 'Выход: 95&nbsp;г', price: '750' },
    { name: 'Брускета с прошутто и вялеными томатами', desc: 'Выход: 70&nbsp;г', price: '240' },
    { name: 'Канноли с утиным паштетом на хрустальном желе', desc: 'Выход: 210&nbsp;г', price: '450' },
    { name: 'Севиче из морепродуктов', desc: 'Выход: 160&nbsp;г', price: '790' },
    { name: 'Овощное крудите', desc: 'Выход: 250&nbsp;г', price: '520' },
    { name: 'Разносолы', desc: 'Выход: 300&nbsp;г', price: '650' },
  ],
  hotStarters: [
    { name: 'Тортилья с рваной говядиной', desc: 'Выход: 240 / 60&nbsp;г', price: '750' },
    { name: 'Хрустящие креветки васаби', desc: 'Выход: 100 / 60&nbsp;г', price: '530' },
  ],
  salads: [
    { name: 'Оливье с уткой и копченым цыплёнком', desc: 'Выход: 230&nbsp;г', price: '550' },
    { name: 'Греческий салат с печёным перцем и жареным сыром', desc: 'Выход: 220&nbsp;г', price: '550' },
    { name: 'Салат с кальмаром, креветками, авокадо и рукколой', desc: 'Выход: 240&nbsp;г', price: '850' },
    { name: 'Салат с копченым перепелиным яйцом и жареным беконом', desc: 'Выход: 210&nbsp;г', price: '550' },
    { name: 'Салат с хрустящими баклажанами, творожным сыром и азиатским соусом', desc: 'Выход: 220&nbsp;г', price: '550' },
    { name: 'Тар-тар из телячьей вырезки с грибным дюкселем, пудрой из пармезана и черным трюфелем', desc: 'Выход: 170&nbsp;г', price: '890' },
  ],
  soups: [
    { name: 'Борщ с телятиной, чесночной гренкой, салом и сметаной', desc: 'Выход: 300 / 50 / 25&nbsp;г', price: '550' },
    { name: 'Окрошка на квасе с пастрами', desc: 'Выход: 300&nbsp;г', price: '590' },
    { name: 'Суп-крем капучино из белых грибов с трюфелем', desc: 'Выход: 250&nbsp;г', price: '550' },
    { name: 'Уха из лосося', desc: 'Выход: 300&nbsp;г', price: '550' },
  ],
  mains: [
    { name: 'Лингвини с креветками том-ям', desc: 'Выход: 310&nbsp;г', price: '950' },
    { name: 'Лосось со спаржей в фисташковой панировке с соусом беарнез', desc: 'Выход: 100 / 60 / 60&nbsp;г', price: '1 190' },
    { name: 'Ризотто с белыми грибами и трюфелем', desc: 'Выход: 300&nbsp;г', price: '850' },
    { name: 'Телячьи щечки с хрустящими вешенками и картофельным пюре', desc: 'Выход: 120 / 140 / 60 / 5 / 20&nbsp;г', price: '950' },
    { name: 'Утиное филе с карамелизированной тыквой и клюквенно-брусничным соусом', desc: 'Выход: 120 / 40 / 40&nbsp;г', price: '750' },
    { name: 'Филе миньон с овощами и соусом чими-чури', desc: 'Выход: 160 / 90 / 50&nbsp;г', price: '1 190' },
  ],
  sides: [
    { name: 'Хлебная корзинка', desc: 'Выход: 160&nbsp;г', price: '120' },
    { name: 'Пирожковая тарелка 6 шт.', desc: 'Выход: 240&nbsp;г', price: '350' },
  ],
  desserts: [
    { name: 'Десерт от шефа', desc: 'Выход: 120&nbsp;г', price: '450' },
    { name: 'Манго маракуйя', desc: 'Выход: 140&nbsp;г', price: '440' },
    { name: 'Таежный десерт с брусникой, клюквой и сливочной эспумой', desc: 'Выход: 140&nbsp;г', price: '450' },
    { name: 'Трайфл Наполеон', desc: 'Выход: 150&nbsp;г', price: '350' },
    { name: 'Мороженое', desc: 'Выход: 100&nbsp;г', price: '180' },
    { name: 'Фруктовая тарелка', desc: 'Выход: 1000&nbsp;г', price: '2 300' },
    { name: 'Шоколадный фонтан, 1,5 кг', desc: 'Выход: 1500&nbsp;г', price: '3 500' },
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
    { name: 'Котлетки куриные с картофельным пюре', desc: 'Выход: 100 / 150&nbsp;г', price: '250' },
    { name: 'Бабушкина пицца', desc: 'Выход: 120&nbsp;г', price: '180' },
    { name: 'Мороженое с наполнителем на выбор', desc: 'Выход: 100&nbsp;г', price: '220' },
    { name: 'Молочный коктейль', desc: 'Выход: 250&nbsp;г', price: '250' },
  ],
  lunch: [
    { name: 'Буженина BBQ с овощным соте', desc: '', price: '320' },
    { name: 'Крем-суп грибной', desc: '', price: '220' },
    { name: 'Окрошка на квасе', desc: '', price: '220' },
    { name: 'Пицца Маргарита, 1 кусок', desc: '', price: '150' },
    { name: 'Пицца Пепперони, 1 кусок', desc: '', price: '150' },
    { name: 'Греческий салат с фетой', desc: '', price: '200' },
    { name: 'Салат зелёный с копчёным сулугуни', desc: '', price: '200' },
    { name: 'Салат со снежным крабом', desc: '', price: '200' },
    { name: 'Спагетти болоньезе', desc: '', price: '320' },
    { name: 'Пирожки в ассортименте, 2 шт.', desc: '', price: '80' },
    { name: 'Хлебная корзина', desc: '', price: '60' },
    { name: 'Чай, 250 мл', desc: '', price: '60' },
    { name: 'Морс, 200 мл', desc: '', price: '80' },
    { name: 'Кофе американо', desc: '', price: '130' },
    { name: 'Капучино', desc: '', price: '200' },
  ],
  bar: [
    { name: 'Лимонады', heading: true },
    { name: 'Тархун', desc: '0,5&nbsp;л', price: '180' },
    { name: 'Дюшес', desc: '0,5&nbsp;л', price: '180' },
    { name: 'Кола', desc: '0,5&nbsp;л', price: '180' },
    { name: 'Байкал', desc: '0,5&nbsp;л', price: '180' },
    { name: 'Груша', desc: '0,5&nbsp;л', price: '160' },
    { name: 'Соки', heading: true },
    { name: 'Зелёное яблоко', desc: '0,2&nbsp;л', price: '140' },
    { name: 'Вишнёвый', desc: '0,2&nbsp;л', price: '140' },
    { name: 'Апельсиновый', desc: '0,2&nbsp;л', price: '140' },
    { name: 'Томатный', desc: '0,2&nbsp;л', price: '140' },
    { name: 'Персик', desc: '0,2&nbsp;л', price: '140' },
    { name: 'Вода', heading: true },
    { name: 'Серафимов Дар с газом', desc: '0,5&nbsp;л', price: '150' },
    { name: 'Серафимов Дар без газа', desc: '0,5&nbsp;л', price: '150' },
    { name: 'Боржоми', desc: '0,5&nbsp;л', price: '320' },
    { name: 'Вода Хрустальная с газом', desc: '', price: '120' },
    { name: 'Вода Хрустальная без газа', desc: '', price: '120' },
    { name: 'Чай', heading: true },
    { name: 'Гринфилд чёрный', desc: '750&nbsp;мл', price: '350' },
    { name: 'Гринфилд зелёный', desc: '750&nbsp;мл', price: '350' },
    { name: 'Чёрный с чабрецом', desc: '750&nbsp;мл', price: '380' },
    { name: 'Имбирный', desc: '750&nbsp;мл', price: '450' },
    { name: 'Облепиховый', desc: '750&nbsp;мл', price: '450' },
    { name: 'Лимон к чаю', desc: '', price: '50' },
    { name: 'Мёд к чаю', desc: '', price: '80' },
    { name: 'Мята к чаю', desc: '', price: '20' },
    { name: 'Кофе', heading: true },
    { name: 'Эспрессо', desc: '90&nbsp;мл', price: '180' },
    { name: 'Американо', desc: '250&nbsp;мл', price: '210' },
    { name: 'Капучино', desc: '250&nbsp;мл', price: '260' },
    { name: 'Латте', desc: '250&nbsp;мл', price: '290' },
    { name: 'Айс-кофе', desc: '250&nbsp;мл', price: '290' },
    { name: 'Флэт Уайт', desc: '', price: '290' },
    { name: 'Домашние лимонады', heading: true },
    { name: 'Ивановский ситец', desc: '250&nbsp;мл', price: '220' },
    { name: 'Крапивный лимонад', desc: '250&nbsp;мл', price: '220' },
    { name: 'Облепиховый рассвет', desc: '250&nbsp;мл', price: '220' },
    { name: 'Террасный мохито', desc: '250&nbsp;мл', price: '220' },
    { name: 'Текстильный пунш', desc: '1000&nbsp;мл', price: '700' },
    { name: 'Фреши', heading: true },
    { name: 'Апельсиновый', desc: '250&nbsp;мл', price: '250' },
    { name: 'Яблочный', desc: '250&nbsp;мл', price: '250' },
    { name: 'Грейпфрутовый', desc: '250&nbsp;мл', price: '250' },
    { name: 'Сельдерейно-морковный', desc: '250&nbsp;мл', price: '250' },
    { name: 'Пиво бутылочное', heading: true },
    { name: 'Айнзидлер Вайсбир', desc: 'Светлый лагер · 5,2%', price: '780' },
    { name: 'Айнзидлер Пилсенер', desc: 'Светлый пилснер · 4,9%', price: '780' },
    { name: 'Балтика Brew Bruin', desc: 'Тёмный бельгийский эль · 6,5%', price: '350' },
    { name: 'Балтика Brew Kriek', desc: 'Фруктовый эль · 5,1%', price: '350' },
    { name: 'Балтика Brew Blond', desc: 'Фруктовый эль · 5,1%', price: '350' },
    { name: 'Балтика Brew IPA', desc: 'Классический IPA · 7,2%', price: '380' },
    { name: 'Крон Бланш Бьер', desc: 'Пшеничное · 4,5%', price: '300' },
    { name: 'Крон Бланш Бьер (б/а)', desc: 'Пшеничное безалкогольное · 0,5%', price: '300' },
    { name: 'Крон Лагер', desc: 'Оригинальный лагер · 4,5%', price: '' },
    { name: 'Рюдигер Оригинал Премиум', desc: 'Светлый лагер · 4,8%', price: '300' },
    { name: 'Рюдигер Оригинал Пилзнер', desc: 'Светлый лагер · 4,5%', price: '300' },
    { name: 'Балтика Портер 6', desc: 'Балтийский портер · 7%', price: '350' },
    { name: 'Вино · игристое', heading: true },
    { name: 'Bourgeois Brut', desc: 'Россия, Краснодарский край · брют · 0,75&nbsp;л', price: '1 580' },
    { name: 'Междуморье Брют', desc: 'Россия, Тамань · брют · 0,75&nbsp;л · бокал 125&nbsp;мл — 360&nbsp;₽', price: '1 900' },
    { name: 'Буржуа Полусладкое', desc: 'Россия, Санкт-Петербург · полусладкое · 0,75&nbsp;л', price: '1 580' },
    { name: "Fiorino d'Oro Prosecco Spumante", desc: 'Италия, Венето · сухое · 0,75&nbsp;л', price: '3 800' },
    { name: "Fiorino d'Oro Asti Spumante", desc: 'Италия, Пьемонт · сладкое · 0,75&nbsp;л', price: '3 800' },
    { name: 'Josep Ventosa Cava Brut', desc: 'Испания, Каталония · брют · 0,75&nbsp;л', price: '4 500' },
    { name: 'Вино · белое', heading: true },
    { name: 'Шато Андре Шардоне', desc: 'Россия, Кубань · сухое · 0,75&nbsp;л · бокал 125&nbsp;мл — 420&nbsp;₽', price: '2 400' },
    { name: 'Como Una Moto Airen', desc: 'Испания, Кастилия-Ла-Манча · полусладкое · 0,75&nbsp;л · бокал 125&nbsp;мл — 480&nbsp;₽', price: '2 800' },
    { name: 'Междуморье Рислинг', desc: 'Россия, Краснодарский край · сухое · 0,75&nbsp;л', price: '1 890' },
    { name: "Sant'Orsola Pinot Grigio", desc: 'Италия, Венето · сухое · 0,75&nbsp;л · бокал 125&nbsp;мл — 480&nbsp;₽', price: '2 900' },
    { name: 'The Ned Sauvignon Blanc', desc: 'Новая Зеландия, Мальборо · сухое · 0,75&nbsp;л', price: '4 900' },
    { name: 'Криница Azur', desc: 'Россия, Геленджик · сухое · 0,75&nbsp;л', price: '3 800' },
    { name: 'Diario Branco', desc: 'Португалия, Виньу Верде · полусухое · 0,75&nbsp;л', price: '2 800' },
    { name: 'Вино · красное', heading: true },
    { name: "Sant'Orsola Chianti", desc: 'Италия, Тоскана · сухое · 0,75&nbsp;л · бокал 125&nbsp;мл — 600&nbsp;₽', price: '3 600' },
    { name: 'Шато Андре Мадо Руж', desc: 'Россия, Кубань · сухое · 0,75&nbsp;л', price: '2 600' },
    { name: 'Parfum Grenache', desc: 'Россия, Краснодарский край · сухое · 0,75&nbsp;л · бокал 125&nbsp;мл — 480&nbsp;₽', price: '2 800' },
    { name: 'Джейран Гранат', desc: 'Азербайджан · полусладкое · 0,75&nbsp;л · бокал 150&nbsp;мл — 440&nbsp;₽', price: '2 200' },
    { name: 'Kris Pinot Noir', desc: 'Италия, Альто-Адидже · сухое · 0,75&nbsp;л', price: '3 800' },
    { name: 'Como Una Moto Tempranillo', desc: 'Испания, Кастилия-Ла-Манча · полусладкое · 0,75&nbsp;л', price: '4 600' },
    { name: 'Вино · розовое', heading: true },
    { name: 'Laroche Rose La Chevaliere', desc: 'Франция · сухое · 0,75&nbsp;л', price: '3 800' },
    { name: 'Diario Rosado', desc: 'Португалия, Виньу Верде · полусухое · 0,75&nbsp;л', price: '2 800' },
    { name: 'Вино · безалкогольное', heading: true },
    { name: 'Celebrities Zero Sparkling', desc: 'Испания · игристое · безалкогольное · 0,75&nbsp;л', price: '3 500' },
    { name: 'Dr. Lo Riesling', desc: 'Германия, Мозель · полусладкое · безалкогольное · 0,75&nbsp;л', price: '3 900' },
    { name: 'Виски', heading: true },
    { name: 'Macallan Double Cask 12 лет', desc: '50&nbsp;мл', price: '2 100' },
    { name: "Jack Daniel's", desc: '50&nbsp;мл', price: '480' },
    { name: 'Loch Lomond Reserve Blend', desc: '50&nbsp;мл', price: '380' },
    { name: 'Jameson', desc: '50&nbsp;мл', price: '450' },
    { name: 'Коньяк', heading: true },
    { name: 'Dugladze 5 лет', desc: '50&nbsp;мл', price: '320' },
    { name: 'Hennessy VS', desc: '50&nbsp;мл', price: '790' },
    { name: 'Hennessy VSOP', desc: '50&nbsp;мл', price: '1 100' },
    { name: 'Водка', heading: true },
    { name: 'Русское Золото', desc: '50&nbsp;мл · 0,5&nbsp;л — 1 400&nbsp;₽', price: '140' },
    { name: 'Mamont', desc: '50&nbsp;мл · 0,5&nbsp;л — 3 300&nbsp;₽', price: '330' },
    { name: 'Finlandia', desc: '50&nbsp;мл · 0,5&nbsp;л — 3 800&nbsp;₽', price: '380' },
    { name: 'Зёрна Севера', desc: '50&nbsp;мл · 0,5&nbsp;л — 2 200&nbsp;₽', price: '220' },
    { name: 'Джин', heading: true },
    { name: 'Bee Gin London Dry', desc: '50&nbsp;мл', price: '220' },
    { name: 'Bee Gin Flavoured', desc: '50&nbsp;мл', price: '270' },
    { name: 'Ром', heading: true },
    { name: 'Takamaka Extra Noir', desc: '50&nbsp;мл', price: '480' },
    { name: 'Diplomatico Reserva Exclusiva', desc: '50&nbsp;мл', price: '530' },
    { name: 'Бренди', heading: true },
    { name: 'Vecchia Romagna Etichetta Nera', desc: '50&nbsp;мл', price: '360' },
    { name: 'Текила', heading: true },
    { name: 'El Tequileño Blanco', desc: '50&nbsp;мл', price: '420' },
    { name: 'Olmeca Silver', desc: '50&nbsp;мл', price: '380' },
    { name: 'Olmeca Gold', desc: '50&nbsp;мл', price: '430' },
    { name: 'Ликёр', heading: true },
    { name: 'Jägermeister', desc: '50&nbsp;мл', price: '350' },
    { name: 'Baileys', desc: '50&nbsp;мл', price: '370' },
    { name: 'Вермут', heading: true },
    { name: 'Martini Rosso', desc: '100&nbsp;мл', price: '490' },
    { name: 'Martini Bianco', desc: '100&nbsp;мл', price: '490' },
    { name: 'Домашние настойки', heading: true },
    { name: 'Хреновуха', desc: '40&nbsp;мл', price: '200' },
    { name: 'Пряная вишня', desc: '40&nbsp;мл', price: '200' },
    { name: 'Лимончелло', desc: '40&nbsp;мл', price: '200' },
    { name: 'Брусника ванильная на коньяке', desc: '40&nbsp;мл', price: '200' },
    { name: 'Дегустационный сет 4+1', desc: '200&nbsp;мл', price: '800' },
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
            <p v-if="item.desc" class="menu__item-desc" v-html="item.desc"></p>
          </template>
        </li>
      </ul>

      <div class="menu__foot reveal">
        <p class="muted">
          Полное меню&nbsp;— у&nbsp;официанта или по&nbsp;запросу.
          Бизнес-ланч по&nbsp;будням, меню обновляется каждую неделю.
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
