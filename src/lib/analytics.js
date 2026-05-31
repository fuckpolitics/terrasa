// Безопасная отправка целей в Яндекс.Метрику.
// Если счётчик не подключён (YM_COUNTER_ID = 0) или скрипт не загрузился —
// вызов тихо игнорируется и сайт продолжает работать.
export function trackGoal(goal, params) {
  if (
    typeof window !== 'undefined' &&
    typeof window.ym === 'function' &&
    window.YM_COUNTER_ID
  ) {
    try {
      window.ym(window.YM_COUNTER_ID, 'reachGoal', goal, params)
    } catch (e) {
      /* no-op */
    }
  }
}
