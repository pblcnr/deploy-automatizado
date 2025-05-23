FROM node:20
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
COPY frontend/ ./src/frontend/
CMD ["node", "src/app.js"]