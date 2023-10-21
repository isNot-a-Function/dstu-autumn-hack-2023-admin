import { queryField, nonNull } from 'nexus'

export const ResponseFindUniqueQuery = queryField('findUniqueResponse', {
  type: 'Response',
  args: {
    where: nonNull('ResponseWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.response.findUnique({
      where,
      ...select,
    })
  },
})
