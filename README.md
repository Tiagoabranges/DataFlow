# DataFlow Monitor 📡

O DataFlow Monitor é um sistema completo que integra um servidor UDP, um cliente que envia dados, uma API REST e um frontend React para visualização de dados em tempo real.

## Tecnologias Utilizadas 💻

- Node.js
- React
- MongoDB
- Express
- dgram (UDP)

## Funcionalidades 🌟

- **Servidor UDP**: Recebe e processa pacotes UDP.
- **Cliente UDP**: Envia pacotes de dados aleatórios.
- **API REST**: Fornece acesso aos dados armazenados.
- **Frontend React**: Interface para visualização dos dados.

## Como Executar 🚀

### Pré-requisitos

- Node.js instalado.
- MongoDB rodando localmente ou em um container Docker.
  

# 💻 Descrição

Descrição detalhada do seu projeto.

# 🚀 Como Rodar o Projeto

```bash
# Clone este repositório
$ git clone git@github.com:Tiagoabranges/DataFlow.git

# Acesse a pasta do projeto no terminal/cmd
$ cd DataFlow

# Instale as dependências
$ npm install

# MongoDB com Docker
$ docker run --name mongodb -d -p 27017:27017 mongo

# Inicie o servidor UDP
$ npm run start:server

# Inicie o cliente UDP
$ npm run start:client

# Inicie a API
$ npm run start:api

# Inicie o Frontend React
$ cd frontend
$ npm run dev
````

## Estrutura do Projeto 📂

- `udpServer`: Contém o servidor UDP.
- `udpClient`: Script para o cliente UDP.
- `db`: Conexão com o MongoDB.
- `api`: API REST para acessar os dados.
- `frontend`: Aplicação React para visualização dos dados.

## Contribuições 🤝

Contribuições, problemas e solicitações de funcionalidades são bem-vindas. Sinta-se à vontade para verificar a página de issues ou enviar um pull request.

---

Criado por [Tiago Abranges]
