# apps/frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Копируем все monorepo зависимости
COPY ../../package.json ../../package-lock.json ./
COPY ../../apps/frontend ./apps/frontend
COPY ../../packages ./packages
COPY ../../turbo.json ./

# Устанавливаем зависимости
RUN npm install

# Собираем фронт
RUN npm run build --workspace=apps/frontend

# Запуск
EXPOSE 3000
CMD ["npm", "run", "--workspace=apps/frontend", "start"]
