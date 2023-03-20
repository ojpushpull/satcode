const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public'
    },
    images: {
        domains: ['media-exp1.licdn.com','https://i.ibb.co/0rb6XVB/noname-Edited.png']
    }
})