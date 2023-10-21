import { mutationField, nonNull } from 'nexus'

export const ResponseUpdateManyMutation = mutationField('updateManyResponse', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ResponseUpdateManyMutationInput'),
    where: 'ResponseWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.response.updateMany(args as any)
  },
})
