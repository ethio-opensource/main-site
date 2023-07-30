import { Redis } from 'ioredis';
import * as EmailValidator from 'email-validator';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!EmailValidator.validate(email)) return res.status(400).json({ error: 'invalid email' });

    const { REDIS_URI } = process.env;
    const { hostname: host } = new URL(REDIS_URI);
    console.log;
    const redis = new Redis(REDIS_URI, {
      tls: {
        host,
      },
    });
    try {
      await redis.sadd('subscribers', email);
      res.json({ msg: 'successfully added' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'unknown server error occurred' });
    }
  } else {
    res.json({ msg: 'unimplemented' });
  }
}
