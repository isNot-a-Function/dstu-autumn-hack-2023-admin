import { queryField, list } from 'nexus'

export const TaskAnswerAggregateQuery = queryField('aggregateTaskAnswer', {
  type: 'AggregateTaskAnswer',
  args: {
    where: 'TaskAnswerWhereInput',
    orderBy: list('TaskAnswerOrderByWithRelationInput'),
    cursor: 'TaskAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taskAnswer.aggregate({ ...args, ...select }) as any
  },
})
