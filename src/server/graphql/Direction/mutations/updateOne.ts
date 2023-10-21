import { mutationField, nonNull } from 'nexus'

export const DirectionUpdateOneMutation = mutationField('updateOneDirection', {
  type: nonNull('Direction'),
  args: {
    data: nonNull('DirectionUpdateInput'),
    where: nonNull('DirectionWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.direction.update({
      where,
      data,
      ...select,
    })
  },
})
