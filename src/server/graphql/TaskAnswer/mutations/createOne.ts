import { mutationField, nonNull } from 'nexus'

export const TaskAnswerCreateOneMutation = mutationField(
  'createOneTaskAnswer',
  {
    type: nonNull('TaskAnswer'),
    args: {
      data: nonNull('TaskAnswerCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.taskAnswer.create({
        data,
        ...select,
      })
    },
  },
)
