import React from 'react'

export default function MeasurementLocation ({measurement}) {
  return (
    <section className='MeasurementLocation'>
      MeasurementLocation
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
