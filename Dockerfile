FROM nginx:alpine

# Copy the static website files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 (internal to the container)
EXPOSE 80
