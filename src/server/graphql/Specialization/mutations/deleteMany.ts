import { mutationField, nonNull } from 'nexus'

export const SpecializationDeleteManyMutation = mutationField(
  'deleteManySpecialization',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'SpecializationWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.specialization.deleteMany({ where } as any)
    },
  },
)
