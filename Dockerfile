FROM node:14-alpine

# Create the app directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

ENV TITLE="Internal Redirect" \
    MESSAGE="You will be redirected to internal service which is available only from the internal network. Please enable VPN and click the link below to continue." \
    PARAM="redirect" \
    ALLOWED_URL_PATTERNS=".*"

# Start the app
CMD ["npm", "start"]
