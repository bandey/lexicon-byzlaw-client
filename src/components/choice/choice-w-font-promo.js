import React from 'react';

import Choice from './choice-view.js';
import FontPromoter from '../font-promoter/font-promoter.js';

function ChoiceWithFontPromo(props) {
  return (
    <React.Fragment>
      <Choice {...props} />
      <FontPromoter />
    </React.Fragment>
  );
};

export default ChoiceWithFontPromo;
