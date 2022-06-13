import { GlyphsJsonInterface, GlyphInterface } from './lib/GlyphInterface'
import { CssInterface, RuleInterface } from './lib/CssInterface'

const css = require('css')

function init (data: string): GlyphsJsonInterface {
  const glyphs:GlyphsJsonInterface = { name: '', item: [] }

  const json = getJson(data)
  glyphs.name = getName(json)
  glyphs.item = getGlyphs(json)
  return (glyphs)
}

function getJson (data: string): CssInterface {
  return (css.parse(data))
}

function getName (data: CssInterface): string {
  for (let i:number = 0; i < data.stylesheet.rules.length; i++) {
    if (data.stylesheet.rules[i].type === 'font-face') {
      return data.stylesheet.rules[i].declarations[0].value.replace(/['"\s]/g, '')
    }
  }
  return ''
}

function getGlyphs (data: CssInterface): Array<GlyphInterface> {
  const glyphsList: Array<GlyphInterface> = []
  const glyphArray: Array<RuleInterface> = data.stylesheet.rules

  let x :number = 0

  for (let i = 0; i < glyphArray.length; i++) {
    if (glyphArray[i].type === 'rule' && (glyphArray[i].selectors.length === 1)) {
      const glyphName: RegExpMatchArray | null = glyphArray[i].selectors[0].match(/(-?[_a-zA-Z]+[_a-zA-Z0-9-]*):before/)
      const glyphValue: RegExpMatchArray | null = glyphArray[i].declarations[0].value.match(/^"\\(\w{4})"/)

      if ((glyphName !== null) && (glyphValue !== null)) {
        glyphsList[x] = {
          name: glyphName[1],
          unicode: glyphValue[1]
        }
        x++
      }
    }
  }

  return glyphsList
}

module.exports = {
  init,
  getJson,
  getName
}
