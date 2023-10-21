import { mutationField, nonNull } from 'nexus'

export const DirectionUpdateManyMutation = mutationField(
  'updateManyDirection',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('DirectionUpdateManyMutationInput'),
      where: 'DirectionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.direction.updateMany(args as any)
    },
  },
)
