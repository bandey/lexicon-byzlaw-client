import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const i18nConfig = {
  debug: false,

  lng: 'cimode',

  resources: {},

  interpolation: {
    escapeValue: false, // not needed for react
  },
};

// return Promise(t) translation function
function setupLanguage() {
  return i18next
    .use(initReactI18next) // pass the i18n instance to react-i18next
    .init(i18nConfig);
};

export default i18next;
export {setupLanguage};
