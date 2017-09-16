(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('next/head'), require('react')) :
	typeof define === 'function' && define.amd ? define(['next/head', 'react'], factory) :
	(global['next-layout'] = factory(global.Head,global.React));
}(this, (function (Head,React) { 'use strict';

Head = Head && Head.hasOwnProperty('default') ? Head['default'] : Head;
React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

return index;

})));
