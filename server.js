import { app, initializeUsers } from './app.js'


async function main() {
    console.log('Inicializando servidor')

    // Espera a inicialização da lista de usuários
    await initializeUsers();
    console.log('Base de dados inicializada.')

    // Configurando a porta do servidor e rodando
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
}

main();



