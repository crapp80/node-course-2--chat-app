const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Admin';
    const text = 'Testing generateMessage';
    const message = generateMessage(from, text);

    expect(message).toMatchObject({
      from,
      text,
      createdAt: expect.any(Number),
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Admin';
    const latitude = 1234;
    const longitude = 5678;
    const url = 'https://www.google.com/maps?q=1234,5678';
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({
      from,
      url,
      createdAt: expect.any(Number),
    });
  });
});
