import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

// eslint-disable-next-line import/prefer-default-export
export function getStatus(req, res) {
  res.json({
    redis: RedisClient.isAlive(),
    db: DBClient.isAlive(),
  });
}

export function getStats(req, res) {
  res.json({
    users: DBClient.nbUsers(),
    files: DBClient.nbFiles(),
  });
}
