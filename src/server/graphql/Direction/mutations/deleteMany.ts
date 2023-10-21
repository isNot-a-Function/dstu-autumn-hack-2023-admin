import { mutationField, nonNull } from 'nexus'

export const DirectionDeleteManyMutation = mutationField(
  'deleteManyDirection',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'DirectionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.direction.deleteMany({ where } as any)
    },
  },
)
