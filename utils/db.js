import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const HOST = process.env.DB_HOST || 'localhost';
    const PORT = process.env.DB_PORT || 27017;
    const DATABASE = process.env.DB_DATABASE || 'files_manager';
    const URI = `mongodb://${HOST}:${PORT}/${DATABASE}`;
    // this.isConnected = true;

    this.client = new MongoClient(URI, { useUnifiedTopology: true });
    this.client.connect((err) => {
      if (err) console.log('Database not connected');
      else console.log('Database connected');
    });
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }

  async usersCollection() {
    return this.client.db().collection('users');
  }

  async filesCollection() {
    return this.client.db().collection('files');
  }
}

export default new DBClient();
