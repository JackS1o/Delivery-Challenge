FROM node:16.14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
