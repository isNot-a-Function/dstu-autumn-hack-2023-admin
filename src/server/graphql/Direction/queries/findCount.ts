import { queryField, nonNull, list } from 'nexus'

export const DirectionFindCountQuery = queryField('findManyDirectionCount', {
  type: nonNull('Int'),
  args: {
    where: 'DirectionWhereInput',
    orderBy: list('DirectionOrderByWithRelationInput'),
    cursor: 'DirectionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('DirectionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.direction.count(args as any)
  },
})
