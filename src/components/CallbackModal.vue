<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { formatRuPhone } from '../lib/phone.js'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  topic: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])

// Заявки уходят на почту ресторана через FormSubmit (статический сайт без бэкенда).
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/zastol2026@yandex.ru'

const form = reactive({ name: '', phone: '', comment: '' })
const sent = ref(false)
const sending = ref(false)
const error = ref('')

const isValid = computed(
  () => form.name.trim().length >= 2 && /\+?[\d\s\-()]{10,}/.test(form.phone),
)

function close() {
  emit('update:modelValue', false)
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      sent.value = false
      error.value = ''
    }
  },
)

async function submit() {
  if (!isValid.value) {
    error.value = 'Заполните, пожалуйста, имя и телефон.'
    return
  }
  error.value = ''
  sending.value = true

  const payload = {
    _subject: `Заявка на мероприятие — ТЕРРАСА${props.topic ? ` (${props.topic})` : ''}`,
    _template: 'table',
    _captcha: 'false',
    Формат: props.topic || '—',
    Имя: form.name,
    Телефон: form.phone,
    Комментарий: form.comment || '—',
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    sent.value = true
    form.name = ''
    form.phone = ''
    form.comment = ''
  } catch (e) {
    error.value =
      'Не удалось отправить заявку. Позвоните, пожалуйста, по телефону +7 (906) 069-91-18.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <teleport to="body">
    <transition name="cb-fade">
      <div v-if="modelValue" class="cb" @click.self="close">
        <div class="cb__card" role="dialog" aria-modal="true">
          <button class="cb__close" type="button" aria-label="Закрыть" @click="close">×</button>

          <template v-if="!sent">
            <span class="eyebrow">Обсудить мероприятие</span>
            <h3 class="cb__title">
              {{ topic || 'Частное событие' }}
            </h3>
            <p class="cb__lead muted">
              Оставьте контакты&nbsp;— перезвоним и&nbsp;поможем согласовать формат,
              меню и&nbsp;рассадку. Или позвоните нам напрямую:
            </p>

            <div class="cb__phones">
              <a href="tel:+79060699118">+7 (906) 069-91-18</a>
              <a href="tel:+79060699107">+7 (906) 069-91-07</a>
            </div>

            <form class="cb__form" @submit.prevent="submit">
              <label class="cb__field">
                <span class="cb__label">Имя</span>
                <input v-model="form.name" type="text" placeholder="Ваше имя" />
              </label>
              <label class="cb__field">
                <span class="cb__label">Телефон</span>
                <input
                  :value="form.phone"
                  type="tel"
                  inputmode="tel"
                  placeholder="+7 (___) ___-__-__"
                  @input="form.phone = formatRuPhone($event.target.value)"
                />
              </label>
              <label class="cb__field">
                <span class="cb__label">Комментарий</span>
                <textarea
                  v-model="form.comment"
                  rows="2"
                  placeholder="Дата, число гостей, пожелания…"
                ></textarea>
              </label>

              <p v-if="error" class="cb__error">{{ error }}</p>

              <button class="btn cb__submit" type="submit" :disabled="sending">
                <span v-if="sending">Отправляем…</span>
                <span v-else>Отправить заявку</span>
                <span class="arrow">→</span>
              </button>
              <span class="cb__note muted">
                Нажимая кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных
              </span>
            </form>
          </template>

          <div v-else class="cb__success">
            <span class="ornament">Спасибо!</span>
            <h3 class="cb__title">Заявка отправлена</h3>
            <p class="cb__lead muted">
              Мы&nbsp;перезвоним в&nbsp;ближайшее время и&nbsp;обсудим детали вашего вечера.
            </p>
            <button class="btn btn--ghost" type="button" @click="close">Закрыть</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.cb {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(8, 7, 5, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.cb__card {
  position: relative;
  width: 100%;
  max-width: 460px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg-2);
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  padding: clamp(28px, 5vw, 44px);
}

.cb__close {
  position: absolute;
  top: 14px;
  right: 16px;
  width: 36px;
  height: 36px;
  font-size: 26px;
  line-height: 1;
  color: var(--ink-dim);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s var(--ease);
}
.cb__close:hover {
  color: var(--accent);
}

.cb__title {
  font-family: var(--serif);
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 400;
  line-height: 1.1;
  margin: 14px 0 16px;
  color: var(--ink);
}

.cb__lead {
  font-size: 15px;
  line-height: 1.6;
}

.cb__phones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin: 18px 0 26px;
}
.cb__phones a {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  transition: color 0.3s var(--ease);
}
.cb__phones a:hover {
  color: var(--accent-2);
}

.cb__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cb__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cb__label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.cb__field input,
.cb__field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line-strong);
  padding: 11px 0 13px;
  font-size: 16px;
  color: var(--ink);
  font-family: inherit;
  outline: none;
  border-radius: 0;
  transition: border-color 0.3s var(--ease);
}
.cb__field textarea {
  resize: vertical;
  min-height: 52px;
}
.cb__field input:focus,
.cb__field textarea:focus {
  border-bottom-color: var(--accent);
}

.cb__error {
  margin: 0;
  padding: 12px 16px;
  border-left: 2px solid #d96e6e;
  background: rgba(217, 110, 110, 0.08);
  color: #f0c2c2;
  font-size: 13px;
}

.cb__submit {
  margin-top: 6px;
  align-self: flex-start;
}

.cb__note {
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink-dim);
}

.cb__success {
  text-align: center;
  padding: 12px 0 8px;
}

.cb-fade-enter-active,
.cb-fade-leave-active {
  transition: opacity 0.3s var(--ease);
}
.cb-fade-enter-from,
.cb-fade-leave-to {
  opacity: 0;
}
</style>
