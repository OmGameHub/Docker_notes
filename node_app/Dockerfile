# use an official Node.js runtime as a parent image
FROM node:22-alpine

# set the working directory inside the container
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code to the working directory
COPY . .

CMD ["npm", "start"]