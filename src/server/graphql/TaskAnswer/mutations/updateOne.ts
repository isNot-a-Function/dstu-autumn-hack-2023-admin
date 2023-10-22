import { mutationField, nonNull } from 'nexus'

export const TaskAnswerUpdateOneMutation = mutationField(
  'updateOneTaskAnswer',
  {
    type: nonNull('TaskAnswer'),
    args: {
      data: nonNull('TaskAnswerUpdateInput'),
      where: nonNull('TaskAnswerWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.taskAnswer.update({
        where,
        data,
        ...select,
      })
    },
  },
)
