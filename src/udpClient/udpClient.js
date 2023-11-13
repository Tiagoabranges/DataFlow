const dgram = require("dgram");
const fs = require("fs");
const client = dgram.createSocket("udp4");

function generatePacket() {
  const type = Math.random() > 0.5 ? 1 : 2;
  const protocolo = 66 + Math.floor(Math.random() * 3);
  const utc = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, "")
    .substring(0, 12);
  const status = Math.random() > 0.5 ? 1 : 0;
  const id = Math.random().toString(36).substring(2, 5);

  return `>DATA${type},${protocolo},${utc},${status};ID=${id}<`;
}

function savePacketToFile(packet) {
  const filePath = "./packets.json";
  fs.readFile(filePath, (err, data) => {
    let packets = [];
    if (!err && data.length) {
      packets = JSON.parse(data);
    }
    packets.push(packet);

    fs.writeFile(filePath, JSON.stringify(packets, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });
  });
}

function sendPacket() {
  const packet = generatePacket();
  const message = Buffer.from(packet);
  client.send(message, 0, message.length, 41234, "localhost", (err) => {
    if (err) {
      console.error("Error sending packet:", err);
      client.close();
    } else {
      console.log("Packet sent:", packet);
      savePacketToFile(packet);
    }
  });
}

setInterval(sendPacket, 5000);
