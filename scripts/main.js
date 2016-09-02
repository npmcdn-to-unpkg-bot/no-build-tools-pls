require.config({
  paths: {
    'react'     : 'https://unpkg.com/react@0.14.7/dist/react.min',
    'react-dom' : 'https://unpkg.com/react-dom@0.14.7/dist/react-dom.min',
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
