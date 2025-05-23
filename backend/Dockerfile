FROM node:20

WORKDIR /app

# Instala dependências
COPY backend/package*.json ./
RUN npm install

# Copia o código do backend e o script de espera do banco
COPY backend/ ./
COPY frontend/ ./src/frontend/

# Garante que o wait-port está instalado (caso não esteja no package.json)
RUN npm install wait-port

# Comando para aguardar o banco antes de iniciar o app
CMD ["sh", "-c", "node wait-for-db.js && node src/app.js"]