import React from 'react';
import ReactDOM from 'react-dom';

import {setupLanguage} from './i18n/i18n.js';
import App from './components/app/app.js';

setupLanguage();
ReactDOM.render(<App />, document.getElementById('app'));
