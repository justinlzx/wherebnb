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
        channel.assertQueue(queueName, {durable: false});
        channel.consume(queueName, (msg) => {
            console.log(" [x] Received %s", msg.content.toString());
            channel.ack(msg);
        });
    });
});


