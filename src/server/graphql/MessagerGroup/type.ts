import { objectType, list } from 'nexus'

export const MessagerGroup = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'MessagerGroup',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.int('creatorId')
    t.boolean('active')
    t.string('title')
    t.string('icon')
    t.list.field('users', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: list('UserOrderByWithRelationAndSearchRelevanceInput'),
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('UserScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.users
      },
    })
    t.list.field('messages', {
      type: 'Message',
      args: {
        where: 'MessageWhereInput',
        orderBy: list('MessageOrderByWithRelationAndSearchRelevanceInput'),
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: list('MessageScalarFieldEnum'),
      },
      resolve(root: any) {
        return root.messages
      },
    })
    t.field('_count', {
      type: 'MessagerGroupCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
