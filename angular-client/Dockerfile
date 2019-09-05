FROM node:10-alpine as buildContainer
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "start"]