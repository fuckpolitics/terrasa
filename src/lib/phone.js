// Приводит ввод пользователя к российской маске телефона: +7 (XXX) XXX-XX-XX.
// Пользователю достаточно вводить только цифры — скобки, +7 и разделители
// подставляются автоматически.
export function formatRuPhone(raw) {
  let digits = String(raw || '').replace(/\D/g, '')
  if (!digits) return ''

  // Нормализуем код страны: 8… → 7…, «голый» номер (9…) → 7 9…
  if (digits[0] === '8') digits = '7' + digits.slice(1)
  else if (digits[0] !== '7') digits = '7' + digits
  digits = digits.slice(0, 11)

  const a = digits.slice(1, 4)
  const b = digits.slice(4, 7)
  const c = digits.slice(7, 9)
  const d = digits.slice(9, 11)

  let out = '+7'
  if (a) out += ' (' + a
  if (a.length === 3) out += ')'
  if (b) out += ' ' + b
  if (c) out += '-' + c
  if (d) out += '-' + d
  return out
}
