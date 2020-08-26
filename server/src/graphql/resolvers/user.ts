import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    currentUser: (parent: any, args: any, { prisma, user }: any) => {
      if (!user) return null;
      else return user;
    },
  },
};
