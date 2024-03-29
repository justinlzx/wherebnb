# Use the official Kong image as the base image
FROM kong:latest

# Copy your Kong configuration file into the Docker image
COPY kong.conf /etc/kong/kong.conf

# Expose the ports that Kong uses
EXPOSE 8000 8443 8001 8444

# Start Kong when the Docker container starts
CMD ["kong", "start", "--vv"]