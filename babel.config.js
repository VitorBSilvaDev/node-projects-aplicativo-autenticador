// transpilador - traduz a linguagem ES modules para que o jest consiga entender os métodos de import/export
export default {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current',
            },
        }],
    ],
};