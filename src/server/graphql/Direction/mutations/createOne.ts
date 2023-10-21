import { mutationField, nonNull } from 'nexus'

export const DirectionCreateOneMutation = mutationField('createOneDirection', {
  type: nonNull('Direction'),
  args: {
    data: nonNull('DirectionCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.direction.create({
      data,
      ...select,
    })
  },
})
