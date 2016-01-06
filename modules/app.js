const React = require('react')
const { render } = require('react-dom')
const App = require('./components/App')
require('./style.css')

render(<App/>, document.getElementById('app'))
