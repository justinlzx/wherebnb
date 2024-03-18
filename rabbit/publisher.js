const { connect } = require('amqplib');

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    if(err){
        throw err;
    }
    conn.createChannel((err, channel) => {
        if(err){
            throw err;
        }
        let queueName = "technical"
        let message = "Hello World"
        channel.assertQueue(queueName, {durable: false});
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(" [x] Sent %s", message);
    });

    setTimeout(() => {
        conn.close();
    }, 500);
});