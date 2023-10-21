import { queryField, list } from 'nexus'

export const AnswerAggregateQuery = queryField('aggregateAnswer', {
  type: 'AggregateAnswer',
  args: {
    where: 'AnswerWhereInput',
    orderBy: list('AnswerOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'AnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.answer.aggregate({ ...args, ...select }) as any
  },
})
