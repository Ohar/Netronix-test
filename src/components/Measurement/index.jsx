import DateTime from '@/components/DateTime'
import MeasurementValue from '@/components/MeasurementValue'
import classNames from 'classnames'
import React from 'react'
import './styles.less'

export default function Measurement ({measurement: {name, unit = '', measurements}}) {
  return (
    <section className={classNames(
      'Measurement',
      `Measurement-${name.replace(/[\s\.]+/g, '')}`,
      {
        'Measurement-empty': !measurements.length,
      },
    )}>
      <header className='Measurement_header'>
        {name}
      </header>
      <div className='Measurement_body'>
        {
          measurements.length
          ? measurements.map(
            ([ts, value], i) => (
              <p key={i}>
                <DateTime ts={ts}/> <MeasurementValue name={name} value={value}/> {unit}
              </p>
            ),
          )
          : (
            <p>
              No data :-(
            </p>
          )
        }
      </div>
    </section>
  )
}
