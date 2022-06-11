import { XmlInterface } from './lib/XmlInterface'
import { GlyphsJsonInterface } from './lib/GlyphInterface'
const svg = require('./svg')

function toJson (value :XmlInterface) :GlyphsJsonInterface {
  return svg.init(value)
}

module.exports = {
  toJson
}
