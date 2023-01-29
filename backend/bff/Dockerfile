# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app/backend

RUN [ "yarn", "install", "--rm" ]

# Copy the source code
COPY . .
RUN apk update

# Compile TypeScript
# RUN npm run build

# Expose the port
# EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]
