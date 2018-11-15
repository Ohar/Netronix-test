import DateTime from '@/components/DateTime'
import classNames from 'classnames'
import React from 'react'
import './styles.less'

export default function MeasurementTemperature ({measurement: {name, unit, measurements}}) {
  return (
    <section className={classNames(
      'MeasurementTemperature',
      {
        'MeasurementTemperature-empty': !measurements.length,
      },
    )}>
      <header className='MeasurementTemperature_header'>
        Temperature
      </header>
      <div className='MeasurementTemperature_body'>
        {
          measurements.length
          ? measurements.map(
            ([ts, value], i) => (
              <p key={i}>
                <DateTime ts={ts}/> {value} {unit}
              </p>
            ),
          )
          : 'No data :-('
        }
      </div>
    </section>
  )
}
