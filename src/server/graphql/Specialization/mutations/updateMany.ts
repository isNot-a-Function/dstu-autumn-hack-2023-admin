import { mutationField, nonNull } from 'nexus'

export const SpecializationUpdateManyMutation = mutationField(
  'updateManySpecialization',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('SpecializationUpdateManyMutationInput'),
      where: 'SpecializationWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.specialization.updateMany(args as any)
    },
  },
)
