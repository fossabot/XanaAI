# Use the official Node.js image
FROM node:18

# Install jq
RUN apt-get update && apt-get install -y jq

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

EXPOSE 4003

RUN npm run build

# RUN chmod +x fetch_env_from_vault.sh

ARG ENV=dev

ENV ENV=$ENV

# Define runtime CMD
CMD ["npm", "run", "start:prod"]