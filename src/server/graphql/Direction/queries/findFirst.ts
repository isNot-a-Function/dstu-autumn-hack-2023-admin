import { queryField, list } from 'nexus'

export const DirectionFindFirstQuery = queryField('findFirstDirection', {
  type: 'Direction',
  args: {
    where: 'DirectionWhereInput',
    orderBy: list('DirectionOrderByWithRelationInput'),
    cursor: 'DirectionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DirectionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.direction.findFirst({
      ...args,
      ...select,
    })
  },
})
