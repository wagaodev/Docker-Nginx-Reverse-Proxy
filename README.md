
# Desafio Full Cycle - Nginx com Proxy Reverso

## Descrição do desafio

Neste desafio, você colocará em prática a utilização do Nginx como proxy reverso. A ideia principal é que, quando um usuário acessar o Nginx, ele fará uma chamada à nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela `people`.

O retorno da aplicação Node.js para o Nginx será:

```html
<h1>Full Cycle Rocks!</h1>
```

Seguido por uma lista de nomes cadastrados no banco de dados.

## Requisitos

- Node.js
- Nginx
- MySQL
- Docker e Docker Compose

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **nginx/**: Contém o Dockerfile e a configuração do Nginx.
- **node/**: Contém o Dockerfile, o código da aplicação Node.js e as dependências necessárias.
- **mysql/**: Contém o Dockerfile e o script SQL para a criação da tabela `people`.

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/wagaodev/Docker-Nginx-Reverse-Proxy
cd modulo-docker-desafio-02
```

### 2. Executar o Docker Compose

Para iniciar os serviços, utilize o comando:

```bash
docker compose up -d --build
```

Isso irá iniciar os seguintes containers:

- **Nginx**: Disponível na porta 8080.
- **Node.js**: Disponível na porta 3000 (internamente, acessado pelo Nginx).
- **MySQL**: Banco de dados rodando na porta 3306.

### 3. Acessar a Aplicação

Abra o navegador e acesse:

```
http://localhost:8080
```

Você deverá ver o título "Full Cycle Rocks!" seguido por uma lista de nomes cadastrados no banco de dados.

## Como Baixar a Imagem do Docker Hub

Qualquer pessoa pode baixar a imagem usando o comando:

```bash
docker pull wagaodev/modulo-docker-desafio-02:latest
```

## Considerações Finais

Este desafio foi desenvolvido por mim, Wagner Goulart, para praticar conceitos de Docker, Nginx, Node.js, e MySQL do curso Full Cycle 3.0.
