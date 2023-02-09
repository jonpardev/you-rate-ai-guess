import express from 'express';
import http from 'http';

import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { ORIGIN_URI, PORT } from './src/config/env.js';
import apiRoutes from './src/routes/api.routes.js';

const app = express();
const server = http.createServer(app);

/**
 * Middleware
 */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// morgan: to make logs
app.use(morgan('tiny'));

// cors: to set Cross-origin Resource Sharing policy
app.use(cors({
    origin: ORIGIN_URI,
    // credentials: true,
}));

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse requests of content-type: application/json
app.use(express.json());

/**
 * Routes
 */

app.use('/', apiRoutes);

server.listen(PORT, () => {
    console.info(`Server on http://localhost:${PORT}`);
})