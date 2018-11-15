const SECOND = 1000

export default function formatDateTime (timestampSec) {
  return new Date(timestampSec * SECOND).toLocaleString()
}
