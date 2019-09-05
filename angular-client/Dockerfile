FROM node:10
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli
COPY . /app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "start"]