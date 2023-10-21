import { mutationField, nonNull } from 'nexus'

export const ResponseDeleteManyMutation = mutationField('deleteManyResponse', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ResponseWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.response.deleteMany({ where } as any)
  },
})
