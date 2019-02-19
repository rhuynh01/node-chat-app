var expect = require('expect')
var {generateMessage, generateLocationMessage} = require('./message')
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen'
    var text = 'Some message'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({
      from: from,
      text: text
    })
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct geolocation message object', () => {
    var from = 'rod'
    var latitude = 15
    var longtitude = 30
    var url = 'https://www.google.com/maps?q=15,30'
    var message = generateLocationMessage(from, latitude, longtitude)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({from, url})
  })
})