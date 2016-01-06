const React = require('react')

const Editor = React.createClass({
  propTypes: {
    handleChange: React.PropTypes.func,
    isValid: React.PropTypes.bool,
    source: React.PropTypes.string,
  },
  handleChange({ target: { value } }) {
    this.props.handleChange(value)
  },
  render() {
    return (
      <textarea
        value={this.props.source}
        onChange={this.handleChange}
        className={this.props.isValid ? 'editor' : 'editor error'}
      />
    )
  },
})

module.exports = Editor
