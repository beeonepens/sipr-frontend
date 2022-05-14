import type { NextApiRequest, NextApiResponse } from 'next';

import { v5 as uuidv5 } from 'uuid';
import redis from '@utils/redis';
// import smtpTransport from '@utils/mailgun';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(500).json({ msg: 'method invalid' });
  if (!req.body) return res.status(400).json({ msg: 'email needed' });
  const { body } = req;

  /** check if current email already saved and have otp */
  const otp = await redis.get(body.email);
  if (otp) {
    const ttl = await redis.ttl(body.email);
    return res.status(200).json({ email: body.email, otp, ttl, status: 'old' });
  }

  /** generate new otp */
  const newOtp = uuidv5(`${body.email}_${Date.now()}`, uuidv5.URL);
  /** save email & otp to redis */
  await redis.set(body.email, newOtp);
  await redis.expire(body.email, 21600);

  /** kirim otp ke email user */
  /** -------------------- */

  // const mailOptions = {
  //   from: 'myemail@example.com',
  //   to: 'mk.asfian@gmail.com',
  //   subject: 'Mailgun Test',
  //   html: 'Hello with mailgun',
  // };

  // smtpTransport.sendMail(mailOptions, (error, response) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Successfully sent email.');
  //     console.log({ response });
  //   }
  // });

  return res
    .status(200)
    .json({ email: body.email, otp: newOtp, ttl: 21600, status: 'new' });
}
