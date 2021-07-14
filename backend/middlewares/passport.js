const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('./../models/User.model')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWTSecret
passport.use(new JwtStrategy(opts, async (payload, done) => {
    const user = await User.findOne({where: {id: payload.id}})
    if (user) {
        return done(null, user)
    } else {
        return done(null, false)
    }
}))




