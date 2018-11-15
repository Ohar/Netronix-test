import STREAM_URL from '@/consts/STREAM_URL'
import store from '@/store'
import actionDataSet from '@/store/data/actions/data-set'
import DATA_DEFAULT_STATE from '@/store/data/default_state'

class StreamReader {
  constructor () {
    this.onMsg  = this.onMsg.bind(this)
    this.stream = null
  }

  start () {
    this.stream = new EventSource(STREAM_URL)

    this.stream.onmessage = this.onMsg
  }

  stop () {
    if (this.stream) {
      this.stream.close()
      this.stream.onmessage = null
      this.stream = null
    }
  }

  onMsg ({data}) {
    let parsedData = DATA_DEFAULT_STATE.data

    try {
      parsedData = JSON.parse(data)
    } catch (err) {
      console.error('Error', err)
    }

    store.dispatch(actionDataSet(parsedData))
  }
}

export default new StreamReader()
