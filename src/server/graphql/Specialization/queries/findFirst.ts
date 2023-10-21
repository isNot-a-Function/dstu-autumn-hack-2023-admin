import { queryField, list } from 'nexus'

export const SpecializationFindFirstQuery = queryField(
  'findFirstSpecialization',
  {
    type: 'Specialization',
    args: {
      where: 'SpecializationWhereInput',
      orderBy: list('SpecializationOrderByWithRelationAndSearchRelevanceInput'),
      cursor: 'SpecializationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SpecializationScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.specialization.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
