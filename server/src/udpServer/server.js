const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const connectToMongo = require('../db/mongoConnection');
const fs = require('fs');
const path = './data.json';

async function parseAndSaveData(msg, db) {
  const regex =
    />DATA(\d),(\d+),(\d{4}\d{2}\d{2}\d{2}\d{2}\d{2}),(\d);ID=(\w{3})</;

  const match = msg.toString().match(regex);

  if (match) {
    const [_, type, protocolo, yyyymmddhhmmss, status, id] = match;
    const utc = `${yyyymmddhhmmss.substring(0, 4)}-${yyyymmddhhmmss.substring(
      4,
      6,
    )}-${yyyymmddhhmmss.substring(6, 8)} ${yyyymmddhhmmss.substring(
      8,
      10,
    )}:${yyyymmddhhmmss.substring(10, 12)}:${yyyymmddhhmmss.substring(12, 14)}`;

    const data = {
      type: parseInt(type),
      protocolo: parseInt(protocolo),
      utc: utc,
      status: parseInt(status),
      id: id,
    };

    try {
      const collection = db.collection('dev_status');
      await collection.insertOne(data);
      console.log('Data inserted:', data);
      fs.readFile(path, (err, fileData) => {
        let packets = err || !fileData.length ? [] : JSON.parse(fileData);
        packets.push(data);

        fs.writeFile(path, JSON.stringify(packets, null, 2), (err) => {
          if (err) console.error('Error writing to file:', err);
        });
      });
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  } else {
    console.log('Invalid message format:', msg.toString());
  }
}

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', async (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  const db = await connectToMongo();
  await parseAndSaveData(msg, db);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
