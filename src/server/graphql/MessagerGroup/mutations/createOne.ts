import { mutationField, nonNull } from 'nexus'

export const MessagerGroupCreateOneMutation = mutationField(
  'createOneMessagerGroup',
  {
    type: nonNull('MessagerGroup'),
    args: {
      data: 'MessagerGroupCreateInput',
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.messagerGroup.create({
        data,
        ...select,
      })
    },
  },
)
