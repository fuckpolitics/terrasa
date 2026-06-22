import site from '../content/site.json'

export const contacts = site.contacts

// tel: ссылка из отформатированного номера (оставляем только цифры и ведущий +).
export function telHref(phone) {
  if (!phone) return ''
  const digits = String(phone).replace(/[^\d+]/g, '')
  return `tel:${digits}`
}
