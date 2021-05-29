import jwt from 'jsonwebtoken';

export const createAuthToken = (user) => {
    let token = jwt.sign({ user }, process.env.AUTH_SECRET, { expiresIn: process.env.AUTH_TIMEOUT });
    return token
}

export const isAuth = (req, res, next) => {
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        jwt.verify(token, process.env.AUTH_SECRET, (err, authorization) => {
            console.log("authorization", authorization)
            req.user = authorization;
            if (err || !authorization) return res.status(403).json({ error: "You are not authorized" })
            next()
        });

    } else return res.status(403).json({ error: "You are not authorized" })

}

