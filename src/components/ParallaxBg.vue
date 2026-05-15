<script setup>
import { ref } from 'vue'
import { useParallax } from '../composables/useParallax.js'

const props = defineProps({
  src: { type: String, required: true },
  speed: { type: Number, default: 0.18 },
  overlay: { type: String, default: 'default' },
  position: { type: String, default: 'center' },
  grain: { type: Boolean, default: true },
})

const imgRef = ref(null)
useParallax(imgRef, { speed: props.speed })
</script>

<template>
  <div class="bg-layer" aria-hidden="true">
    <div
      ref="imgRef"
      class="bg-layer__image"
      :style="{
        backgroundImage: `url(${src})`,
        backgroundPosition: position,
      }"
    ></div>
    <div class="bg-layer__overlay" :class="`overlay--${overlay}`"></div>
    <div v-if="grain" class="bg-layer__grain"></div>
  </div>
</template>

<style scoped>
.overlay--default {
  background:
    linear-gradient(180deg, rgba(8, 7, 6, 0.7) 0%, rgba(10, 9, 7, 0.78) 60%, rgba(14, 13, 11, 0.96) 100%);
}

.overlay--hero {
  background:
    radial-gradient(ellipse at 50% 30%, rgba(8, 7, 6, 0.35) 0%, rgba(10, 9, 7, 0.7) 60%, rgba(14, 13, 11, 0.97) 100%),
    linear-gradient(180deg, rgba(8, 7, 6, 0.35) 0%, rgba(14, 13, 11, 0.96) 100%);
}

.overlay--soft {
  background:
    linear-gradient(180deg, rgba(8, 7, 6, 0.55) 0%, rgba(10, 9, 7, 0.66) 60%, rgba(14, 13, 11, 0.92) 100%);
}

.overlay--side {
  background:
    linear-gradient(90deg, rgba(8, 7, 6, 0.96) 0%, rgba(10, 9, 7, 0.82) 40%, rgba(14, 13, 11, 0.45) 100%);
}

.overlay--side-r {
  background:
    linear-gradient(270deg, rgba(8, 7, 6, 0.96) 0%, rgba(10, 9, 7, 0.82) 40%, rgba(14, 13, 11, 0.45) 100%);
}

.overlay--vignette {
  background:
    radial-gradient(ellipse at center, rgba(8, 7, 6, 0.18) 0%, rgba(10, 9, 7, 0.6) 60%, rgba(14, 13, 11, 0.97) 100%);
}
</style>
