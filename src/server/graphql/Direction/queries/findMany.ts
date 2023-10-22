import { queryField, nonNull, list } from 'nexus'

export const DirectionFindManyQuery = queryField('findManyDirection', {
  type: nonNull(list(nonNull('Direction'))),
  args: {
    where: 'DirectionWhereInput',
    orderBy: list('DirectionOrderByWithRelationInput'),
    cursor: 'DirectionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DirectionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.direction.findMany({
      ...args,
      ...select,
    })
  },
})
