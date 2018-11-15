import StreamReader from '@/classes/StreamReader'
import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'

class StreamData extends Component {
  componentDidMount () {
    StreamReader.start()
  }

  componentWillUnmount () {
    StreamReader.stop()
  }

  render () {
    const {data} = this.props

    console.info('data', data) // eslint-disable-line no-console

    return (
      <section className='StreamData'>
        StreamData
        <br/>
        {JSON.stringify(data)}
      </section>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    data: state.dataState.data,
  }
}

export default connect(mapStateToProps)(StreamData)
