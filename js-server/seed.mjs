import { dbConnect, disconnect } from './src/configs/dbConnect.mjs'
import User from './src/services/user.services.mjs'
import passwordHandlers from './src/utils/passwordHandlers.mjs'

await dbConnect()

await User.deleteUsers()

const password = 'Aa1234590!'
const hashed = await passwordHandlers.createPasswordHash(password)

const user = {
	username: 'Toninho',
  email:'toninhos@dodiabo.com',
  password: hashed
}

await User.createUser(user)
            .then(user => {
              console.log(user)
            })
            .catch(e => console.log('deu erro', e))

await User.findOne(user.username).then(user => console.log('found', user)).catch(e => console.log('deu erro', e))

disconnect()
