import { objectType, list } from 'nexus'

export const Direction = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Direction',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.field('type', { type: 'DirectionType' })
    t.string('title')
    t.string('description')
    t.int('specializationId')
    t.nullable.int('testId')
    t.list.field('responses', {
      type: 'Response',
      args: {
        where: 'ResponseWhereInput',
        orderBy: list('ResponseOrderByWithRelationInput'),
        cursor: 'ResponseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('ResponseScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.responses
      },
    })
    t.field('specialization', {
      type: 'Specialization',
      resolve(root: any) {
        return root.specialization
      },
    })
    t.nullable.field('test', {
      type: 'Test',
      args: {
        where: 'TestWhereInput',
      },
      resolve(root: any) {
        return root.test
      },
    })
    t.field('_count', {
      type: 'DirectionCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
