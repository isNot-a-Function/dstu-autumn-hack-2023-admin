import { mutationField, nonNull } from 'nexus'

export const MessagerGroupUpdateOneMutation = mutationField(
  'updateOneMessagerGroup',
  {
    type: nonNull('MessagerGroup'),
    args: {
      data: nonNull('MessagerGroupUpdateInput'),
      where: nonNull('MessagerGroupWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.messagerGroup.update({
        where,
        data,
        ...select,
      })
    },
  },
)
