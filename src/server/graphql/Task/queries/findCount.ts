import { queryField, nonNull, list } from 'nexus'

export const TaskFindCountQuery = queryField('findManyTaskCount', {
  type: nonNull('Int'),
  args: {
    where: 'TaskWhereInput',
    orderBy: list('TaskOrderByWithRelationInput'),
    cursor: 'TaskWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TaskScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.task.count(args as any)
  },
})
