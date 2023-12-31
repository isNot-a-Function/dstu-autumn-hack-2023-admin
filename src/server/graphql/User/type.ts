import { objectType, list } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('email')
    t.string('passwordHash')
    t.field('role', { type: 'UserRoleEnum' })
    t.nullable.string('tgLink')
    t.nullable.string('vkLink')
    t.nullable.string('phone')
    t.nullable.string('fullname')
    t.nullable.string('logo')
    t.list.field('messages', {
      type: 'Message',
      args: {
        where: 'MessageWhereInput',
        orderBy: list('MessageOrderByWithRelationInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('MessageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.messages
      },
    })
    t.list.field('groups', {
      type: 'MessagerGroup',
      args: {
        where: 'MessagerGroupWhereInput',
        orderBy: list('MessagerGroupOrderByWithRelationInput'),
        cursor: 'MessagerGroupWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('MessagerGroupScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.groups
      },
    })
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
    t.list.field('answers', {
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
        return root.answers
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
