import { queryField, nonNull, list } from 'nexus'

export const SpecializationFindManyQuery = queryField(
  'findManySpecialization',
  {
    type: nonNull(list(nonNull('Specialization'))),
    args: {
      where: 'SpecializationWhereInput',
      orderBy: list('SpecializationOrderByWithRelationInput'),
      cursor: 'SpecializationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SpecializationScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.specialization.findMany({
        ...args,
        ...select,
      })
    },
  },
)
