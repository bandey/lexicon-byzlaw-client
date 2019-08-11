import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import RouteRoot from './route-root.js';

function Router() {
  return (
    <BrowserRouter>
      <RouteRoot />
    </BrowserRouter>
  );
};

export default Router;
