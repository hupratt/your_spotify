import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import * as path from 'path';
import cors from 'cors';

import indexRouter from './routes/index';
import oauthRouter from './routes/oauth';
import spotifyRouter from './routes/spotify';
import globalRouter from './routes/global';
import artistRouter from './routes/artist';
import importRouter from './routes/importer';
import trackRouter from './routes/track';
import { get } from './tools/env';
const app = express();

app.options("*", cors({ origin: 'http://localhost:3001', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));

app.use(morgan('dev'));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/oauth', oauthRouter);
app.use('/spotify', spotifyRouter);
app.use('/global', globalRouter);
app.use('/artist', artistRouter);
app.use('/track', trackRouter);
app.use('/', importRouter);

export default app;
