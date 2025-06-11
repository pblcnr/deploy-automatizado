# Deploy Automatizado de Aplicação CRUD

## Descrição

Este projeto consiste em uma aplicação web full stack com backend em Node.js/Express, frontend em HTML/CSS/JS puro e banco de dados PostgreSQL.  
O deploy é totalmente automatizado utilizando Docker, Docker Compose, GitHub Actions e SonarQube para análise de qualidade de código.

---

## Funcionalidades

- CRUD completo de usuários (Create, Read, Update, Delete)
- Interface gráfica responsiva e centralizada
- Integração com banco de dados PostgreSQL em container separado
- Deploy automatizado em servidor remoto via GitHub Actions
- Análise de qualidade de código com SonarQube (pipeline só faz deploy se aprovado)
- Imagens Docker publicadas no Docker Hub

---

## Estrutura do Projeto

```
deploy-automatizado/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── ...
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── docker-compose.yml
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Como funciona o Deploy Automatizado

1. **Build e Push da Imagem:**  
   O GitHub Actions faz o build da imagem Docker do backend (incluindo o frontend) e faz push para o Docker Hub.

2. **Cópia do docker-compose.yml:**  
   O arquivo `docker-compose.yml` é copiado para o servidor remoto via SSH.

3. **Análise SonarQube:**  
   O pipeline acessa o servidor remoto, sobe um container SonarQube temporário, executa a análise de código e só prossegue se aprovado.

4. **Deploy:**  
   O pipeline faz pull da imagem do Docker Hub e sobe os containers do backend e banco de dados no servidor remoto.

---

## Como acessar a aplicação

Após o deploy, acesse:

```
http://201.23.3.86:8188
```

- O frontend e a API estarão disponíveis nesta porta.
- O banco de dados PostgreSQL está disponível na porta 8189.

---

## Variáveis e portas utilizadas

- **Backend:** Porta 8188 (externa) → 3000 (interna)
- **PostgreSQL:** Porta 8189 (externa) → 5432 (interna)
- **SonarQube:** Porta 9000 (temporária, apenas durante análise)

---

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/pblcnr/deploy-automatizado.git
   cd deploy-automatizado
   ```

2. Suba os containers:
   ```bash
   docker compose up --build
   ```

3. Acesse a aplicação em [http://localhost:8188](http://localhost:8188)

---

## CI/CD

O pipeline está definido em `.github/workflows/deploy.yml` e executa automaticamente o deploy no servidor remoto a cada push na branch `main`.

---

## Autor

- Nome: Paulo Henrique de Andrade
- Curso: Desenvolvimento de Software Multiplataforma
- Disciplina: Integração e Entrega Contínua.
- Professor: Rodrigo Vollo

---

## Observações

- O acesso ao servidor remoto é feito via SSH com chave privada fornecida pelo professor.
- O deploy só ocorre se a análise do SonarQube for aprovada.
- O frontend é servido diretamente pelo backend Express.