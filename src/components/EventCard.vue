<script setup>
import { computed } from 'vue'

const props = defineProps({
  event: { type: Object, required: true },
  compact: { type: Boolean, default: false },
  actionLabel: { type: String, default: 'Забронировать стол' },
})
const emit = defineEmits(['discuss'])
const topic = computed(() => props.event.bookingTopic?.trim() || props.event.title.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim())
</script>

<template>
  <article class="event-card reveal" :class="{ 'event-card--compact': compact, 'event-card--text': !event.poster }">
    <button v-if="event.poster" type="button" class="event-card__media" :aria-label="`${actionLabel}: ${topic}`" @click="emit('discuss', topic)">
      <img :src="event.poster" :alt="event.posterAlt || topic" loading="lazy" />
    </button>
    <div class="event-card__body">
      <span v-if="event.dateLabel" class="eyebrow">{{ event.dateLabel }}</span>
      <h4 class="event-card__title" v-html="event.title"></h4>
      <p v-if="event.text" class="event-card__text">{{ event.text }}</p>
      <button type="button" class="btn" @click="emit('discuss', topic)">
        {{ actionLabel }} <span class="arrow">→</span>
      </button>
    </div>
  </article>
</template>

<style scoped>
.event-card {
  display: grid;
  grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding: clamp(20px, 3vw, 40px);
  background: rgba(201, 169, 110, 0.06);
  border: 1px solid rgba(201, 169, 110, 0.32);
  border-radius: 6px;
  min-width: 0;
  overflow-wrap: anywhere;
}
.event-card--compact, .event-card--text {
  grid-template-columns: minmax(0, 1fr);
}
.event-card--compact {
  grid-template-rows: auto 1fr;
  align-items: start;
}
.event-card__media {
  display: block;
  width: 100%;
  max-width: 360px;
  justify-self: center;
  padding: 0;
  background: transparent;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s var(--ease);
}
.event-card__media:hover {
  transform: translateY(-4px);
}
.event-card__media img {
  display: block;
  width: 100%;
  height: auto;
}
.event-card__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: center;
  min-width: 0;
}
.event-card__title {
  font-family: var(--serif);
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 400;
  line-height: 1.1;
  margin: 18px 0 20px;
}
.event-card__text {
  white-space: pre-line;
  color: var(--ink-dim);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 28px;
}
.event-card--compact .btn {
  margin-top: auto;
}
.event-card--text .event-card__body {
  grid-row: 1 / -1;
}
@media (max-width: 900px) {
  .event-card {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
}
@media (max-width: 400px) {
  .event-card .btn {
    width: 100%;
    padding-inline: 12px;
    letter-spacing: 0.08em;
  }
}
</style>
