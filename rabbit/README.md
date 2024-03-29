# Rabbit

## Getting Started

To get started with Rabbit, you'll need to pull the public Docker image onto your machine. Follow the steps below:

`docker pull rabbitmq`
`docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 rabbitmq:3.8.9`

To start the rabbit folder (aka rabbit-manager) 

`docker build -t rabbit-manager .`
`docker run -p 3006:3006 rabbit-manager`