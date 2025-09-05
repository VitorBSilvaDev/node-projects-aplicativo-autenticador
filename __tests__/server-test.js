import request from 'supertest';
import { app, initializeUsers } from '../app.js'; 

// describe() - Define um conjunto de testes para a funcionalidade de login
describe('Teste de login', () => {
    // beforeAll() - Um hook que prioriza a execução do initializeUsers antes de começar os testes
    // Resolvendo o problema 
    beforeAll(async () => {
        await initializeUsers();
    });

    // it - 
    it('Deve retornar sucesso com credenciais válidas', async () => {

        const res = await request(app)
            .post('/login')
            .send({ email: 'user@example.com', password: 'password123' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login bem-sucedido.');
    })

    it('Deve retornar erro se a senha estiver incorreta', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'user@example.com', password: 'senhaIncorreta' });

        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('error', 'Credenciais inválidas.');
    });

    it('Deve retornar erro se o email não for fornecido', async () => {
        const res = await request(app)
            .post('/login')
            .send({ password: 'password123' });

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error', 'Email e senha são obrigatórios.');
    });
})