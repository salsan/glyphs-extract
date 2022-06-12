import assert from 'node:assert'
const fs = require('fs')
const svg = require('../src/svg')
const convert = require('../src/index')

const dataSvg = fs.readFileSync('./test/assets/fonts/Chess.svg', 'utf8')

describe('Function init()', function () {
  it('Pass data from File', function () {
    const result = svg.init(dataSvg)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})

describe('Convert Svg to Json', function () {
  it('Pass data from File', function () {
    const result = convert(dataSvg, { format: 'svg' })
    console.log(result)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})
