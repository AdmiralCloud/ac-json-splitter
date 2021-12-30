
const splitter = () => {

  const split = (json, options = {}) => {
    let size = options.size || 262144 // 256kb
    let chunks = []
    let chunk = {}
    for (let key in json) {
      let value = json[key]
      // current size of chunk
      let cl = JSON.stringify(chunk).length
      
      // size for new property
      let test = {}
      test[key] = value
      let l = JSON.stringify(test).length

      console.log('%s | %s | Size %s', key, value, l)
      if ((cl + l) > size) {
        chunks.push(chunk)
        chunk = {}
      }
      chunk[key] = value
    }
    // final chunk
    chunks.push(chunk)

    return chunks
  }

  return {
    split
  }
}

module.exports = splitter()