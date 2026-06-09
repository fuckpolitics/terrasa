<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { openBooking } from '../lib/booking.js'

const scrolled = ref(false)
const open = ref(false)

const links = [
  { id: 'about', label: 'О нас' },
  { id: 'menu', label: 'Меню' },
  { id: 'atmosphere', label: 'Атмосфера' },
  { id: 'chef', label: 'Шеф' },
  { id: 'events', label: 'События' },
  { id: 'contacts', label: 'Контакты' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function go(id) {
  open.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function book() {
  open.value = false
  openBooking()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="nav__inner container">
      <a href="#top" class="nav__brand" @click.prevent="go('top')">
        <span class="nav__mark">T</span>
        <span class="nav__name">
          <span class="nav__name-main">ТЕРРАСА</span>
          <span class="nav__name-sub">Ivanovo · Драмтеатр</span>
        </span>
      </a>

      <nav class="nav__links" aria-label="Главная навигация">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          @click.prevent="go(l.id)"
          class="nav__link"
        >
          {{ l.label }}
        </a>
      </nav>

      <div class="nav__actions">
        <a class="nav__phone" href="tel:+79030177620">+7 (903) 017-76-20</a>
        <button class="btn btn--small" @click="book">
          Забронировать
          <span class="arrow">→</span>
        </button>
      </div>

      <button
        class="nav__burger"
        :aria-expanded="open"
        aria-label="Меню"
        @click="open = !open"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="nav__mobile" :hidden="!open">
      <nav class="nav__mobile-links" aria-label="Мобильная навигация">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          @click.prevent="go(l.id)"
        >
          {{ l.label }}
        </a>
      </nav>
      <div class="nav__mobile-foot">
        <a href="tel:+79030177620">+7 (903) 017-76-20</a>
        <button class="btn" @click="book">Забронировать стол</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition:
    background-color 0.5s var(--ease),
    backdrop-filter 0.5s var(--ease),
    border-color 0.5s var(--ease);
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  background: rgba(14, 13, 11, 0.72);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom-color: var(--line);
}

.nav__inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.nav__mark {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent);
  border-radius: 50%;
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  font-weight: 500;
}

.nav__name {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nav__name-main {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.nav__name-sub {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink-dim);
  margin-top: 4px;
}

.nav__links {
  display: flex;
  justify-content: center;
  gap: 36px;
}

.nav__link {
  position: relative;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
  padding: 6px 0;
  transition: color 0.3s var(--ease);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s var(--ease);
}

.nav__link:hover {
  color: var(--ink);
}

.nav__link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav__actions {
  display: inline-flex;
  align-items: center;
  gap: 24px;
}

.nav__phone {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--ink);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
}

.nav__phone:hover {
  color: var(--accent);
}

.btn--small {
  padding: 12px 22px;
  font-size: 11px;
  letter-spacing: 0.2em;
}

.nav__burger {
  display: none;
  width: 44px;
  height: 44px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.nav__burger span {
  display: block;
  width: 22px;
  height: 1px;
  background: var(--ink);
  transition: transform 0.4s var(--ease), opacity 0.3s var(--ease);
}

.nav--open .nav__burger span:first-child {
  transform: translateY(3.5px) rotate(45deg);
}
.nav--open .nav__burger span:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.nav__mobile {
  display: none;
}

@media (max-width: 980px) {
  .nav__links,
  .nav__actions {
    display: none;
  }
  .nav__burger {
    display: flex;
  }
  .nav__inner {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .nav__mobile {
    display: block;
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(14, 13, 11, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 40px var(--gutter);
    overflow-y: auto;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.45s var(--ease), opacity 0.45s var(--ease);
  }

  .nav--open .nav__mobile {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav__mobile-links {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .nav__mobile-links a {
    font-family: var(--serif);
    font-size: 38px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  .nav__mobile-foot {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
  }

  .nav__mobile-foot a {
    font-size: 18px;
    letter-spacing: 0.06em;
    color: var(--accent);
  }
}
</style>
