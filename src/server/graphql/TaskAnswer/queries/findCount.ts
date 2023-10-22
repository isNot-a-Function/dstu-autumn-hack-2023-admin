import { queryField, nonNull, list } from 'nexus'

export const TaskAnswerFindCountQuery = queryField('findManyTaskAnswerCount', {
  type: nonNull('Int'),
  args: {
    where: 'TaskAnswerWhereInput',
    orderBy: list('TaskAnswerOrderByWithRelationInput'),
    cursor: 'TaskAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TaskAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.taskAnswer.count(args as any)
  },
})
