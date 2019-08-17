function delLastElemFromURL(url) {
  let to = url.lastIndexOf('/');
  if (to < 1) {
    return '/';
  }
  return url.substring(0, to);
}

export default delLastElemFromURL;
