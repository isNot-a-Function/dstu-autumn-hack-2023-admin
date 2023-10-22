import { objectType } from 'nexus'

export const TaskAnswer = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'TaskAnswer',
  definition(t) {
    t.int('id')
    t.string('answer')
    t.nullable.int('verdict')
    t.int('answerModelId')
    t.int('taskId')
    t.int('userId')
    t.field('answerModel', {
      type: 'Answer',
      resolve(root: any) {
        return root.answerModel
      },
    })
    t.field('task', {
      type: 'Task',
      resolve(root: any) {
        return root.task
      },
    })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
