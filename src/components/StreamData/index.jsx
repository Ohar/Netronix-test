import StreamReader from '@/classes/StreamReader'
import Measurement from '@/components/Measurement'
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
    const {measurementList} = this.props

    return (
      <section className='StreamData'>
        {
          measurementList.length
          ? (
            <ul className='StreamData_list'>
              {
                measurementList.map(
                  measurement => (
                    <li
                      className='StreamData_item'
                      key={measurement._id}
                    >
                      <Measurement measurement={measurement}/>
                    </li>
                  )
                )
              }
            </ul>
          )
          : 'No data :-('
        }
      </section>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    measurementList: state.dataState.data,
  }
}

export default connect(mapStateToProps)(StreamData)
