import React from 'react'

export default function MeasurementBattVoltage ({measurement}) {
  return (
    <section className='MeasurementBattVoltage'>
      MeasurementBattVoltage
      <br/>
      {JSON.stringify(measurement)}
    </section>
  )
}
