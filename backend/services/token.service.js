const jwt = require('jsonwebtoken')
class TokenService {
    generateToken(payload) {
        const token = jwt.sign(payload, process.env.JWTSecret, {expiresIn: '15m'})
        return token
    }

    validateToken(token) {
        const uData = jwt.verify(token, process.env.JWTSecret)
        if (uData) {
            return uData
        }
        throw new Error('Not valid token')
    }

    updateToken(token) {
        const uData = this.validateToken(token)
        const newToken = this.generateToken(uData)
        return newToken
    }

}

module.exports = new TokenService()
