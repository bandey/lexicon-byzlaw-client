function delLastElemFromURL(url, count=1) {
  let i = 0;
  let to = url.length;
  while ((++i <= count) && (to > 0)) {
    to = url.lastIndexOf('/', to - 1);
  }
  if (to < 1) {
    return '/';
  }
  return url.substring(0, to);
}

export default delLastElemFromURL;
