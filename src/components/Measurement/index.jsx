import BattVoltage from '@/components/MeasurementBattVoltage'
import MeasurementLocation from '@/components/MeasurementLocation'
import MeasurementPM1 from '@/components/MeasurementPM1'
import MeasurementPressure from '@/components/MeasurementPressure'
import MeasurementSerial from '@/components/MeasurementSerial'
import MeasurementUnknown from '@/components/MeasurementUnknown'
import Temperature from '@/components/MeasurementTemperature'
import React from 'react'

export default function Measurement ({measurement}) {
  let ViewComponent

  switch (measurement.name) {
    case 'Batt. Voltage':
      ViewComponent = BattVoltage
      break

    case 'Location':
      ViewComponent = MeasurementLocation
      break

    case 'Temperature':
      ViewComponent = Temperature
      break

    case 'PM1':
      ViewComponent = MeasurementPM1
      break

    case 'Pressure':
      ViewComponent = MeasurementPressure
      break

    case 'Serial':
      ViewComponent = MeasurementSerial
      break

    default:
      ViewComponent = MeasurementUnknown
  }

  return <ViewComponent measurement={measurement}/>
}
