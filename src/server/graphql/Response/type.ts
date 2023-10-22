import { objectType, list } from 'nexus'

export const Response = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Response',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.string('text')
    t.nullable.string('verdict')
    t.int('userId')
    t.int('directionId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('direction', {
      type: 'Direction',
      resolve(root: any) {
        return root.direction
      },
    })
    t.list.field('tests', {
      type: 'Test',
      args: {
        where: 'TestWhereInput',
        orderBy: list('TestOrderByWithRelationInput'),
        cursor: 'TestWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('TestScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.tests
      },
    })
    t.list.field('answers', {
      type: 'Answer',
      args: {
        where: 'AnswerWhereInput',
        orderBy: list('AnswerOrderByWithRelationInput'),
        cursor: 'AnswerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('AnswerScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.answers
      },
    })
    t.field('_count', {
      type: 'ResponseCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
