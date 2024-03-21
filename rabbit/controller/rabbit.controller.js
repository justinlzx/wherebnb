import { rabbitService } from '../service/rabbit.service.js';
import Res from '../Res/response.js'




//gets the thing from endpoint, then sends to rabbit 
export const rabbitController = async (req, res) => {
    try {
        //get information to send through rabbit
        let payload = req.body
        let jsonMsg = {
            emailType: payload.emailType,
            travelerEmail: payload.travelerEmail,
            travelerName: payload.travelerName,
            hostEmail: payload.hostEmail,
            hostName: payload.hostName,
            bookingDates: payload.bookingDates,
            totalPrice: payload.totalPrice,
            country: payload.country,
            instructions: payload.instructions,
            propertyName: payload.propertyName
        } 

        //rabbit connection
        const result = await rabbitService(jsonMsg);
        return Res.successResponse(res, result);
    } catch (error) {
        return Res.errorResponse(res, error);
    }
}