import { queryField, nonNull } from 'nexus'

export const TaskAnswerFindUniqueQuery = queryField('findUniqueTaskAnswer', {
  type: 'TaskAnswer',
  args: {
    where: nonNull('TaskAnswerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.taskAnswer.findUnique({
      where,
      ...select,
    })
  },
})
