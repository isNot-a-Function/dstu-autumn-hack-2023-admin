import { queryField, list } from 'nexus'

export const DirectionAggregateQuery = queryField('aggregateDirection', {
  type: 'AggregateDirection',
  args: {
    where: 'DirectionWhereInput',
    orderBy: list('DirectionOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'DirectionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.direction.aggregate({ ...args, ...select }) as any
  },
})
