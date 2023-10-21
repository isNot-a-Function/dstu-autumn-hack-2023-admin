import { queryField, nonNull, list } from 'nexus'

export const SpecializationFindCountQuery = queryField(
  'findManySpecializationCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'SpecializationWhereInput',
      orderBy: list('SpecializationOrderByWithRelationAndSearchRelevanceInput'),
      cursor: 'SpecializationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('SpecializationScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.specialization.count(args as any)
    },
  },
)
