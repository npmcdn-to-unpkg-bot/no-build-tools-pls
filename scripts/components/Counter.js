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
        null,
        $(
          'button',
          { onClick : this.handleClickDecrement },
          '-'
        ),
        this.state.count,
        $(
          'button',
          { onClick : this.handleClickIncrement },
          '+'
        )
      )
    }
  })

  return Counter
})
