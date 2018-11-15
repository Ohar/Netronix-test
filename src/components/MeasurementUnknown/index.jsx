import React from 'react'

export default function MeasurementUnknown ({measurement}) {
  return (
    <section className='MeasurementUnknown'>
      Unknown Measurement
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
