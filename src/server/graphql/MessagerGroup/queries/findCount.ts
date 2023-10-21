import { queryField, nonNull, list } from 'nexus'

export const MessagerGroupFindCountQuery = queryField(
  'findManyMessagerGroupCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'MessagerGroupWhereInput',
      orderBy: list('MessagerGroupOrderByWithRelationAndSearchRelevanceInput'),
      cursor: 'MessagerGroupWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('MessagerGroupScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.messagerGroup.count(args as any)
    },
  },
)
