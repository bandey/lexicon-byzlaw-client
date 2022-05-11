import delLastElemFromURL from './del-last-elem-from-url.js';

it('process x1 empty url', () => {
  expect(delLastElemFromURL('')).toEqual('/');
});

it('process x1 url /', () => {
  expect(delLastElemFromURL('/')).toEqual('/');
});

it('process x1 url /ab', () => {
  expect(delLastElemFromURL('/ab')).toEqual('/');
});

it('process x1 url /ab/cd', () => {
  expect(delLastElemFromURL('/ab/cd')).toEqual('/ab');
});

it('process x1 url /ab/cd/ef', () => {
  expect(delLastElemFromURL('/ab/cd/ef')).toEqual('/ab/cd');
});

it('process x2 empty url', () => {
  expect(delLastElemFromURL('', 2)).toEqual('/');
});

it('process x2 url /', () => {
  expect(delLastElemFromURL('/', 2)).toEqual('/');
});

it('process x2 url /ab', () => {
  expect(delLastElemFromURL('/ab', 2)).toEqual('/');
});

it('process x2 url /ab/cd', () => {
  expect(delLastElemFromURL('/ab/cd', 2)).toEqual('/');
});

it('process x2 url /ab/cd/ef', () => {
  expect(delLastElemFromURL('/ab/cd/ef', 2)).toEqual('/ab');
});

it('process x3 url /ab/cd/ef', () => {
  expect(delLastElemFromURL('/ab/cd/ef', 3)).toEqual('/');
});

it('process x3 url /ab/cd/ef/gh', () => {
  expect(delLastElemFromURL('/ab/cd/ef/gh', 3)).toEqual('/ab');
});
