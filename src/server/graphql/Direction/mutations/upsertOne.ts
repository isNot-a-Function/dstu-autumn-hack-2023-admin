import { mutationField, nonNull } from 'nexus'

export const DirectionUpsertOneMutation = mutationField('upsertOneDirection', {
  type: nonNull('Direction'),
  args: {
    where: nonNull('DirectionWhereUniqueInput'),
    create: nonNull('DirectionCreateInput'),
    update: nonNull('DirectionUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.direction.upsert({
      ...args,
      ...select,
    })
  },
})
