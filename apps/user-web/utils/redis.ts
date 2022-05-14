import Redis from 'ioredis';
import { REDIS_URL } from './constant';

const redis = new Redis(REDIS_URL);

export default redis;
