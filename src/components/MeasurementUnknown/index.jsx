import React from 'react'

export default function MeasurementUnknown ({measurement}) {
  return (
    <section className='MeasurementUnknown'>
      MeasurementUnknown
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
