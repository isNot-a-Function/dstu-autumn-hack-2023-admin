import { mutationField, nonNull } from 'nexus'

export const SpecializationUpdateOneMutation = mutationField(
  'updateOneSpecialization',
  {
    type: nonNull('Specialization'),
    args: {
      data: nonNull('SpecializationUpdateInput'),
      where: nonNull('SpecializationWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.specialization.update({
        where,
        data,
        ...select,
      })
    },
  },
)
