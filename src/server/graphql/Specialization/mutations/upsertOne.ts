import { mutationField, nonNull } from 'nexus'

export const SpecializationUpsertOneMutation = mutationField(
  'upsertOneSpecialization',
  {
    type: nonNull('Specialization'),
    args: {
      where: nonNull('SpecializationWhereUniqueInput'),
      create: nonNull('SpecializationCreateInput'),
      update: nonNull('SpecializationUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.specialization.upsert({
        ...args,
        ...select,
      })
    },
  },
)
