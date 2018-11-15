import DateTime from '@/components/DateTime'
import classNames from 'classnames'
import React from 'react'
import './styles.less'

export default function MeasurementCommon ({measurement: {name, unit = '', measurements}}) {
  return (
    <section className={classNames(
      'MeasurementCommon',
      `MeasurementCommon-${name.replace(/[\s\.]+/g, '')}`,
      {
        'MeasurementCommon-empty': !measurements.length,
      },
    )}>
      <header className='MeasurementCommon_header'>
        {name}
      </header>
      <div className='MeasurementCommon_body'>
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
