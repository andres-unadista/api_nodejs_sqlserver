import express from 'express'
import config from './config';

const app = express();

app.set('port', config.port || 2000)

export default app