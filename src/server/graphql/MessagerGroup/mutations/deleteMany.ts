import { mutationField, nonNull } from 'nexus'

export const MessagerGroupDeleteManyMutation = mutationField(
  'deleteManyMessagerGroup',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'MessagerGroupWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.messagerGroup.deleteMany({ where } as any)
    },
  },
)
