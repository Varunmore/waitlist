# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the build folder into the Nginx server's public folder
COPY build/ /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
