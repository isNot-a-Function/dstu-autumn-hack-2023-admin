import { queryField, nonNull, list } from 'nexus'

export const ResponseFindManyQuery = queryField('findManyResponse', {
  type: nonNull(list(nonNull('Response'))),
  args: {
    where: 'ResponseWhereInput',
    orderBy: list('ResponseOrderByWithRelationInput'),
    cursor: 'ResponseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ResponseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.response.findMany({
      ...args,
      ...select,
    })
  },
})
