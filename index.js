import NGL from './src/NGL.js'

const bot = new NGL('anhalim', { random: true, text: 'hi are you oke?' })
bot.sent({count: 10});