import bcrypt from 'bcrypt'

// simulando banco de dados de usuários
const users = [
    { email: "user@example.com", passwordHash: "HASH_DA_SENHA"} // HASH_DA_SENHA - Placeholder
]

// initializeUsers() - armazena em um hash o valor de retorno do método .hash para a senha 'password123' com salt 10
async function initializeUsers() {
    const hash = await bcrypt.hash('password123', 10);
    users[0].passwordHash = hash;
}

export {users, initializeUsers};