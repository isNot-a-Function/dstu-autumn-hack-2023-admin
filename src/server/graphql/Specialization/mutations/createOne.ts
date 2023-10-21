import { mutationField, nonNull } from 'nexus'

export const SpecializationCreateOneMutation = mutationField(
  'createOneSpecialization',
  {
    type: nonNull('Specialization'),
    args: {
      data: nonNull('SpecializationCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.specialization.create({
        data,
        ...select,
      })
    },
  },
)
