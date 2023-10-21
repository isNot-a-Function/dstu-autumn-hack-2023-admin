import { mutationField, nonNull } from 'nexus'

export const MessagerGroupUpdateManyMutation = mutationField(
  'updateManyMessagerGroup',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('MessagerGroupUpdateManyMutationInput'),
      where: 'MessagerGroupWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.messagerGroup.updateMany(args as any)
    },
  },
)
