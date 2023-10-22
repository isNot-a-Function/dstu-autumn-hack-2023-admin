import { queryField, nonNull, list } from 'nexus'

export const ResponseFindCountQuery = queryField('findManyResponseCount', {
  type: nonNull('Int'),
  args: {
    where: 'ResponseWhereInput',
    orderBy: list('ResponseOrderByWithRelationInput'),
    cursor: 'ResponseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ResponseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.response.count(args as any)
  },
})
