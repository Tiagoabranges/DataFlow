const dgram = require('dgram');
const client = dgram.createSocket('udp4');

function generatePacket() {
  const type = Math.random() > 0.5 ? 1 : 2;
  const protocolo = 66 + Math.floor(Math.random() * 3);
  const now = new Date();
  const utc = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now
    .getHours()
    .toString()
    .padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
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
