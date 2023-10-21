import { mutationField, nonNull } from 'nexus'

export const ResponseCreateOneMutation = mutationField('createOneResponse', {
  type: nonNull('Response'),
  args: {
    data: nonNull('ResponseCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.response.create({
      data,
      ...select,
    })
  },
})
