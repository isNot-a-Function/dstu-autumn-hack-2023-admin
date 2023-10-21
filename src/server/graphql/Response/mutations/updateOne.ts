import { mutationField, nonNull } from 'nexus'

export const ResponseUpdateOneMutation = mutationField('updateOneResponse', {
  type: nonNull('Response'),
  args: {
    data: nonNull('ResponseUpdateInput'),
    where: nonNull('ResponseWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.response.update({
      where,
      data,
      ...select,
    })
  },
})
