export const i18n = {
  defaultLocale: 'zh',
  locales: ['en', 'es', 'zh', 'ja', 'fr'],
} as const

export type Locale = typeof i18n['locales'][number]
