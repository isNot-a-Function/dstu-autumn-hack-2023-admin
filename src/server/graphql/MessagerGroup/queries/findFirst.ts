import { queryField, list } from 'nexus'

export const MessagerGroupFindFirstQuery = queryField(
  'findFirstMessagerGroup',
  {
    type: 'MessagerGroup',
    args: {
      where: 'MessagerGroupWhereInput',
      orderBy: list('MessagerGroupOrderByWithRelationAndSearchRelevanceInput'),
      cursor: 'MessagerGroupWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('MessagerGroupScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.messagerGroup.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
