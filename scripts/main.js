require.config({
  paths: {
    'react'     : 'https://fb.me/react-0.14.7',
    'react-dom' : 'https://fb.me/react-dom-0.14.7',
  },
})

require([
  'react',
  'react-dom',
  'components/App'
], (
  React,
  ReactDOM,
  App
) => {
  const $ = React.createElement
  ReactDOM.render($(App), document.querySelector('#root'))
})
