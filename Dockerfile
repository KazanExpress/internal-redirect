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
    MESSAGE="You will be redirected to internal service which is available only from the internal network. Please enable VPN and press the button below to continue." \
    BUTTON="Follow redirect" \
    PARAM="redirect"

# Start the app
CMD ["npm", "start"]
