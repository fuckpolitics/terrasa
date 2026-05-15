<script setup>
import { onMounted, ref } from 'vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import AtmosphereSection from './components/AtmosphereSection.vue'
import ChefSection from './components/ChefSection.vue'
import EventsSection from './components/EventsSection.vue'
import BookingSection from './components/BookingSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import TheFooter from './components/TheFooter.vue'
import { useReveal } from './composables/useReveal.js'

const root = ref(null)
useReveal(root)

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // Trigger split-line entrance once page loaded.
  requestAnimationFrame(() => {
    document.body.classList.add('is-ready')
  })
})
</script>

<template>
  <div ref="root" class="page">
    <TheNav />

    <main>
      <HeroSection @book="scrollToBooking" />
      <AboutSection />
      <MenuSection @book="scrollToBooking" />
      <AtmosphereSection />
      <ChefSection />
      <EventsSection @book="scrollToBooking" />
      <BookingSection />
      <ContactsSection @book="scrollToBooking" />
    </main>

    <TheFooter />
  </div>
</template>

<style>
.page {
  position: relative;
  background: var(--bg);
  isolation: isolate;
}

main {
  position: relative;
  z-index: 1;
}

/* Subtle vertical line that follows the gutter on desktop */
@media (min-width: 1100px) {
  .page::before,
  .page::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--line);
    z-index: 40;
    pointer-events: none;
  }
  .page::before { left: var(--gutter); }
  .page::after  { right: var(--gutter); }
}

/* Trigger split-line on first paint */
body.is-ready .split-line__inner {
  transform: translate3d(0, 0, 0);
}
</style>
