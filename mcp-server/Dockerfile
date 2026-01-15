FROM node:22-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies directly since we are treating this as a standalone deployment
# and the package-lock.json is in the monorepo root which we don't want to copy entirely.
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
