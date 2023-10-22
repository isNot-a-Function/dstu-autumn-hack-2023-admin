import { queryField, list } from 'nexus'

export const MessagerGroupAggregateQuery = queryField(
  'aggregateMessagerGroup',
  {
    type: 'AggregateMessagerGroup',
    args: {
      where: 'MessagerGroupWhereInput',
      orderBy: list('MessagerGroupOrderByWithRelationInput'),
      cursor: 'MessagerGroupWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.messagerGroup.aggregate({ ...args, ...select }) as any
    },
  },
)
