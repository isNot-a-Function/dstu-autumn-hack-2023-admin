import { mutationField, nonNull } from 'nexus'

export const SpecializationDeleteOneMutation = mutationField(
  'deleteOneSpecialization',
  {
    type: 'Specialization',
    args: {
      where: nonNull('SpecializationWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.specialization.delete({
        where,
        ...select,
      })
    },
  },
)
