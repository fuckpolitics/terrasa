<script setup>
import { ref, reactive, computed } from 'vue'
import ParallaxBg from './ParallaxBg.vue'

const bg = '/images/terrasa/booking-bg.webp'

const today = new Date().toISOString().slice(0, 10)
const form = reactive({
  name: '',
  phone: '',
  date: today,
  time: '19:00',
  guests: 2,
  occasion: '',
  comment: '',
})

const sent = ref(false)
const sending = ref(false)
const error = ref('')

const guestsOptions = [1, 2, 3, 4, 5, 6, 7, 8, '8+']
const timeSlots = ['12:00', '13:30', '15:00', '17:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00']
const occasions = ['Просто ужин', 'Свидание', 'День рождения', 'Свадьба', 'Корпоратив', 'Банкет']

const isValid = computed(
  () => form.name.trim().length >= 2 && /\+?[\d\s\-()]{10,}/.test(form.phone),
)

function submit() {
  if (!isValid.value) {
    error.value = 'Заполните, пожалуйста, имя и телефон.'
    return
  }
  error.value = ''
  sending.value = true
  setTimeout(() => {
    sending.value = false
    sent.value = true
  }, 900)
}

function reset() {
  sent.value = false
  form.name = ''
  form.phone = ''
  form.comment = ''
}
</script>

<template>
  <section id="booking" class="section booking">
    <ParallaxBg :src="bg" :speed="0.18" overlay="default" />

    <div class="container section-inner booking__inner">
      <div class="booking__text">
        <span class="eyebrow reveal">Бронирование</span>
        <h2 class="section-title reveal reveal--delay-1">
          Закрепим<br /><em>ваш вечер</em>
        </h2>
        <p class="reveal reveal--delay-2 muted booking__lead">
          Заполните форму&nbsp;— и&nbsp;администратор перезвонит в&nbsp;течение
          15&nbsp;минут, подтвердит детали и&nbsp;предложит самое подходящее место.
          Для банкетов на&nbsp;30–80&nbsp;человек мы&nbsp;заранее согласуем формат,
          меню и&nbsp;рассадку.
        </p>

        <ul class="booking__features reveal reveal--delay-3">
          <li>Бронирование столов и&nbsp;заявки на&nbsp;банкет в&nbsp;одной форме</li>
          <li>Закрытые мероприятия до&nbsp;80&nbsp;персон обсуждаются отдельно</li>
          <li>Любые предпочтения по&nbsp;меню&nbsp;— заранее, мы&nbsp;учтём</li>
        </ul>
      </div>

      <form class="booking__form reveal reveal--delay-2 reveal--scale" @submit.prevent="submit">
        <transition name="fade" mode="out-in">
          <div v-if="!sent" key="form">
            <div class="field-group">
              <label class="field">
                <span class="field__label">Имя</span>
                <input v-model="form.name" type="text" placeholder="Александр" />
              </label>
              <label class="field">
                <span class="field__label">Телефон</span>
                <input v-model="form.phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </label>
            </div>

            <div class="field-group">
              <label class="field">
                <span class="field__label">Дата</span>
                <input v-model="form.date" type="date" :min="today" />
              </label>
              <label class="field">
                <span class="field__label">Время</span>
                <select v-model="form.time">
                  <option v-for="t in timeSlots" :key="t">{{ t }}</option>
                </select>
              </label>
              <label class="field">
                <span class="field__label">Гостей</span>
                <select v-model="form.guests">
                  <option v-for="g in guestsOptions" :key="g" :value="g">{{ g }}</option>
                </select>
              </label>
            </div>

            <div class="field-group">
              <label class="field field--full">
                <span class="field__label">Повод</span>
                <div class="chips">
                  <button
                    v-for="o in occasions"
                    type="button"
                    :key="o"
                    class="chip"
                    :class="{ 'is-active': form.occasion === o }"
                    @click="form.occasion = form.occasion === o ? '' : o"
                  >
                    {{ o }}
                  </button>
                </div>
              </label>
            </div>

            <label class="field field--full">
              <span class="field__label">Комментарий</span>
              <textarea
                v-model="form.comment"
                rows="3"
                placeholder="Аллергии, столик у&nbsp;окна, сюрприз…"
              ></textarea>
            </label>

            <p v-if="error" class="form-error">{{ error }}</p>

            <div class="booking__actions">
              <button class="btn" type="submit" :disabled="sending">
                <span v-if="sending">Отправляем…</span>
                <span v-else>Забронировать</span>
                <span class="arrow">→</span>
              </button>
              <span class="booking__note muted">
                Нажимая кнопку, вы&nbsp;соглашаетесь
                на&nbsp;обработку персональных данных
              </span>
            </div>
          </div>

          <div v-else key="ok" class="booking__success">
            <span class="ornament">Спасибо!</span>
            <h3>Заявка отправлена</h3>
            <p>Мы&nbsp;перезвоним на&nbsp;{{ form.phone }} в&nbsp;течение 15&nbsp;минут&nbsp;— подтвердим стол на&nbsp;{{ form.date }}, {{ form.time }}, {{ form.guests }}&nbsp;гостя/гостей.</p>
            <button class="btn btn--ghost" @click="reset">Новая бронь</button>
          </div>
        </transition>
      </form>
    </div>
  </section>
