import { queryField, nonNull } from 'nexus'

export const DirectionFindUniqueQuery = queryField('findUniqueDirection', {
  type: 'Direction',
  args: {
    where: nonNull('DirectionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.direction.findUnique({
      where,
      ...select,
    })
  },
})
