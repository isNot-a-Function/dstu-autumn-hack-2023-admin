import { queryField, nonNull } from 'nexus'

export const SpecializationFindUniqueQuery = queryField(
  'findUniqueSpecialization',
  {
    type: 'Specialization',
    args: {
      where: nonNull('SpecializationWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.specialization.findUnique({
        where,
        ...select,
      })
    },
  },
)
