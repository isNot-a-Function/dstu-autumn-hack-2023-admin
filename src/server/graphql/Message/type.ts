import { objectType, list } from 'nexus'

export const Message = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Message',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.string('text')
    t.list.string('files')
    t.int('senderId')
    t.int('groupId')
    t.field('sender', {
      type: 'User',
      resolve(root: any) {
        return root.sender
      },
    })
    t.field('group', {
      type: 'MessagerGroup',
      resolve(root: any) {
        return root.group
      },
    })
  },
})
