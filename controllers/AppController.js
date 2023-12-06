import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

export default class AppController {
  static async getStatus(req, res) {
    res.status(200).json({
      redis: await RedisClient.isAlive(),
      db: await DBClient.isAlive(),
    });
  }

  static async getStats(req, res) {
    res.status(200).json({
      users: await DBClient.nbUsers(),
      files: await DBClient.nbFiles(),
    });
  }
}
