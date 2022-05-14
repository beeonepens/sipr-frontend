import formData from 'form-data';
import MailGun from 'mailgun.js';
import nodemailer from 'nodemailer';
import nmg from 'nodemailer-mailgun-transport';

export const MAILGUN_DOMAIN =
  'https://api.mailgun.net/v3/sandboxb31913c969f14ec49b56cfbf7f8e1d42.mailgun.org';
const API_KEY = 'ee44d2027fb55abb526cc0a800c40e51-100b5c8d-380b44e0';

const mailgunAuth = {
  auth: {
    api_key: API_KEY,
    domain: MAILGUN_DOMAIN,
  },
};

const smtpTransport = nodemailer.createTransport(nmg(mailgunAuth));

export default smtpTransport;
