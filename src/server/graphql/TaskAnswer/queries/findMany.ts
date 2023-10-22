import { queryField, nonNull, list } from 'nexus'

export const TaskAnswerFindManyQuery = queryField('findManyTaskAnswer', {
  type: nonNull(list(nonNull('TaskAnswer'))),
  args: {
    where: 'TaskAnswerWhereInput',
    orderBy: list('TaskAnswerOrderByWithRelationInput'),
    cursor: 'TaskAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TaskAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taskAnswer.findMany({
      ...args,
      ...select,
    })
  },
})
