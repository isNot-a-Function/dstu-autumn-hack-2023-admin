import { queryField, list } from 'nexus'

export const ResponseFindFirstQuery = queryField('findFirstResponse', {
  type: 'Response',
  args: {
    where: 'ResponseWhereInput',
    orderBy: list('ResponseOrderByWithRelationAndSearchRelevanceInput'),
    cursor: 'ResponseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ResponseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.response.findFirst({
      ...args,
      ...select,
    })
  },
})
