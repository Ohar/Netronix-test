import MeasurementCommon from '@/components/MeasurementCommon'
import MeasurementUnknown from '@/components/MeasurementUnknown'
import React from 'react'

export default function Measurement ({measurement}) {
  let ViewComponent

  switch (measurement.name) {
    case 'Batt. Voltage':
    case 'Location':
    case 'Pressure':
    case 'PM1':
    case 'Serial':
    case 'Temperature':
      ViewComponent = MeasurementCommon
      break

    default:
      ViewComponent = MeasurementUnknown
  }

  return <ViewComponent measurement={measurement}/>
}
