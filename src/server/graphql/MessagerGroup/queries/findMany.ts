import { queryField, nonNull, list } from 'nexus'

export const MessagerGroupFindManyQuery = queryField('findManyMessagerGroup', {
  type: nonNull(list(nonNull('MessagerGroup'))),
  args: {
    where: 'MessagerGroupWhereInput',
    orderBy: list('MessagerGroupOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'MessagerGroupWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MessagerGroupScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.messagerGroup.findMany({
      ...args,
      ...select,
    })
  },
})
