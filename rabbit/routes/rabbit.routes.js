import express from 'express';
import {
    rabbitController, 
} from '../controller/rabbit.controller.js';


export const rabbitRoutes = express.Router();

rabbitRoutes.post('/', rabbitController) 