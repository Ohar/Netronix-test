import MeasurementCommon from '@/components/MeasurementCommon'
import MeasurementLocation from '@/components/MeasurementLocation'
import MeasurementUnknown from '@/components/MeasurementUnknown'
import React from 'react'

export default function Measurement ({measurement}) {
  let ViewComponent

  switch (measurement.name) {
    case 'Location':
      ViewComponent = MeasurementLocation
      break

    case 'Batt. Voltage':
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
