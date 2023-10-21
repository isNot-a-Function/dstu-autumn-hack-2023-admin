import { mutationField, nonNull } from 'nexus'

export const MessagerGroupUpsertOneMutation = mutationField(
  'upsertOneMessagerGroup',
  {
    type: nonNull('MessagerGroup'),
    args: {
      where: nonNull('MessagerGroupWhereUniqueInput'),
      create: nonNull('MessagerGroupCreateInput'),
      update: nonNull('MessagerGroupUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.messagerGroup.upsert({
        ...args,
        ...select,
      })
    },
  },
)
