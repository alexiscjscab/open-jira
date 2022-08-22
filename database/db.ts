import mongoose from "mongoose";

/*
    Connection:
    0 = disconnected
    1 = connected
    2 = connecting
    3 = disconnecting
*/

const mongooConnection = {
  isConnected: 0,
};

const MONGO_URL =
  "mongodb+srv://alexis:alexis09@open-jira-db.rlued81.mongodb.net/?retryWrites=true&w=majority";

export const connect = async () => {
  if (mongooConnection.isConnected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if(mongooConnection.isConnected === 1) {
      console.log('Usando conexion anterior')
      return
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(MONGO_URL);

  mongooConnection.isConnected = 1;
  console.log('Conectado a MongoDB', MONGO_URL)
};


export const disconnect = async() => {
  if (mongooConnection.isConnected === 0) return;
  await mongoose.disconnect()
}