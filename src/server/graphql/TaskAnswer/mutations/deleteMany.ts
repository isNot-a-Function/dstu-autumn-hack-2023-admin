import { mutationField, nonNull } from 'nexus'

export const TaskAnswerDeleteManyMutation = mutationField(
  'deleteManyTaskAnswer',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TaskAnswerWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.taskAnswer.deleteMany({ where } as any)
    },
  },
)
