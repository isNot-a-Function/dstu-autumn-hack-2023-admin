import { objectType, list } from 'nexus'

export const Task = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Task',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.int('testId')
    t.field('type', { type: 'TaskType' })
    t.string('question')
    t.list.string('variants')
    t.nullable.int('correctSingleAnswer')
    t.list.int('correctMultipleAnswer')
    t.nullable.string('code')
    t.nullable.field('test', {
      type: 'Test',
      args: {
        where: 'TestWhereInput',
      },
      resolve(root: any) {
        return root.test
      },
    })
    t.list.field('taskAnswers', {
      type: 'TaskAnswer',
      args: {
        where: 'TaskAnswerWhereInput',
        orderBy: list('TaskAnswerOrderByWithRelationInput'),
        cursor: 'TaskAnswerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('TaskAnswerScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.taskAnswers
      },
    })
    t.field('_count', {
      type: 'TaskCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
