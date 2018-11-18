import DateTime from '@/components/DateTime'
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
            ([ts, value], i) => {
              const valueText = Array.isArray(value)
                                ? value.join()
                                : value

              return (
                <p key={i}>
                  <DateTime ts={ts}/> {valueText} {unit}
                </p>
              )
            },
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
