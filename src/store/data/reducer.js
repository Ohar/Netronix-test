import * as actionTypes from '@/store/data/action-types'
import DEFAULT_STATE from '@/store/data/default_state'

export default function dataReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.ACCURACY_TOGGLE: {
      return {
        ...state,
        accuracy: !state.accuracy,
      }
    }

    case actionTypes.DATA_SET: {
      return {
        ...state,
        data: action.data,
      }
    }

    default:
      return state
  }
}
