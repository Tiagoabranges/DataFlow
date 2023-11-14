const dgram = require('dgram');
const client = dgram.createSocket('udp4');

function generatePacket() {
  const type = Math.random() > 0.5 ? 1 : 2;
  const protocolo = 66 + Math.floor(Math.random() * 3);
  const utc = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, '')
    .substring(0, 12);
  const status = Math.random() > 0.5 ? 1 : 0;
  const id = Math.random().toString(36).substring(2, 5);

  return `>DATA${type},${protocolo},${utc},${status};ID=${id}<`;
}

function sendPacket() {
  const packet = generatePacket();
  const message = Buffer.from(packet);
  client.send(message, 0, message.length, 41234, 'localhost', (err) => {
    if (err) {
      console.error('Error sending packet:', err);
      client.close();
    } else {
      console.log('Packet sent:', packet);
    }
  });
}

setInterval(sendPacket, 5000);
