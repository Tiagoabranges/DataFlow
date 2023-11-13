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

### Instruções

1. Clone o repositório.
2. Instale as dependências em cada parte do projeto (`npm install`).
3. Inicie o servidor UDP, o cliente UDP, a API e o frontend React com `npm start` em seus respectivos diretórios.

## Estrutura do Projeto 📂

- `udpServer`: Contém o servidor UDP.
- `udpClient`: Script para o cliente UDP.
- `db`: Conexão com o MongoDB.
- `api`: API REST para acessar os dados.
- `frontend`: Aplicação React para visualização dos dados.

## Contribuições 🤝

Contribuições, problemas e solicitações de funcionalidades são bem-vindas. Sinta-se à vontade para verificar a página de issues ou enviar um pull request.

---

Criado com ❤️ por [Tiago Abranges]
