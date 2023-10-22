import { queryField, list } from 'nexus'

export const SpecializationAggregateQuery = queryField(
  'aggregateSpecialization',
  {
    type: 'AggregateSpecialization',
    args: {
      where: 'SpecializationWhereInput',
      orderBy: list('SpecializationOrderByWithRelationInput'),
      cursor: 'SpecializationWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.specialization.aggregate({ ...args, ...select }) as any
    },
  },
)
