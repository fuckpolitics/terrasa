import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Сайт обслуживается с корня кастомного домена (terrasa-iv.ru),
  // поэтому base — `/`. Переменная VITE_BASE_PATH оставлена на случай
  // деплоя по адресу username.github.io/<repo-name>/.
  base: process.env.VITE_BASE_PATH || '/',
})
