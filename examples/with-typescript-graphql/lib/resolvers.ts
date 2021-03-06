import { IResolvers } from 'apollo-server-micro'

const resolvers: IResolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
  },
}

export default resolvers
