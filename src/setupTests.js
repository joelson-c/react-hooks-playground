// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// react-hook-form can't be tested in jsdom environment without this dependency
if (typeof window != 'undefined') {
  require('mutationobserver-shim');
}

// Enable http layer testing
if (typeof window == 'undefined') {
  const fetch = require('node-fetch');
  global.fetch = fetch;
}
