import i18next from 'i18next';
import i18nXHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

// List of allowed languages
const languages = ['en', 'ru'];

// Config for i18next.init()
const i18nConfig = {
  debug: false,

  whitelist: languages,
  cleanCode: true,
  load: 'languageOnly',
  fallbackLng: 'en',

  detection: {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lang',
    checkWhitelist: true,
  },

  interpolation: {
    escapeValue: false, // not needed for react
  },
};

// return Promise(t) translation function
function setupLanguage() {
  return i18next
    .use(LanguageDetector) // detect user language
    .use(i18nXHR) // load translations by XHR from /locales
    .use(initReactI18next) // pass the i18n instance to react-i18next
    .init(i18nConfig)
    .then((t) => {
      translateDocStuff(i18next.language, t);
      i18next.on('languageChanged', onLanguageChanged);
    });
};

function onLanguageChanged(lang) {
  translateDocStuff(lang, i18next.getFixedT(lang, 'translation'));
};

function translateDocStuff(lang, t) {
  document.documentElement.lang = lang;
  document.title = t('$Document title');
};

function extractLang(lang) {
  return lang.split('-')[0]; // split ru-RU
};

export default i18next;
export {
  languages,
  setupLanguage,
  extractLang,
};
