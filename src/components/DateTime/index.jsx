import React from 'react'

const SECOND = 1000

export default function DateTime ({ts}) {
  const date  = new Date(ts * SECOND)

  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleString()}
    </time>
  )
}
