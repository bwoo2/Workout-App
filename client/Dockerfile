# Use a Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# If you want to install `react-router-dom` specifically, you can add this line:
RUN npm install react-router-dom

# Bundle the app source inside Docker
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
