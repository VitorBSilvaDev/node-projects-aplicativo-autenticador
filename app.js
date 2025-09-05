import express from 'express';
import bcrypt from 'bcrypt';
import { users, initializeUsers } from './data.js';

const app = express();

// "Middleware" - Chama uma função antes de realizar cada requisição
// express.json() - Primeiro verifica se é objeto json, se sim converte para javascript e armazena na req.body
app.use(express.json());

// app.post - requisição que tenta enviar dados de um usuário para realizar login
app.post('/login', async (req, res) => {
    // Desestruturando as propriedades do req.body 
    // Exemplo sem desestruturação: const email = req.body.email; const senha = req.body.senha
    const { email, password } = req.body;

    // Tratamento de erros fazendo uma verificação simples antes de prosseguir com a logica de autenticação
    try {
        // Verifica se o email ou senha retornam false com operador NOT (!), se forem null ou undefined, então cai no if
        if (!email || !password) {
            // Instancía um novo objeto Error e pula para o bloco catch 
            throw new Error('Email e senha são obrigatórios.')
        }

        // Percorre a lista de usuários, para cada um acessa o email e compara se é igual ao email da requisição
        const user = users.find(u => u.email === email);

        // Se não for igual ao email da requisição, então 
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        // Compara a senha que foi inserida com o passwordHash do usuário e atribui numa variável o resultado booleano
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        // Verifica se a senha não corresponde ao usuário encontrado
        if (!isMatch) {
            throw new Error('Credenciais inválidas.')
        }

        // Passando todos os testes, é enviado status 200 (sucesso) e a mensagem de sucesso em json
        res.status(200).send({ message: 'Login bem-sucedido.' })
    } catch (err) {
        // Lógica de tratamento de exceções 

        // 500 - Status padrão de erro (genérico)
        let statusCode = 500;
        if (err.message === 'Email e senha são obrigatórios.') {
            statusCode = 400; // Requisição inválida (erro no formato da requisição)
        } else if (err.message === 'Usuário não encontrado.' || err.message === 'Credenciais inválidas.') {
            statusCode = 401; // Não autorizado (erro na validação dos dados enviados)
        }

        res.status(statusCode).send({ error: err.message })
    }
})

export { app, initializeUsers };
