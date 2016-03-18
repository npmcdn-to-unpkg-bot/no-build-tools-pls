define([
  'react',
], (
  React
) => {
  const $ = React.createElement
  const Counter = React.createClass({
    getInitialState: () => ({ count : 0 }),

    handleClickIncrement() {
      this.setState({
        count : this.state.count + 1,
      })
    },

    handleClickDecrement() {
      this.setState({
        count : this.state.count - 1,
      })
    },

    render() {
      return $(
        'div',
        { className : 'Counter' },
        $('button', { onClick : this.handleClickDecrement }, '-'),
        $('div', null, this.state.count),
        $('button', { onClick : this.handleClickIncrement }, '+')
      )
    }
  })

  return Counter
})
