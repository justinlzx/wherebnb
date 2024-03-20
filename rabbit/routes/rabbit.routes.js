import express from 'express';
import {
    rabbitController, 
} from '../controller/rabbit.controller.js';


export const notifRoutes = express.Router();

notifRoutes.post('/', rabbitController) 