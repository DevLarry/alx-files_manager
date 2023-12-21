import sha1 from 'sha1';
import db from '../utils/db';

export default class UsersController {
  // eslint-disable-next-line no-unused-vars
  static async postNew(req, res) {
    const { username, password } = req.body;
    const users = await db.usersCollection();
    const result = users.insertOne({ username, password: sha1(password) });
    res.json(result);
  }
}
