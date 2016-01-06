const React = require('react')
const Inspector = require('react-json-inspector')
require('react-json-inspector/json-inspector.css')
const Editor = require('./Editor')
const { Source, parse } = require('graphql/language')
const deepfilter = require('deep-filter')


// ----------------------------------------------------------------------------
// Utils
// ----------------------------------------------------------------------------
const isExpanded = keypath => /\.\d$/.test(keypath)

const omitLocation = ast => deepfilter(ast, (value, prop) => prop !== 'loc')

const parseSource = value => {
  try {
    const ast = parse(new Source(value))
    return { ast: omitLocation(ast), lastParseHadError: false }
  } catch (e) {
    console.log(e) // eslint-disable-line no-console
    return { lastParseHadError: true }
  }
}


// ----------------------------------------------------------------------------
// App
// ----------------------------------------------------------------------------
const App = React.createClass({
  getInitialState() {
    return {
      source: '',
      ast: {},
      lastParseHadError: false,
    }
  },
  componentWillMount() {
    this.handleChange('query { me }')
  },
  handleChange(source) {
    this.setState(
      Object.assign(
        {},
        { source },
        parseSource(source)
      )
    )
  },
  render() {
    return (
      <div className="layout">
        <div className="layout-heading">
          <p>GraphQL AST Visualizer</p>
          <hr/>
        </div>
        <div className="layout-body">
          <div className="layout-editor">
            <p>
              <span className="validity">
                {this.state.lastParseHadError ? '✘' : '✔'}
              </span>
              Source
            </p>
            <Editor
              source={this.state.source}
              handleChange={this.handleChange}
              isValid={!this.state.lastParseHadError}
            />
          </div>
          <div className="layout-tree">
            <p>AST</p>
            <Inspector
              data={this.state.ast}
              filterOptions={{ ignoreCase: true }}
              isExpanded={isExpanded}
            />
          </div>
        </div>
        <div className="layout-footer">
          <a href="https://github.com/dferber90" target="_blank">@dferber90</a>

          </div>
      </div>
    )
  },
})

module.exports = App
