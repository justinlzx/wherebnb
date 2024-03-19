const { connect } = require('amqplib');

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', (err, conn) => {
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
                travelerEmail: ,
                travelerName: "John",
                hostEmail: "host@gmail.com",
                hostName: "Mary",
                bookingDates: "3 May",
                totalPrice: "400",
        }
        let message = "Can i send json text"
        channel.assertQueue(queueName, {durable: false});
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(" [x] Sent %s", message);
    });

    setTimeout(() => {
        conn.close();
    }, 500);
});