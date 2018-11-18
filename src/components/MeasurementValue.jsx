import React from 'react'
import { connect } from 'react-redux'
import measurementRoundTypeList from '@/consts/measurementRoundTypeList'

function MeasurementValue ({accuracy, name, value}) {
  const valueArr = Array.isArray(value)
                    ? value
                    : [value]

  const valueText = !accuracy && measurementRoundTypeList.includes(name)
                    ? valueArr.map(Math.round).join()
                    : valueArr.join()

  return (
    <span className='MeasurementValue'>
      {valueText}
    </span>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    accuracy: state.dataState.accuracy,
  }
}

export default connect(mapStateToProps)(MeasurementValue)
