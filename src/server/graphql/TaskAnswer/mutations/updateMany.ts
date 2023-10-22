import { mutationField, nonNull } from 'nexus'

export const TaskAnswerUpdateManyMutation = mutationField(
  'updateManyTaskAnswer',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('TaskAnswerUpdateManyMutationInput'),
      where: 'TaskAnswerWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.taskAnswer.updateMany(args as any)
    },
  },
)
