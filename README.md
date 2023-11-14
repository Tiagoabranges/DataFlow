# DataFlow Monitor 📡

O DataFlow Monitor é um sistema completo que integra um servidor UDP, um cliente que envia dados, uma API REST e um frontend React para visualização de dados em tempo real.

## Tecnologias Utilizadas 💻

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [dgram](https://nodejs.org/api/dgram.html)
- [cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Docker](https://www.docker.com/)

## Funcionalidades 🌟

- **Servidor UDP**: Recebe e processa pacotes UDP.
- **Cliente UDP**: Envia pacotes de dados aleatórios.
- **API REST**: Fornece acesso aos dados armazenados.
- **Frontend React**: Interface para visualização dos dados.

## Como Executar 🚀

### Pré-requisitos 
- Node.js instalado.
  

  **Para rodar o projeto com o banco de dados e o frontend**
- Docker instalado. [docker](https://www.docker.com/products/docker-desktop/)
- MongoDB rodando localmente ou em um container Docker.
  

# 💻 Descrição

O DataFlow Monitor é um sistema integrado que abrange um servidor UDP para recebimento e processamento de pacotes, um cliente UDP para envio de dados simulados, uma API REST para disponibilizar os dados processados e uma interface frontend em React para visualização dos dados em tempo real. Este sistema exemplifica a interconexão entre diferentes tecnologias e demonstra a capacidade de monitoramento e análise de dados em fluxo contínuo.

# 🚀 Como Rodar o Projeto

```bash
# Clone este repositório
$ git clone git@github.com:Tiagoabranges/DataFlow.git

# Acesse a pasta do projeto no terminal/cmd
$ cd DataFlow

# Instale as dependências
$ npm install

# Inicie o servidor UDP
$ npm run start:server

# Inicie o cliente UDP
$ npm run start:client


# Para utilizar o banco de dados
$ docker pull mongo
$ docker run --name mongodb -d -p 27017:27017 mongo

# Inicie a API
$ npm run start:api

# Inicie o Frontend React
$ cd front
$ npm install
$ npm run dev
````

## Estrutura do Projeto 📂

- `udpServer`: Contém o servidor UDP.
- `udpClient`: Script para o cliente UDP.
- `db`: Conexão com o MongoDB.
- `api`: API REST para acessar os dados.
- `front`: Aplicação React para visualização dos dados.

## Contribuições 🤝

Contribuições, problemas e solicitações de funcionalidades são bem-vindas. Sinta-se à vontade para verificar a página de issues ou enviar um pull request.

---

## Documentação Adicional 📚

Para mais informações e uma visão detalhada do projeto, consulte a <a href="https://www.notion.so/SStelematica-daf3b7070f2f4365b518eb3451a7c340" target="_blank">Documentação no Notion</a>


## Sobre o Autor 👤

Para entrar em contato ou saber mais sobre mim, visite meu <a href="https://www.linkedin.com/in/tiagoabranges/" target="_blank">LinkedIn</a>

