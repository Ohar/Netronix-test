import {ACCURACY_TOGGLE} from '@/store/data/action-types'

export default function actionAccuracyToggle () {
  return dispatch => {
    dispatch({
      type: ACCURACY_TOGGLE,
    })
  }
}
