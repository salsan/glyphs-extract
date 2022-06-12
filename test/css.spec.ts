import assert from 'node:assert'
// import * as assert from 'node:assert'
const fs = require('fs')
const css = require('../src/css')
const convert = require('../src/index')

const dataCss = fs.readFileSync('./test/assets/style.css', 'utf8')

describe('Function init()', function () {
  it('Pass data from File', function () {
    const result = css.init(dataCss)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})

describe('Convert Css to Json', function () {
  it('Pass data from File', function () {
    const result = convert(dataCss, { format: 'css' })
    console.log(result)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})
