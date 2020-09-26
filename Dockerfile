FROM node

# Create app directory
WORKDIR /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app

EXPOSE 3030
CMD [ "yarn", "start" ]
