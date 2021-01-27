import 'dotenv/config'
import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import path from 'path'

import resolvers from './modules/users/resolvers'

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers,
});


server.start({}, () => {
    console.log('\nServer running on http://localhost:4000')
});