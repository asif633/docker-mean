FROM node:10
WORKDIR /app
COPY ./package.json /app/
COPY . /app
RUN npm install

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "start"]