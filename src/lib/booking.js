// Интеграция с виджетом бронирования Restoplace.
//
// Скрипт виджета (см. index.html) при загрузке создаёт скрытую кнопку
// #restoplace-btn с классом .restoplace-click-open и сам навешивает на неё
// обработчик открытия попапа. Виджет привязывает клики ОДИН раз при загрузке
// (querySelectorAll, без делегирования), поэтому навешивать класс на Vue-кнопки
// ненадёжно — вместо этого мы программно кликаем по его собственной кнопке.

const WIDGET_HASH = '3b826d74c0553cf1bbb7'

// Прямой адрес виджета — фолбэк и источник для встроенного iframe.
export const WIDGET_IFRAME_URL = `https://www.restoplace.ws/?address=${WIDGET_HASH}&iframe=1&source=${typeof location !== 'undefined' ? location.hostname : 'terrasa-iv.ru'}`

export function openBooking() {
  const btn = document.getElementById('restoplace-btn')
  if (btn) {
    btn.click()
    return
  }
  // Виджет ещё не успел загрузиться — открываем форму в новой вкладке.
  window.open(WIDGET_IFRAME_URL.replace('&iframe=1', ''), '_blank', 'noopener')
}
