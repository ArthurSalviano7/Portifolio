/* Inicializar i18n usado para internacionalização (en/pt) */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require('./locales/en/translation.json') },
    pt: { translation: require('./locales/pt/translation.json') }
  },
  lng: 'en', // Idioma padrão
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
