import React from 'react'

export default function MeasurementSerial ({measurement}) {
  return (
    <section className='MeasurementSerial'>
      MeasurementSerial
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
