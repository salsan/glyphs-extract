const assert = require('node:assert')
const fs = require('fs')
const svg = require('../src/svg')
const convert = require('../src/index')

const data = fs.readFileSync('./test/assets/Chess.svg', 'utf8')

describe('Function init()', function () {
  it('Pass data from File', function () {
    const result = svg.init(data)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})

describe('Convert Svg to Json', function () {
  it('Pass data from File', function () {
    const result = convert.toJson(data)
    console.log(result)
    assert.ok(typeof (result) === 'object', 'The value is not an object')
  })
})
