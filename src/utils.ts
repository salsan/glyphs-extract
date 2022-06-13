// Original Source - https://stackoverflow.com/a/21648161/1501286
function hexEncode (unicode: string): string {
  let hex, i

  let result = ''
  for (i = 0; i < unicode.length; i++) {
    hex = unicode.charCodeAt(i).toString(16)
    result += ('000' + hex).slice(-4)
  }

  return result
}

module.exports = {
  hexEncode
}
