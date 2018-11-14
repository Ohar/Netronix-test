import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const {data} = this.props

    return (
      <section>
        App {data}
      </section>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    data: state.dataState.data
  }
}

export default connect(mapStateToProps)(App)
