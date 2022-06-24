import SparkPost from 'sparkpost';
import { SPARKPOST_KEY } from './constant';

const client = new SparkPost(SPARKPOST_KEY);

export default client;

type SendVerificationMail = {
  otp: string;
  address: string;
};

export const sendVerificationEmail = (params: SendVerificationMail) => {
  client.transmissions
    .send({
      options: {
        sandbox: false,
        transactional: true,
      },
      content: {
        from: 'support@sipr.rulasfia.tech',
        subject: 'MSLIS Email Verification',
        template_id: 'sipr-email-verification',
      },
      substitution_data: {
        code: params.otp,
      },
      recipients: [{ address: params.address }],
    })
    .then((data) => {
      console.log('email send successfully!');
      console.log({ maildata: data });
    })
    .catch((err) => {
      console.log('something went wrong');
      console.log({ mailerr: err });
    });
};
