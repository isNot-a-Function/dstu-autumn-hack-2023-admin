import { mutationField, nonNull } from 'nexus'

export const ResponseDeleteOneMutation = mutationField('deleteOneResponse', {
  type: 'Response',
  args: {
    where: nonNull('ResponseWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.response.delete({
      where,
      ...select,
    })
  },
})
