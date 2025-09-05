# Node.js Autenticação e Testes

Este é um projeto de portfólio que simula um sistema de autenticação de usuário simples, focado em demonstrar a implementação de boas práticas de tratamento de exceções , testes unitários e de segurança. Todo o processo de desenvolvimento foi documentado utilizando comentários.

## Tecnologias Utilizadas

  * **Node.js**: Ambiente de execução JavaScript.
  * **Express**: Framework para a construção da API.
  * **Bcrypt**: Biblioteca para criptografia segura de senhas.
  * **Jest**: Framework de testes.
  * **Supertest**: Biblioteca para testar requisições HTTP na API.
  * **Nodemon**: Ferramenta que monitora o código e reinicia o servidor automaticamente quando uma alteração é detectada, agilizando o desenvolvimento.
  * **Babel**: Transpilador utilizado para converter a sintaxe JavaScript moderna (ES6+) em uma versão compatível para o ambiente de testes do Jest.

## Principais Funcionalidades

  * **API REST de Autenticação**: Um endpoint `POST /login` para autenticar usuários.
  * **Segurança**: Criptografia de senhas usando `bcrypt` antes de armazená-las.
  * **Tratamento de Exceções**: Uso de `try...catch` e `throw new Error()` para gerenciar erros e retornar status codes HTTP apropriados (`400`, `401`, `500`).
  * **Testes Automatizados**: Uma suíte de testes completa que verifica o comportamento da API em diferentes cenários (sucesso, senha incorreta, dados ausentes, etc.).

-----

## Como Rodar o Projeto

Siga estes passos para configurar e executar a aplicação localmente:

### Pré-requisitos

  * Node.js (versão 18 ou superior)
  * npm

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/VitorBSilvaDev/node-projects-aplicativo-autenticador.git
    ```
2.  Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd node-projects-aplicativo-autenticador
    npm install
    ```

### Execução

Para iniciar o servidor em modo de desenvolvimento, use o Nodemon:

```bash
npm run devStart
```

O servidor estará rodando em `http://localhost:3001`.

-----

## Como Rodar os Testes

Para executar a suíte de testes e verificar se a API está funcionando corretamente, use o comando:

```bash
npm test
```

Este comando irá rodar todos os testes no diretório `__tests__` e mostrar os resultados no terminal.

## Estrutura de Módulos
O projeto utiliza o sistema de módulos ES Modules (import/export), definido no arquivo package.json com "type": "module". O Babel é essencial para que o ambiente de testes do Jest consiga interpretar e executar essa sintaxe corretamente.

## Endpoints da API

A API expõe o seguinte endpoint para a autenticação:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/login` | Autentica um usuário com email e senha. |

#### Exemplo de Requisição (com JSON)

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Exemplo de Resposta de Sucesso (Status 200)

```json
{
  "message": "Login bem-sucedido."
}
```

#### Exemplo de Resposta de Erro (Status 401)

```json
{
  "error": "Credenciais inválidas."
}
```
