import { mutationField, nonNull } from 'nexus'

export const ResponseUpsertOneMutation = mutationField('upsertOneResponse', {
  type: nonNull('Response'),
  args: {
    where: nonNull('ResponseWhereUniqueInput'),
    create: nonNull('ResponseCreateInput'),
    update: nonNull('ResponseUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.response.upsert({
      ...args,
      ...select,
    })
  },
})
