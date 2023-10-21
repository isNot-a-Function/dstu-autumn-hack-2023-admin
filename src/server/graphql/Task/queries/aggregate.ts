import { queryField, list } from 'nexus'

export const TaskAggregateQuery = queryField('aggregateTask', {
  type: 'AggregateTask',
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.task.aggregate({ ...args, ...select }) as any
  },
})
