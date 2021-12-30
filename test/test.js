const expect = require('expect')
const acjsplit = require('../index')

const { rword } = require('rword')
const prop1 = rword.generate(1)
const prop10 = rword.generate(10)

const json = {
  payload1: prop1,
  payload2: prop10.join(' ')
}

describe('Compare values', () => {
  it('JSON should remain intact', () => {
    let test =  acjsplit.split(json)
    expect(test[0]).toEqual(json)
  })

  it('Split JSON at size 32', () => {
    let test =  acjsplit.split(json, { size: 32 })
    expect(test[0]).toEqual({ payload1: json.payload1 })
    expect(test[1]).toEqual({ payload2: json.payload2 })
  })
})
