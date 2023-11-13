const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const connectToMongo = require('../db/mongoConnection');

async function parseAndSaveData(msg, db) {
  const regex = />DATA(\d),(\d+),(\d{12}),(\d);ID=(\w+)</;
  const match = msg.toString().match(regex);

  if (match) {
    const [_, type, protocolo, yymmddhhmmss, status, id] = match;
    const utc = `${yymmddhhmmss.substring(0, 4)}-${yymmddhhmmss.substring(4, 6)}-${yymmddhhmmss.substring(6, 8)} ${yymmddhhmmss.substring(8, 10)}:${yymmddhhmmss.substring(10, 12)}:${yymmddhhmmss.substring(12, 14)}`;
    
    const data = {
      type: parseInt(type),
      protocolo: parseInt(protocolo),
      utc: new Date(utc),
      status: parseInt(status),
      id: id
    };

    try {
      const collection = db.collection("dev_status");
      await collection.insertOne(data);
      console.log("Data inserted:", data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  } else {
    console.log("Invalid message format:", msg.toString());
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
