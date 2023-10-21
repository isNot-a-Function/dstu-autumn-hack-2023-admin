import { queryField, list } from 'nexus'

export const ResponseAggregateQuery = queryField('aggregateResponse', {
  type: 'AggregateResponse',
  args: {
    where: 'ResponseWhereInput',
    orderBy: list('ResponseOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'ResponseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.response.aggregate({ ...args, ...select }) as any
  },
})
