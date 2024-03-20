import express from 'express';
import { rabbitRoutes } from './rabbit.routes.js';



export const routes = express.Router();

routes.use('/rabbit', notifRoutes)