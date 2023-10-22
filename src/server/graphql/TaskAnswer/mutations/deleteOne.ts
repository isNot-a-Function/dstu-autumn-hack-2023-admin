import { mutationField, nonNull } from 'nexus'

export const TaskAnswerDeleteOneMutation = mutationField(
  'deleteOneTaskAnswer',
  {
    type: 'TaskAnswer',
    args: {
      where: nonNull('TaskAnswerWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.taskAnswer.delete({
        where,
        ...select,
      })
    },
  },
)
