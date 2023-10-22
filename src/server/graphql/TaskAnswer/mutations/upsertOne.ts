import { mutationField, nonNull } from 'nexus'

export const TaskAnswerUpsertOneMutation = mutationField(
  'upsertOneTaskAnswer',
  {
    type: nonNull('TaskAnswer'),
    args: {
      where: nonNull('TaskAnswerWhereUniqueInput'),
      create: nonNull('TaskAnswerCreateInput'),
      update: nonNull('TaskAnswerUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.taskAnswer.upsert({
        ...args,
        ...select,
      })
    },
  },
)
