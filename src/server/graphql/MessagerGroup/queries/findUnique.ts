import { queryField, nonNull } from 'nexus'

export const MessagerGroupFindUniqueQuery = queryField(
  'findUniqueMessagerGroup',
  {
    type: 'MessagerGroup',
    args: {
      where: nonNull('MessagerGroupWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.messagerGroup.findUnique({
        where,
        ...select,
      })
    },
  },
)
