FROM node:20
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
COPY frontend/ ./frontend/
CMD ["node", "src/app.js"]