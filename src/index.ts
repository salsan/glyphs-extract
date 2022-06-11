import { XmlInterface } from './lib/XmlInterface'
import { GlyphsJsonInterface } from './lib/GlyphInterface'
import { OptionsInterface } from './lib/OptionsInterface'

module.exports = function toJson (value: XmlInterface, options: OptionsInterface): GlyphsJsonInterface {
  let glyph

  switch (options.format) {
    case 'css' :
      glyph = require('./css')
      break
    case 'svg' :
      glyph = require('./svg')
      break
  }

  return glyph.init(value)
}
