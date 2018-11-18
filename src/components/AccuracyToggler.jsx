import actionAccuracyToggle from '@/store/data/actions/accuracy_toggle'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function AccuracyToggler ({accuracy, accuracyToggle}) {
  return (
    <section className='AccuracyToggler'>
      <p className='AccuracyToggler_item'>
        <input
          type='radio'
          id='accuracy_accurate'
          name='accuracy'
          value={true}
          checked={accuracy}
          onClick={accuracyToggle}
          className='AccuracyToggler_input'
        />
        <label
          htmlFor='accuracy_accurate'
          className='AccuracyToggler_label'
        >
          Show accurate values
        </label>
      </p>
      <p className='AccuracyToggler_item'>
        <input
          type='radio'
          id='accuracy_inaccurate'
          name='accuracy'
          value={false}
          checked={!accuracy}
          onClick={accuracyToggle}
          className='AccuracyToggler_input'
        />
        <label
          htmlFor='accuracy_inaccurate'
          className='AccuracyToggler_label'
        >
          Show inaccurate values
        </label>
      </p>
    </section>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    accuracy: state.dataState.accuracy,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      accuracyToggle: actionAccuracyToggle,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AccuracyToggler)
