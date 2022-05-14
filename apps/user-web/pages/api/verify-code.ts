import type { NextApiRequest, NextApiResponse } from 'next';

import redis from '@utils/redis';
// import smtpTransport from '@utils/mailgun';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'method invalid' });
  if (!req.body) return res.status(400).json({ msg: 'body needed' });
  const { body } = req;

  /** check if current email already saved and have otp */
  const otp = await redis.get(body.email);
  if (!otp) return res.status(400).json({ msg: 'invalid email' });

  /** if email available, otp available, and body.otp is same as otp in database, then verified */
  if (body.email && otp === body.otp) {
    await redis.del(body.email);
    return res.status(200).json({ msg: 'Verified' });
  }

  return res.status(400).json({ msg: 'invalid OTP Code' });
}
