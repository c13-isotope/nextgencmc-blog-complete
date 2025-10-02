FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies (use npm install instead of npm ci)
RUN npm install

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start command
CMD ["npm", "run", "serve"]
