import { rabbitService } from '../service/rabbit.service.js';
import Res from '../Res/response.js'

export const rabbitController = async (req, res) => {
    try {
        const result = await rabbitService();
        res.status(200).send(result);
    } catch (error) {
        return Res.errorResponse(res, error);
    }
}