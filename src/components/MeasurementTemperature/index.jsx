import React from 'react'

export default function MeasurementTemperature ({measurement}) {
  return (
    <section className='MeasurementTemperature'>
      MeasurementTemperature
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
