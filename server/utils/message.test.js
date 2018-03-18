const expect = require('expect');

const { generateMessage } = require('./message.js');

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
