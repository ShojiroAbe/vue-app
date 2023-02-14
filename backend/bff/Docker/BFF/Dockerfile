# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app/backend

RUN apk update

# Copy the source code
COPY . .

# Compile TypeScript
# RUN npm run build

# Expose the port
# EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]
