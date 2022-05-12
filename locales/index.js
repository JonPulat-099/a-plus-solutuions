import en from './en.json'
import ru from './ru.json'

const I18N = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  vueI18n: {
    defaultLocale: 'ru',
    messages: {
      en,
      ru,
    },
  },
}

export default I18N
