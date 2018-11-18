const {author, name: title, description, repository, version} = require('./../package.json')
const ejs                                                     = require('ejs')
const fs                                                      = require('fs')
const path                                                    = require('path')

ejs.renderFile(
  path.resolve(__dirname, './../index.ejs'),
  {
    author,
    description,
    repository,
    title,
    version,
  },
  {},
  (err, html) => {
    if (err) {
      console.error('HTML page generation failed', err)
      throw err
    } else {
      fs.writeFile(
        path.resolve(__dirname, './../dist/index.html'),
        html,
        err => {
          if (err) {
            console.error(`HTML page saving failed`, err)
            throw err
          } else {
            console.log('HTML page is generated')
          }
        },
      )
    }
  },
)
