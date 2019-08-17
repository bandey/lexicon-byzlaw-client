import delLastElemFromURL from './del-last-elem-from-url.js';

it('process empty url', () => {
  expect(delLastElemFromURL('')).toEqual('/');
});

it('process url /', () => {
  expect(delLastElemFromURL('/')).toEqual('/');
});

it('process url /ab', () => {
  expect(delLastElemFromURL('/ab')).toEqual('/');
});

it('process url /ab/cd', () => {
  expect(delLastElemFromURL('/ab/cd')).toEqual('/ab');
});

it('process url /ab/cd/ef', () => {
  expect(delLastElemFromURL('/ab/cd/ef')).toEqual('/ab/cd');
});
