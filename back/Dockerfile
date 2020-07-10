# Base Node.js image
FROM node:12
# Create AWS Batch Job Work Directory
WORKDIR /usr/src/app
# Copy Package.json file
COPY package.json /usr/src/app
# Install AWS Batch Job Dependencies
RUN npm install
# Bundle AWS Batch Job Source
COPY . /usr/src/app
# Run AWS Batch Job
CMD [ "node", "app" ]