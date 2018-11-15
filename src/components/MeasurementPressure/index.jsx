import React from 'react'

export default function MeasurementPressure ({measurement}) {
  return (
    <section className='MeasurementPressure'>
      MeasurementPressure
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
