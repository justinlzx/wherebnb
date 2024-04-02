# Use the official Kong image as the base image
FROM kong:latest
# Set the environment variable for Kong
ENV KONG_DATABASE=off
# Copy your Kong configuration file into the Docker image
COPY kong.yaml /kong.yaml

# Expose the ports that Kong uses
EXPOSE 8000

# Start Kong when the Docker container starts
CMD ["kong", "start", "--vv", "-c", "/kong.yaml"]