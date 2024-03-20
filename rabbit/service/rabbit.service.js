
// const dotenv = require('dotenv');
// dotenv.config();

import amqp from 'amqplib/callback_api.js';
// const amqp = require('amqplib/callback_api');

export function rabbitService(jsonMsg){
    amqp.connect('amqp://localhost:5672', (err, conn) => {
    if(err){
        throw err;
    }
    conn.createChannel((err, channel) => {
        if(err){
            throw err;
        }
        let queueName = "notifQueue"
        let message = JSON.stringify(jsonMsg);
        channel.assertQueue(queueName, {durable: true});
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(" [x] Sent %s", message);
    });

    setTimeout(() => {
        conn.close();
    }, 500);
});
}

