# wherebnb

Wherebnb is a multi-service application which is containerized using Docker. Each service is defined in a Dockerfile and they are orchestrated using Docker Compose.


## Running the Application
To run this application, follow these steps:

1. Cloning the repository
  To pull the latest version of all submodules 
  ```sh
    git submodule update --remote --merge
  ```
  To clone all submodules locally
  ```sh
    git clone --recurse-submodules https://github.com/justinlzx/wherebnb /path/to/your/directory
  ```
  To allow the stripe webhook to work, tunnelling is required. The port can be any available port, in our case we use port 8000. The URL provided by ngrok must be use to create a webhook in Stripe as well.
    
      ngrok http <port>
  
  
2. Building and running the containers
  ```sh
    docker-compose up --build
  ```
  NOTE: running this application requires the use of an .env file  
  
3. Shutting down the application
  ```sh
    docker-compose down
  ```




