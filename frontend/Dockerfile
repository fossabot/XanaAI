# Use Node.js official base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY postcss.config.mjs ./
RUN npm install

# Copy entire source code
COPY . .

# Set dev as the default environment
ARG ENV=dev

# Conditionally copy the correct environment file based on ENV
RUN if [ "$ENV" = "dev" ]; then \
    cp .env .env.local; \
  else \
    cp .env.production .env.local; \
  fi

# Build the Next.js app
#RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3050

# Run the build (always)
RUN npm run build

# Start the application (production start command)
CMD ["npm", "run", "start"]