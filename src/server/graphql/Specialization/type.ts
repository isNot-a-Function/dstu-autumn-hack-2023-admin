import { objectType, list } from 'nexus'

export const Specialization = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Specialization',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('title')
    t.list.field('directions', {
      type: 'Direction',
      args: {
        where: 'DirectionWhereInput',
        orderBy: list('DirectionOrderByWithRelationInput'),
        cursor: 'DirectionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('DirectionScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.directions
      },
    })
    t.field('_count', {
      type: 'SpecializationCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
