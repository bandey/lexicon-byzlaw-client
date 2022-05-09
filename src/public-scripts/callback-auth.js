window.onload = function () {
  var currentOrigin = window.location.protocol + '//' + window.location.host;
  if (window.opener) {
    window.opener.postMessage('doneAuth', currentOrigin);
    window.opener.focus();
    window.close();
  } else {
    window.location.replace(currentOrigin + '/auth/cabinet');
  }
};
