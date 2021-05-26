import User from './../model/user'
import uid from 'uid';


const userService = {
    createUser: (req, res) => {
        const { email, password, name, phone } = req.body
        try {
            User.findOne({ email: email }).exec((err, user) => {
                if (err || user) {
                    return res.status(400).json({
                        error: `User already exist with email : ${email}`
                    })
                }
                const newUser = new User({
                    email, password, name, phone, username: uid()
                });

                newUser.save((err, user) => {
                    if (err) {
                        return res.status(404).json({
                            error: err
                        })
                    }
                    user.hashPassword = undefined;
                    return res.status(201).json(user)
                })

            })


        } catch (err) {

            return res.status(500).json({
                error: err
            })
        }

    }
}

export default userService