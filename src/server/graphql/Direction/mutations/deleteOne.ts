import { mutationField, nonNull } from 'nexus'

export const DirectionDeleteOneMutation = mutationField('deleteOneDirection', {
  type: 'Direction',
  args: {
    where: nonNull('DirectionWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.direction.delete({
      where,
      ...select,
    })
  },
})
