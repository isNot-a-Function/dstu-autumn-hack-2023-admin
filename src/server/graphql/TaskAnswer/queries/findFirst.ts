import { queryField, list } from 'nexus'

export const TaskAnswerFindFirstQuery = queryField('findFirstTaskAnswer', {
  type: 'TaskAnswer',
  args: {
    where: 'TaskAnswerWhereInput',
    orderBy: list('TaskAnswerOrderByWithRelationInput'),
    cursor: 'TaskAnswerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TaskAnswerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taskAnswer.findFirst({
      ...args,
      ...select,
    })
  },
})
