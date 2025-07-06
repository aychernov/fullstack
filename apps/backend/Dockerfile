# apps/backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY ../../package.json ../../package-lock.json ./
COPY ../../apps/backend ./apps/backend
COPY ../../packages ./packages
COPY ../../turbo.json ./

RUN npm install

EXPOSE 5005
CMD ["npm", "run", "--workspace=apps/backend", "start"]
