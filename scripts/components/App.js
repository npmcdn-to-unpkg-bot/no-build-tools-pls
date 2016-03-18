define([
  'react',
  'components/Counter'
], (
  React,
  Counter
) => {
  const $ = React.createElement
  const App = () => $('div', null, $(Counter))

  return App
})
