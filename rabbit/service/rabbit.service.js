import amqp from 'amqplib/callback_api.js';

export function rabbitService(jsonMsg){
    amqp.connect(`amqp://${process.env.RABBIT_HOST}:5672`, (err, conn) => {
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
        channel.sendToQueue(queueName, Buffer.from(message), { persistent: true });
        console.log(" [x] Sent %s", message);
    });

    setTimeout(() => {
        conn.close();
    }, 500);
});
}

