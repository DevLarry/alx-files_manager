import { createClient } from "redis";

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client
      .on("error", (err) => {
        console.error(err.message);
      })
      .connect();
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    return await this.client.hget(key);
  }

  async set(key, value, duration) {
    await this.client.hset(key, value);
    if (duration) {
      setTimeout(() => {
        this.client.hdel(key);
      }, duration * 1000);
    }
  }

  del(key){
    this.client.hdel(key)
  }
}

export default RedisClient
