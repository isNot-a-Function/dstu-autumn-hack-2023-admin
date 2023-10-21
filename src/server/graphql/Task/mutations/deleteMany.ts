import { mutationField, nonNull } from 'nexus'

export const TaskDeleteManyMutation = mutationField('deleteManyTask', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TaskWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.task.deleteMany({ where } as any)
  },
})
