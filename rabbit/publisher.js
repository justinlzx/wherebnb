const dotenv = require('dotenv');
dotenv.config();

const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://localhost:${process.env.PORT}`, (err, conn) => {
    if(err){
        throw err;
    }
    conn.createChannel((err, channel) => {
        if(err){
            throw err;
        }
        let queueName = "notifQueue"
        let jsonMsg = {
                emailType: "bookingConfirmation",
                travelerEmail: process.env.TRAVELER_EMAIL,
                travelerName: "John",
                hostEmail: process.env.HOST_EMAIL,
                hostName: "Mary",
                bookingDates: "3 May",
                totalPrice: "400",
        }
        let message = JSON.stringify(jsonMsg);
        channel.assertQueue(queueName, {durable: true});
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(" [x] Sent %s", message);
    });

    setTimeout(() => {
        conn.close();
    }, 500);
});