# Use the official Kong image as the base image
FROM kong:latest
USER root
# Install bash
RUN apt-get update && apt-get install -y bash

# Set the environment variable for Kong
ENV KONG_DATABASE=off

# Copy your Kong configuration file into the Docker image
COPY . /etc/kong/

# Make sure your script is executable
RUN chmod +x ./etc/kong/kong.sh

# Expose the ports that Kong uses
EXPOSE 8000

# Start Kong when the Docker container starts
CMD [ "bash", "/etc/kong/kong.sh"]