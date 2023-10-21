import { objectType, list } from 'nexus'

export const Test = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Test',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('title')
    t.list.field('tasks', {
      type: 'Task',
      args: {
        where: 'TaskWhereInput',
        orderBy: list('TaskOrderByWithRelationAndSearchRelevanceInput'),
        cursor: 'TaskWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('TaskScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.tasks
      },
    })
    t.list.field('answers', {
      type: 'Answer',
      args: {
        where: 'AnswerWhereInput',
        orderBy: list('AnswerOrderByWithRelationAndSearchRelevanceInput'),
        cursor: 'AnswerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('AnswerScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.answers
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
      type: 'TestCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
