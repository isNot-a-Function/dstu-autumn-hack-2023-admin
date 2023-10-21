import { mutationField, nonNull } from 'nexus'

export const MessagerGroupDeleteOneMutation = mutationField(
  'deleteOneMessagerGroup',
  {
    type: 'MessagerGroup',
    args: {
      where: nonNull('MessagerGroupWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.messagerGroup.delete({
        where,
        ...select,
      })
    },
  },
)
