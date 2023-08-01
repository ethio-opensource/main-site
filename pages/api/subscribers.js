import { Redis } from 'ioredis';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { REDIS_URI, NEXT_PUBLIC_SANITY_PROJECT_ID: AUTH } = process.env;
    const auth = req.headers.authorization;

    if (
      !(auth && auth.toLowerCase().startsWith('bearer ') && AUTH === auth.toLowerCase().slice(7))
    ) {
      return res
        .status(401)
        .json({ error: 'invalid credentials. be sure to include bearer credential' });
    }
    const { hostname: host } = new URL(REDIS_URI);

    const redis = new Redis(REDIS_URI, {
      tls: {
        host,
      },
    });

    try {
      const result = await redis.smembers('subscribers');
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'unknown server error occurred' });
    }
  } else {
    res.json({ msg: 'unimplemented' });
  }
}
