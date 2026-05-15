import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // На GitHub Pages сайт лежит по адресу username.github.io/<repo-name>/,
  // поэтому base нужно ставить в `/<repo-name>/`. Workflow ниже подставляет
  // имя репозитория автоматически через VITE_BASE_PATH.
  base: process.env.VITE_BASE_PATH || '/',
})
