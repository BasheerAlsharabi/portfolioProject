import { i18n } from '@lingui/core'

type availableLanguages = 'ar' | 'en'
type LocaleInterface = {
  get availableLocales(): string[]
  locales: Record<'ar' | 'en', TLocale>
  set: (value: availableLanguages) => Promise<void>
  toggleLocales: () => void
  get value(): availableLanguages
}

type TLocale = {
  direction: 'ltr' | 'rtl'
  label: string
  locale: availableLanguages
}

export const locale: LocaleInterface = {
  get availableLocales() {
    return Object.keys(this.locales)
  },

  locales: {
    ar: {
      direction: 'rtl',
      label: 'العربية',
      locale: 'ar',
    },
    en: {
      direction: 'ltr',
      label: 'English',
      locale: 'en',
    },
  },
  async set(value) {
    const { messages } = await import(`../locales/${value}.po`)

    i18n.load(value, messages)
    i18n.activate(value)

    // change page direction
    document.documentElement.setAttribute('lang', value)
    document.documentElement.setAttribute('dir', this.locales[value].direction)

    // set localStorage
    localStorage.setItem('locale', value)
  },
  toggleLocales: () =>
    locale.value === 'ar' ? locale.set('en') : locale.set('ar'),
  get value() {
    return (localStorage.getItem('locale') ||
      // browser's primary language
      navigator.language.slice(0, 2) ||
      (navigator.language[0] || []).slice(0, 2)) as availableLanguages
  },
}

export { i18n } from '@lingui/core'
