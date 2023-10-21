import { queryField, nonNull, list } from 'nexus'

export const TaskFindManyQuery = queryField('findManyTask', {
  type: nonNull(list(nonNull('Task'))),
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TaskScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.task.findMany({
      ...args,
      ...select,
    })
  },
})