</template>

<style scoped>
.booking__inner {
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

.booking__text {
  position: sticky;
  top: 120px;
  max-width: 480px;
}

.section-title {
  margin-top: 28px;
  margin-bottom: 32px;
}

.booking__lead {
  font-size: 17px;
  line-height: 1.7;
}

.booking__features {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.booking__features li {
  position: relative;
  padding-left: 28px;
  font-size: 14px;
  color: var(--ink-dim);
}

.booking__features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 16px;
  height: 1px;
  background: var(--accent);
}

.booking__form {
  background: rgba(20, 18, 14, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  padding: clamp(24px, 4vw, 48px);
}

.field-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.field-group:has(.field:nth-child(3)) {
  grid-template-columns: 1.2fr 1fr 1fr;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field--full {
  grid-column: 1 / -1;
}

.field__label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line-strong);
  padding: 12px 0 14px;
  font-size: 16px;
  color: var(--ink);
  font-family: inherit;
  outline: none;
  transition: border-color 0.3s var(--ease);
  border-radius: 0;
}

.field textarea {
  resize: vertical;
  min-height: 60px;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-bottom-color: var(--accent);
}

.field select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, var(--ink-dim) 50%),
    linear-gradient(135deg, var(--ink-dim) 50%, transparent 50%);
  background-position: calc(100% - 12px) 50%, calc(100% - 7px) 50%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  padding-right: 28px;
  cursor: pointer;
}

.field select option {
  background: var(--bg-2);
  color: var(--ink);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 6px;
}

.chip {
  padding: 9px 17px;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink);
  transition: all 0.3s var(--ease);
}

.chip:hover {
  color: var(--ink);
  border-color: var(--ink-dim);
}

.chip.is-active {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.form-error {
  margin: 16px 0 0;
  padding: 12px 16px;
  border-left: 2px solid #d96e6e;
  background: rgba(217, 110, 110, 0.08);
  color: #f0c2c2;
  font-size: 13px;
}

.booking__actions {
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.booking__note {
  font-size: 13px;
  font-weight: 500;
  max-width: 300px;
  line-height: 1.5;
  color: var(--ink-dim);
}

.booking__success {
  text-align: center;
  padding: 40px 20px;
}

.booking__success h3 {
  font-family: var(--serif);
  font-size: 36px;
  margin: 16px 0 12px;
  color: var(--ink);
}

.booking__success p {
  color: var(--ink-dim);
  margin-bottom: 28px;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 980px) {
  .booking__inner {
    grid-template-columns: 1fr;
  }
  .booking__text {
    position: static;
  }
}

@media (max-width: 540px) {
  .field-group,
  .field-group:has(.field:nth-child(3)) {
    grid-template-columns: 1fr;
  }
}
</style>
