import { objectType, list } from 'nexus'

export const Answer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Answer',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.string('answer')
    t.int('userId')
    t.int('testId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('test', {
      type: 'Test',
      resolve(root: any) {
        return root.test
      },
    })
    t.list.field('response', {
      type: 'Response',
      args: {
        where: 'ResponseWhereInput',
        orderBy: list('ResponseOrderByWithRelationAndSearchRelevanceInput'),
        cursor: 'ResponseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('ResponseScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.response
      },
    })
    t.field('_count', {
      type: 'AnswerCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
