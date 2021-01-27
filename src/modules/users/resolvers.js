import User from './schemas/User'

export default {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => { 
            const user = User.findById(id)
            
            return user
        }
    },
    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: async (_, { id, name, email }) => { 
            await User.updateOne({ _id: id }, { name, email })

            return { message: 'User updated successfully!' }
        },
        deleteUser: async (_, { id }) => {
            await User.deleteOne({ _id: id })

            return { message: 'Register removed successfully' }
        }
    }
}