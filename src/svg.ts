import { GlyphsJsonInterface, GlyphInterface } from './lib/GlyphInterface'
import { XmlGlyphInterface, XmlInterface } from './lib/XmlInterface'
const converter = require('xml-js')

function init (data: string): GlyphsJsonInterface {
  const glyphs:GlyphsJsonInterface = { name: '', item: [] }

  const json = getJson(data)
  glyphs.name = getName(json)
  glyphs.item = getGlyphs(json)
  return (glyphs)
}

function getJson (data: string) {
  const options = { ignoreComment: true, compact: true }

  return (converter.xml2js(data, options))
}

function getName (data: XmlInterface): string {
  return data.svg.defs.font._attributes.id
}

function getGlyphs (data: XmlInterface): Array<GlyphInterface> {
  const glyphsList: Array<GlyphInterface> = []
  const glyphArray: Array<XmlGlyphInterface> = data.svg.defs.font.glyph

  let x :number = 0

  for (let i = 0; i < glyphArray.length; i++) {
    if (glyphArray[i]?._attributes['glyph-name'] !== undefined) {
      glyphsList[x] = {
        name: glyphArray[i]._attributes['glyph-name'],
        unicode: glyphArray[i]._attributes.unicode,
        path: glyphArray[i]._attributes.d
      }
      x++
    }
  }

  return glyphsList
}

module.exports = {
  init,
  getJson,
  getName
}
