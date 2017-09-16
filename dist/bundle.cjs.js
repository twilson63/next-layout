'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Head = _interopDefault(require('next/head'));
var React = _interopDefault(require('react'));

var index = (function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return React.createElement(
    'div',
    null,
    React.createElement(
      Head,
      null,
      React.createElement(
        'title',
        null,
        title
      ),
      React.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
      React.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons' }),
      React.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
        rel: 'stylesheet'
      }),
      React.createElement(
        'style',
        null,
        '\n          body {\n            font-family: roboto;\n          }\n        '
      )
    ),
    children
  );
});

module.exports = index;
