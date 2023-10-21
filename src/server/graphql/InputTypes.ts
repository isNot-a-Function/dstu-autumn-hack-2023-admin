import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'createdAt',
    'email',
    'passwordHash',
    'role',
    'tgLink',
    'vkLink',
    'phone',
    'fullname',
    'logo',
  ],
})

export const SpecializationScalarFieldEnum = enumType({
  name: 'SpecializationScalarFieldEnum',
  members: ['id', 'createdAt', 'title'],
})

export const DirectionScalarFieldEnum = enumType({
  name: 'DirectionScalarFieldEnum',
  members: [
    'id',
    'createdAt',
    'type',
    'title',
    'description',
    'specializationId',
  ],
})

export const ResponseScalarFieldEnum = enumType({
  name: 'ResponseScalarFieldEnum',
  members: ['id', 'createdAt', 'text', 'userId', 'directionId'],
})

export const TestScalarFieldEnum = enumType({
  name: 'TestScalarFieldEnum',
  members: ['id', 'createdAt', 'title'],
})

export const TaskScalarFieldEnum = enumType({
  name: 'TaskScalarFieldEnum',
  members: [
    'id',
    'createdAt',
    'testId',
    'type',
    'question',
    'variants',
    'correctSingleAnswer',
    'correctMultipleAnswer',
  ],
})

export const AnswerScalarFieldEnum = enumType({
  name: 'AnswerScalarFieldEnum',
  members: ['id', 'createdAt', 'answer', 'userId', 'testId'],
})

export const MessagerGroupScalarFieldEnum = enumType({
  name: 'MessagerGroupScalarFieldEnum',
  members: ['id', 'createdAt', 'creatorId', 'active', 'title', 'icon'],
})

export const MessageScalarFieldEnum = enumType({
  name: 'MessageScalarFieldEnum',
  members: ['id', 'createdAt', 'text', 'files', 'senderId', 'groupId'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const UserOrderByRelevanceFieldEnum = enumType({
  name: 'UserOrderByRelevanceFieldEnum',
  members: [
    'email',
    'passwordHash',
    'tgLink',
    'vkLink',
    'phone',
    'fullname',
    'logo',
  ],
})

export const SpecializationOrderByRelevanceFieldEnum = enumType({
  name: 'SpecializationOrderByRelevanceFieldEnum',
  members: ['title'],
})

export const DirectionOrderByRelevanceFieldEnum = enumType({
  name: 'DirectionOrderByRelevanceFieldEnum',
  members: ['title', 'description'],
})

export const ResponseOrderByRelevanceFieldEnum = enumType({
  name: 'ResponseOrderByRelevanceFieldEnum',
  members: ['text'],
})

export const TestOrderByRelevanceFieldEnum = enumType({
  name: 'TestOrderByRelevanceFieldEnum',
  members: ['title'],
})

export const TaskOrderByRelevanceFieldEnum = enumType({
  name: 'TaskOrderByRelevanceFieldEnum',
  members: ['question', 'variants'],
})

export const AnswerOrderByRelevanceFieldEnum = enumType({
  name: 'AnswerOrderByRelevanceFieldEnum',
  members: ['answer'],
})

export const MessagerGroupOrderByRelevanceFieldEnum = enumType({
  name: 'MessagerGroupOrderByRelevanceFieldEnum',
  members: ['title', 'icon'],
})

export const MessageOrderByRelevanceFieldEnum = enumType({
  name: 'MessageOrderByRelevanceFieldEnum',
  members: ['text', 'files'],
})

export const UserRoleEnum = enumType({
  name: 'UserRoleEnum',
  members: ['hr', 'customer'],
})

export const DirectionType = enumType({
  name: 'DirectionType',
  members: ['internship', 'practice'],
})

export const TaskType = enumType({
  name: 'TaskType',
  members: [
    'singleResponse',
    'multipleResponse',
    'detailedResponse',
    'codeResponse',
  ],
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('passwordHash', { type: 'StringFilter' })
    t.field('role', { type: 'EnumUserRoleEnumFilter' })
    t.field('tgLink', { type: 'StringNullableFilter' })
    t.field('vkLink', { type: 'StringNullableFilter' })
    t.field('phone', { type: 'StringNullableFilter' })
    t.field('fullname', { type: 'StringNullableFilter' })
    t.field('logo', { type: 'StringNullableFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
    t.field('groups', { type: 'MessagerGroupListRelationFilter' })
    t.field('responses', { type: 'ResponseListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
  },
})

export const UserOrderByWithRelationAndSearchRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationAndSearchRelevanceInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('passwordHash', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('tgLink', { type: 'SortOrderInput' })
    t.field('vkLink', { type: 'SortOrderInput' })
    t.field('phone', { type: 'SortOrderInput' })
    t.field('fullname', { type: 'SortOrderInput' })
    t.field('logo', { type: 'SortOrderInput' })
    t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
    t.field('groups', { type: 'MessagerGroupOrderByRelationAggregateInput' })
    t.field('responses', { type: 'ResponseOrderByRelationAggregateInput' })
    t.field('answers', { type: 'AnswerOrderByRelationAggregateInput' })
    t.field('_relevance', { type: 'UserOrderByRelevanceInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('passwordHash', { type: 'StringFilter' })
    t.field('role', { type: 'EnumUserRoleEnumFilter' })
    t.field('tgLink', { type: 'StringNullableFilter' })
    t.field('vkLink', { type: 'StringNullableFilter' })
    t.field('phone', { type: 'StringNullableFilter' })
    t.field('fullname', { type: 'StringNullableFilter' })
    t.field('logo', { type: 'StringNullableFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
    t.field('groups', { type: 'MessagerGroupListRelationFilter' })
    t.field('responses', { type: 'ResponseListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('passwordHash', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('tgLink', { type: 'SortOrderInput' })
    t.field('vkLink', { type: 'SortOrderInput' })
    t.field('phone', { type: 'SortOrderInput' })
    t.field('fullname', { type: 'SortOrderInput' })
    t.field('logo', { type: 'SortOrderInput' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('passwordHash', { type: 'StringWithAggregatesFilter' })
    t.field('role', { type: 'EnumUserRoleEnumWithAggregatesFilter' })
    t.field('tgLink', { type: 'StringNullableWithAggregatesFilter' })
    t.field('vkLink', { type: 'StringNullableWithAggregatesFilter' })
    t.field('phone', { type: 'StringNullableWithAggregatesFilter' })
    t.field('fullname', { type: 'StringNullableWithAggregatesFilter' })
    t.field('logo', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const SpecializationWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'SpecializationWhereInput' })
    t.list.field('OR', { type: 'SpecializationWhereInput' })
    t.list.field('NOT', { type: 'SpecializationWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('directions', { type: 'DirectionListRelationFilter' })
  },
})

export const SpecializationOrderByWithRelationAndSearchRelevanceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('title', { type: 'SortOrder' })
      t.field('directions', { type: 'DirectionOrderByRelationAggregateInput' })
      t.field('_relevance', { type: 'SpecializationOrderByRelevanceInput' })
    },
  })

export const SpecializationWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'SpecializationWhereInput' })
    t.list.field('OR', { type: 'SpecializationWhereInput' })
    t.list.field('NOT', { type: 'SpecializationWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('directions', { type: 'DirectionListRelationFilter' })
  },
})

export const SpecializationOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('_count', { type: 'SpecializationCountOrderByAggregateInput' })
    t.field('_avg', { type: 'SpecializationAvgOrderByAggregateInput' })
    t.field('_max', { type: 'SpecializationMaxOrderByAggregateInput' })
    t.field('_min', { type: 'SpecializationMinOrderByAggregateInput' })
    t.field('_sum', { type: 'SpecializationSumOrderByAggregateInput' })
  },
})

export const SpecializationScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'SpecializationScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', { type: 'SpecializationScalarWhereWithAggregatesInput' })
    t.list.field('NOT', {
      type: 'SpecializationScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
  },
})

export const DirectionWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'DirectionWhereInput' })
    t.list.field('OR', { type: 'DirectionWhereInput' })
    t.list.field('NOT', { type: 'DirectionWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('type', { type: 'EnumDirectionTypeNullableFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('specializationId', { type: 'IntFilter' })
    t.field('responses', { type: 'ResponseListRelationFilter' })
    t.field('specialization', { type: 'SpecializationRelationFilter' })
  },
})

export const DirectionOrderByWithRelationAndSearchRelevanceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('type', { type: 'SortOrderInput' })
      t.field('title', { type: 'SortOrder' })
      t.field('description', { type: 'SortOrder' })
      t.field('specializationId', { type: 'SortOrder' })
      t.field('responses', { type: 'ResponseOrderByRelationAggregateInput' })
      t.field('specialization', {
        type: 'SpecializationOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('_relevance', { type: 'DirectionOrderByRelevanceInput' })
    },
  })

export const DirectionWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'DirectionWhereInput' })
    t.list.field('OR', { type: 'DirectionWhereInput' })
    t.list.field('NOT', { type: 'DirectionWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('type', { type: 'EnumDirectionTypeNullableFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('specializationId', { type: 'IntFilter' })
    t.field('responses', { type: 'ResponseListRelationFilter' })
    t.field('specialization', { type: 'SpecializationRelationFilter' })
  },
})

export const DirectionOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrderInput' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
    t.field('_count', { type: 'DirectionCountOrderByAggregateInput' })
    t.field('_avg', { type: 'DirectionAvgOrderByAggregateInput' })
    t.field('_max', { type: 'DirectionMaxOrderByAggregateInput' })
    t.field('_min', { type: 'DirectionMinOrderByAggregateInput' })
    t.field('_sum', { type: 'DirectionSumOrderByAggregateInput' })
  },
})

export const DirectionScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'DirectionScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'DirectionScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'DirectionScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('type', { type: 'EnumDirectionTypeNullableWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringWithAggregatesFilter' })
    t.field('specializationId', { type: 'IntWithAggregatesFilter' })
  },
})

export const ResponseWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ResponseWhereInput' })
    t.list.field('OR', { type: 'ResponseWhereInput' })
    t.list.field('NOT', { type: 'ResponseWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('directionId', { type: 'IntFilter' })
    t.field('user', { type: 'UserRelationFilter' })
    t.field('direction', { type: 'DirectionRelationFilter' })
    t.field('tests', { type: 'TestListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
  },
})

export const ResponseOrderByWithRelationAndSearchRelevanceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('text', { type: 'SortOrderInput' })
      t.field('userId', { type: 'SortOrder' })
      t.field('directionId', { type: 'SortOrder' })
      t.field('user', {
        type: 'UserOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('direction', {
        type: 'DirectionOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('tests', { type: 'TestOrderByRelationAggregateInput' })
      t.field('answers', { type: 'AnswerOrderByRelationAggregateInput' })
      t.field('_relevance', { type: 'ResponseOrderByRelevanceInput' })
    },
  })

export const ResponseWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ResponseWhereInput' })
    t.list.field('OR', { type: 'ResponseWhereInput' })
    t.list.field('NOT', { type: 'ResponseWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('directionId', { type: 'IntFilter' })
    t.field('user', { type: 'UserRelationFilter' })
    t.field('direction', { type: 'DirectionRelationFilter' })
    t.field('tests', { type: 'TestListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
  },
})

export const ResponseOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrderInput' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
    t.field('_count', { type: 'ResponseCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ResponseAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ResponseMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ResponseMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ResponseSumOrderByAggregateInput' })
  },
})

export const ResponseScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ResponseScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ResponseScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ResponseScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('text', { type: 'StringNullableWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('directionId', { type: 'IntWithAggregatesFilter' })
  },
})

export const TestWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TestWhereInput' })
    t.list.field('OR', { type: 'TestWhereInput' })
    t.list.field('NOT', { type: 'TestWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('tasks', { type: 'TaskListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
    t.field('response', { type: 'ResponseListRelationFilter' })
  },
})

export const TestOrderByWithRelationAndSearchRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestOrderByWithRelationAndSearchRelevanceInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('tasks', { type: 'TaskOrderByRelationAggregateInput' })
    t.field('answers', { type: 'AnswerOrderByRelationAggregateInput' })
    t.field('response', { type: 'ResponseOrderByRelationAggregateInput' })
    t.field('_relevance', { type: 'TestOrderByRelevanceInput' })
  },
})

export const TestWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'TestWhereInput' })
    t.list.field('OR', { type: 'TestWhereInput' })
    t.list.field('NOT', { type: 'TestWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('tasks', { type: 'TaskListRelationFilter' })
    t.field('answers', { type: 'AnswerListRelationFilter' })
    t.field('response', { type: 'ResponseListRelationFilter' })
  },
})

export const TestOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('_count', { type: 'TestCountOrderByAggregateInput' })
    t.field('_avg', { type: 'TestAvgOrderByAggregateInput' })
    t.field('_max', { type: 'TestMaxOrderByAggregateInput' })
    t.field('_min', { type: 'TestMinOrderByAggregateInput' })
    t.field('_sum', { type: 'TestSumOrderByAggregateInput' })
  },
})

export const TestScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'TestScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'TestScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'TestScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
  },
})

export const TaskWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskWhereInput' })
    t.list.field('OR', { type: 'TaskWhereInput' })
    t.list.field('NOT', { type: 'TaskWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('testId', { type: 'IntNullableFilter' })
    t.field('type', { type: 'EnumTaskTypeFilter' })
    t.field('question', { type: 'StringFilter' })
    t.field('variants', { type: 'StringNullableListFilter' })
    t.field('correctSingleAnswer', { type: 'IntNullableFilter' })
    t.field('correctMultipleAnswer', { type: 'IntNullableListFilter' })
    t.field('test', { type: 'TestNullableRelationFilter' })
  },
})

export const TaskOrderByWithRelationAndSearchRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByWithRelationAndSearchRelevanceInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('question', { type: 'SortOrder' })
    t.field('variants', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrderInput' })
    t.field('correctMultipleAnswer', { type: 'SortOrder' })
    t.field('test', { type: 'TestOrderByWithRelationAndSearchRelevanceInput' })
    t.field('_relevance', { type: 'TaskOrderByRelevanceInput' })
  },
})

export const TaskWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'TaskWhereInput' })
    t.list.field('OR', { type: 'TaskWhereInput' })
    t.list.field('NOT', { type: 'TaskWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('testId', { type: 'IntNullableFilter' })
    t.field('type', { type: 'EnumTaskTypeFilter' })
    t.field('question', { type: 'StringFilter' })
    t.field('variants', { type: 'StringNullableListFilter' })
    t.field('correctSingleAnswer', { type: 'IntNullableFilter' })
    t.field('correctMultipleAnswer', { type: 'IntNullableListFilter' })
    t.field('test', { type: 'TestNullableRelationFilter' })
  },
})

export const TaskOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrderInput' })
    t.field('type', { type: 'SortOrder' })
    t.field('question', { type: 'SortOrder' })
    t.field('variants', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrderInput' })
    t.field('correctMultipleAnswer', { type: 'SortOrder' })
    t.field('_count', { type: 'TaskCountOrderByAggregateInput' })
    t.field('_avg', { type: 'TaskAvgOrderByAggregateInput' })
    t.field('_max', { type: 'TaskMaxOrderByAggregateInput' })
    t.field('_min', { type: 'TaskMinOrderByAggregateInput' })
    t.field('_sum', { type: 'TaskSumOrderByAggregateInput' })
  },
})

export const TaskScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'TaskScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'TaskScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('testId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('type', { type: 'EnumTaskTypeWithAggregatesFilter' })
    t.field('question', { type: 'StringWithAggregatesFilter' })
    t.field('variants', { type: 'StringNullableListFilter' })
    t.field('correctSingleAnswer', { type: 'IntNullableWithAggregatesFilter' })
    t.field('correctMultipleAnswer', { type: 'IntNullableListFilter' })
  },
})

export const AnswerWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'AnswerWhereInput' })
    t.list.field('OR', { type: 'AnswerWhereInput' })
    t.list.field('NOT', { type: 'AnswerWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('answer', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('testId', { type: 'IntFilter' })
    t.field('user', { type: 'UserRelationFilter' })
    t.field('test', { type: 'TestRelationFilter' })
    t.field('response', { type: 'ResponseListRelationFilter' })
  },
})

export const AnswerOrderByWithRelationAndSearchRelevanceInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'AnswerOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('answer', { type: 'SortOrderInput' })
      t.field('userId', { type: 'SortOrder' })
      t.field('testId', { type: 'SortOrder' })
      t.field('user', {
        type: 'UserOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('test', {
        type: 'TestOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('response', { type: 'ResponseOrderByRelationAggregateInput' })
      t.field('_relevance', { type: 'AnswerOrderByRelevanceInput' })
    },
  },
)

export const AnswerWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'AnswerWhereInput' })
    t.list.field('OR', { type: 'AnswerWhereInput' })
    t.list.field('NOT', { type: 'AnswerWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('answer', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('testId', { type: 'IntFilter' })
    t.field('user', { type: 'UserRelationFilter' })
    t.field('test', { type: 'TestRelationFilter' })
    t.field('response', { type: 'ResponseListRelationFilter' })
  },
})

export const AnswerOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('answer', { type: 'SortOrderInput' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('_count', { type: 'AnswerCountOrderByAggregateInput' })
    t.field('_avg', { type: 'AnswerAvgOrderByAggregateInput' })
    t.field('_max', { type: 'AnswerMaxOrderByAggregateInput' })
    t.field('_min', { type: 'AnswerMinOrderByAggregateInput' })
    t.field('_sum', { type: 'AnswerSumOrderByAggregateInput' })
  },
})

export const AnswerScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'AnswerScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'AnswerScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'AnswerScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('answer', { type: 'StringNullableWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('testId', { type: 'IntWithAggregatesFilter' })
  },
})

export const MessagerGroupWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessagerGroupWhereInput' })
    t.list.field('OR', { type: 'MessagerGroupWhereInput' })
    t.list.field('NOT', { type: 'MessagerGroupWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('creatorId', { type: 'IntNullableFilter' })
    t.field('active', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('icon', { type: 'StringFilter' })
    t.field('users', { type: 'UserListRelationFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
  },
})

export const MessagerGroupOrderByWithRelationAndSearchRelevanceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('creatorId', { type: 'SortOrderInput' })
      t.field('active', { type: 'SortOrder' })
      t.field('title', { type: 'SortOrder' })
      t.field('icon', { type: 'SortOrder' })
      t.field('users', { type: 'UserOrderByRelationAggregateInput' })
      t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
      t.field('_relevance', { type: 'MessagerGroupOrderByRelevanceInput' })
    },
  })

export const MessagerGroupWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'MessagerGroupWhereInput' })
    t.list.field('OR', { type: 'MessagerGroupWhereInput' })
    t.list.field('NOT', { type: 'MessagerGroupWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('creatorId', { type: 'IntNullableFilter' })
    t.field('active', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('icon', { type: 'StringFilter' })
    t.field('users', { type: 'UserListRelationFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
  },
})

export const MessagerGroupOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrderInput' })
    t.field('active', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('icon', { type: 'SortOrder' })
    t.field('_count', { type: 'MessagerGroupCountOrderByAggregateInput' })
    t.field('_avg', { type: 'MessagerGroupAvgOrderByAggregateInput' })
    t.field('_max', { type: 'MessagerGroupMaxOrderByAggregateInput' })
    t.field('_min', { type: 'MessagerGroupMinOrderByAggregateInput' })
    t.field('_sum', { type: 'MessagerGroupSumOrderByAggregateInput' })
  },
})

export const MessagerGroupScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'MessagerGroupScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'MessagerGroupScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'MessagerGroupScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('creatorId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('active', { type: 'BoolWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('icon', { type: 'StringWithAggregatesFilter' })
  },
})

export const MessageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageWhereInput' })
    t.list.field('OR', { type: 'MessageWhereInput' })
    t.list.field('NOT', { type: 'MessageWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringFilter' })
    t.field('files', { type: 'StringNullableListFilter' })
    t.field('senderId', { type: 'IntFilter' })
    t.field('groupId', { type: 'IntFilter' })
    t.field('sender', { type: 'UserRelationFilter' })
    t.field('group', { type: 'MessagerGroupRelationFilter' })
  },
})

export const MessageOrderByWithRelationAndSearchRelevanceInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageOrderByWithRelationAndSearchRelevanceInput',
    definition(t) {
      t.field('id', { type: 'SortOrder' })
      t.field('createdAt', { type: 'SortOrder' })
      t.field('text', { type: 'SortOrder' })
      t.field('files', { type: 'SortOrder' })
      t.field('senderId', { type: 'SortOrder' })
      t.field('groupId', { type: 'SortOrder' })
      t.field('sender', {
        type: 'UserOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('group', {
        type: 'MessagerGroupOrderByWithRelationAndSearchRelevanceInput',
      })
      t.field('_relevance', { type: 'MessageOrderByRelevanceInput' })
    },
  })

export const MessageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'MessageWhereInput' })
    t.list.field('OR', { type: 'MessageWhereInput' })
    t.list.field('NOT', { type: 'MessageWhereInput' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringFilter' })
    t.field('files', { type: 'StringNullableListFilter' })
    t.field('senderId', { type: 'IntFilter' })
    t.field('groupId', { type: 'IntFilter' })
    t.field('sender', { type: 'UserRelationFilter' })
    t.field('group', { type: 'MessagerGroupRelationFilter' })
  },
})

export const MessageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('files', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
    t.field('_count', { type: 'MessageCountOrderByAggregateInput' })
    t.field('_avg', { type: 'MessageAvgOrderByAggregateInput' })
    t.field('_max', { type: 'MessageMaxOrderByAggregateInput' })
    t.field('_min', { type: 'MessageMinOrderByAggregateInput' })
    t.field('_sum', { type: 'MessageSumOrderByAggregateInput' })
  },
})

export const MessageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('text', { type: 'StringWithAggregatesFilter' })
    t.field('files', { type: 'StringNullableListFilter' })
    t.field('senderId', { type: 'IntWithAggregatesFilter' })
    t.field('groupId', { type: 'IntWithAggregatesFilter' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('groups', {
      type: 'MessagerGroupCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', { type: 'ResponseCreateNestedManyWithoutUserInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('groups', {
      type: 'MessagerGroupUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', { type: 'ResponseUpdateManyWithoutUserNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const SpecializationCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('directions', {
      type: 'DirectionCreateNestedManyWithoutSpecializationInput',
    })
  },
})

export const SpecializationUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('directions', {
      type: 'DirectionUncheckedCreateNestedManyWithoutSpecializationInput',
    })
  },
})

export const SpecializationUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('directions', {
      type: 'DirectionUpdateManyWithoutSpecializationNestedInput',
    })
  },
})

export const SpecializationUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('directions', {
      type: 'DirectionUncheckedUpdateManyWithoutSpecializationNestedInput',
    })
  },
})

export const SpecializationCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
  },
})

export const SpecializationUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const SpecializationUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const DirectionCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('responses', {
      type: 'ResponseCreateNestedManyWithoutDirectionInput',
    })
    t.nonNull.field('specialization', {
      type: 'SpecializationCreateNestedOneWithoutDirectionsInput',
    })
  },
})

export const DirectionUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('specializationId', { type: 'Int' })
    t.field('responses', {
      type: 'ResponseUncheckedCreateNestedManyWithoutDirectionInput',
    })
  },
})

export const DirectionUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('responses', {
      type: 'ResponseUpdateManyWithoutDirectionNestedInput',
    })
    t.field('specialization', {
      type: 'SpecializationUpdateOneRequiredWithoutDirectionsNestedInput',
    })
  },
})

export const DirectionUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('specializationId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('responses', {
      type: 'ResponseUncheckedUpdateManyWithoutDirectionNestedInput',
    })
  },
})

export const DirectionCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('specializationId', { type: 'Int' })
  },
})

export const DirectionUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const DirectionUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('specializationId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ResponseCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutResponsesInput',
    })
    t.nonNull.field('direction', {
      type: 'DirectionCreateNestedOneWithoutResponsesInput',
    })
    t.field('tests', { type: 'TestCreateNestedManyWithoutResponseInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutResponseInput' })
  },
})

export const ResponseUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('directionId', { type: 'Int' })
    t.field('tests', {
      type: 'TestUncheckedCreateNestedManyWithoutResponseInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutResponseInput',
    })
  },
})

export const ResponseUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('direction', {
      type: 'DirectionUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('tests', { type: 'TestUpdateManyWithoutResponseNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutResponseNestedInput' })
  },
})

export const ResponseUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('tests', {
      type: 'TestUncheckedUpdateManyWithoutResponseNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutResponseNestedInput',
    })
  },
})

export const ResponseCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('directionId', { type: 'Int' })
  },
})

export const ResponseUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const ResponseUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const TestCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskCreateNestedManyWithoutTestInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutTestInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutTestsInput' })
  },
})

export const TestUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskUncheckedCreateNestedManyWithoutTestInput' })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutTestInput',
    })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutTestsInput',
    })
  },
})

export const TestUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUpdateManyWithoutTestNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutTestNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutTestsNestedInput' })
  },
})

export const TestUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUncheckedUpdateManyWithoutTestNestedInput' })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutTestNestedInput',
    })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutTestsNestedInput',
    })
  },
})

export const TestCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
  },
})

export const TestUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TestUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const TaskCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
    t.field('test', { type: 'TestCreateNestedOneWithoutTasksInput' })
  },
})

export const TaskUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('testId', { type: 'Int' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
    t.field('test', { type: 'TestUpdateOneWithoutTasksNestedInput' })
  },
})

export const TaskUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('testId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('testId', { type: 'Int' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('testId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const AnswerCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutAnswersInput' })
    t.nonNull.field('test', { type: 'TestCreateNestedOneWithoutAnswersInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutAnswersInput' })
  },
})

export const AnswerUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('testId', { type: 'Int' })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutAnswersInput',
    })
  },
})

export const AnswerUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutAnswersNestedInput' })
    t.field('test', { type: 'TestUpdateOneRequiredWithoutAnswersNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutAnswersNestedInput' })
  },
})

export const AnswerUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutAnswersNestedInput',
    })
  },
})

export const AnswerCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('testId', { type: 'Int' })
  },
})

export const AnswerUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const AnswerUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessagerGroupCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('users', { type: 'UserCreateNestedManyWithoutGroupsInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutGroupInput' })
  },
})

export const MessagerGroupUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('users', {
      type: 'UserUncheckedCreateNestedManyWithoutGroupsInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutGroupInput',
    })
  },
})

export const MessagerGroupUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    t.field('users', { type: 'UserUpdateManyWithoutGroupsNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutGroupNestedInput' })
  },
})

export const MessagerGroupUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    t.field('users', {
      type: 'UserUncheckedUpdateManyWithoutGroupsNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutGroupNestedInput',
    })
  },
})

export const MessagerGroupCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
  },
})

export const MessagerGroupUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const MessagerGroupUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const MessageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('sender', {
      type: 'UserCreateNestedOneWithoutMessagesInput',
    })
    t.nonNull.field('group', {
      type: 'MessagerGroupCreateNestedOneWithoutMessagesInput',
    })
  },
})

export const MessageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('senderId', { type: 'Int' })
    t.nonNull.field('groupId', { type: 'Int' })
  },
})

export const MessageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('sender', {
      type: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
    })
    t.field('group', {
      type: 'MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput',
    })
  },
})

export const MessageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('senderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('groupId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('senderId', { type: 'Int' })
    t.nonNull.field('groupId', { type: 'Int' })
  },
})

export const MessageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
  },
})

export const MessageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('senderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('groupId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const EnumUserRoleEnumFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleEnumFilter',
  definition(t) {
    t.field('equals', { type: 'UserRoleEnum' })
    t.list.field('in', { type: 'UserRoleEnum' })
    t.list.field('notIn', { type: 'UserRoleEnum' })
    t.field('not', { type: 'NestedEnumUserRoleEnumFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const MessageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'MessageWhereInput' })
    t.field('some', { type: 'MessageWhereInput' })
    t.field('none', { type: 'MessageWhereInput' })
  },
})

export const MessagerGroupListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupListRelationFilter',
  definition(t) {
    t.field('every', { type: 'MessagerGroupWhereInput' })
    t.field('some', { type: 'MessagerGroupWhereInput' })
    t.field('none', { type: 'MessagerGroupWhereInput' })
  },
})

export const ResponseListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ResponseWhereInput' })
    t.field('some', { type: 'ResponseWhereInput' })
    t.field('none', { type: 'ResponseWhereInput' })
  },
})

export const AnswerListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerListRelationFilter',
  definition(t) {
    t.field('every', { type: 'AnswerWhereInput' })
    t.field('some', { type: 'AnswerWhereInput' })
    t.field('none', { type: 'AnswerWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const MessageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const MessagerGroupOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ResponseOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const AnswerOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'UserOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('passwordHash', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('tgLink', { type: 'SortOrder' })
    t.field('vkLink', { type: 'SortOrder' })
    t.field('phone', { type: 'SortOrder' })
    t.field('fullname', { type: 'SortOrder' })
    t.field('logo', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('passwordHash', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('tgLink', { type: 'SortOrder' })
    t.field('vkLink', { type: 'SortOrder' })
    t.field('phone', { type: 'SortOrder' })
    t.field('fullname', { type: 'SortOrder' })
    t.field('logo', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('passwordHash', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('tgLink', { type: 'SortOrder' })
    t.field('vkLink', { type: 'SortOrder' })
    t.field('phone', { type: 'SortOrder' })
    t.field('fullname', { type: 'SortOrder' })
    t.field('logo', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const EnumUserRoleEnumWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleEnumWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRoleEnum' })
    t.list.field('in', { type: 'UserRoleEnum' })
    t.list.field('notIn', { type: 'UserRoleEnum' })
    t.field('not', { type: 'NestedEnumUserRoleEnumWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleEnumFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleEnumFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const DirectionListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionListRelationFilter',
  definition(t) {
    t.field('every', { type: 'DirectionWhereInput' })
    t.field('some', { type: 'DirectionWhereInput' })
    t.field('none', { type: 'DirectionWhereInput' })
  },
})

export const DirectionOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const SpecializationOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', {
      type: 'SpecializationOrderByRelevanceFieldEnum',
    })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const SpecializationCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const SpecializationAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const SpecializationMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const SpecializationMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const SpecializationSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const EnumDirectionTypeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumDirectionTypeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DirectionType' })
    t.list.field('in', { type: 'DirectionType' })
    t.list.field('notIn', { type: 'DirectionType' })
    t.field('not', { type: 'NestedEnumDirectionTypeNullableFilter' })
  },
})

export const SpecializationRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationRelationFilter',
  definition(t) {
    t.field('is', { type: 'SpecializationWhereInput' })
    t.field('isNot', { type: 'SpecializationWhereInput' })
  },
})

export const DirectionOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'DirectionOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const DirectionCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
  },
})

export const DirectionAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
  },
})

export const DirectionMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
  },
})

export const DirectionMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
  },
})

export const DirectionSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('specializationId', { type: 'SortOrder' })
  },
})

export const EnumDirectionTypeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumDirectionTypeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DirectionType' })
    t.list.field('in', { type: 'DirectionType' })
    t.list.field('notIn', { type: 'DirectionType' })
    t.field('not', {
      type: 'NestedEnumDirectionTypeNullableWithAggregatesFilter',
    })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedEnumDirectionTypeNullableFilter' })
    t.field('_max', { type: 'NestedEnumDirectionTypeNullableFilter' })
  },
})

export const UserRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const DirectionRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionRelationFilter',
  definition(t) {
    t.field('is', { type: 'DirectionWhereInput' })
    t.field('isNot', { type: 'DirectionWhereInput' })
  },
})

export const TestListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestListRelationFilter',
  definition(t) {
    t.field('every', { type: 'TestWhereInput' })
    t.field('some', { type: 'TestWhereInput' })
    t.field('none', { type: 'TestWhereInput' })
  },
})

export const TestOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ResponseOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'ResponseOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const ResponseCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
  },
})

export const ResponseAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
  },
})

export const ResponseMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
  },
})

export const ResponseMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
  },
})

export const ResponseSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('directionId', { type: 'SortOrder' })
  },
})

export const TaskListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskListRelationFilter',
  definition(t) {
    t.field('every', { type: 'TaskWhereInput' })
    t.field('some', { type: 'TaskWhereInput' })
    t.field('none', { type: 'TaskWhereInput' })
  },
})

export const TaskOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const TestOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'TestOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const TestCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const TestAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const TestMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const TestMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const TestSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const EnumTaskTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumTaskTypeFilter',
  definition(t) {
    t.field('equals', { type: 'TaskType' })
    t.list.field('in', { type: 'TaskType' })
    t.list.field('notIn', { type: 'TaskType' })
    t.field('not', { type: 'NestedEnumTaskTypeFilter' })
  },
})

export const StringNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'String' })
    t.field('has', { type: 'String' })
    t.list.field('hasEvery', { type: 'String' })
    t.list.field('hasSome', { type: 'String' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const IntNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Int' })
    t.field('has', { type: 'Int' })
    t.list.field('hasEvery', { type: 'Int' })
    t.list.field('hasSome', { type: 'Int' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const TestNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'TestWhereInput' })
    t.field('isNot', { type: 'TestWhereInput' })
  },
})

export const TaskOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'TaskOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const TaskCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('question', { type: 'SortOrder' })
    t.field('variants', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrder' })
    t.field('correctMultipleAnswer', { type: 'SortOrder' })
  },
})

export const TaskAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrder' })
    t.field('correctMultipleAnswer', { type: 'SortOrder' })
  },
})

export const TaskMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('question', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrder' })
  },
})

export const TaskMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('question', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrder' })
  },
})

export const TaskSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
    t.field('correctSingleAnswer', { type: 'SortOrder' })
    t.field('correctMultipleAnswer', { type: 'SortOrder' })
  },
})

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const EnumTaskTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumTaskTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'TaskType' })
    t.list.field('in', { type: 'TaskType' })
    t.list.field('notIn', { type: 'TaskType' })
    t.field('not', { type: 'NestedEnumTaskTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumTaskTypeFilter' })
    t.field('_max', { type: 'NestedEnumTaskTypeFilter' })
  },
})

export const TestRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestRelationFilter',
  definition(t) {
    t.field('is', { type: 'TestWhereInput' })
    t.field('isNot', { type: 'TestWhereInput' })
  },
})

export const AnswerOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'AnswerOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const AnswerCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('answer', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
  },
})

export const AnswerAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
  },
})

export const AnswerMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('answer', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
  },
})

export const AnswerMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('answer', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
  },
})

export const AnswerSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('testId', { type: 'SortOrder' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const UserListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserWhereInput' })
    t.field('some', { type: 'UserWhereInput' })
    t.field('none', { type: 'UserWhereInput' })
  },
})

export const UserOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const MessagerGroupOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', {
      type: 'MessagerGroupOrderByRelevanceFieldEnum',
    })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const MessagerGroupCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrder' })
    t.field('active', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('icon', { type: 'SortOrder' })
  },
})

export const MessagerGroupAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrder' })
  },
})

export const MessagerGroupMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrder' })
    t.field('active', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('icon', { type: 'SortOrder' })
  },
})

export const MessagerGroupMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrder' })
    t.field('active', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('icon', { type: 'SortOrder' })
  },
})

export const MessagerGroupSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('creatorId', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const MessagerGroupRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupRelationFilter',
  definition(t) {
    t.field('is', { type: 'MessagerGroupWhereInput' })
    t.field('isNot', { type: 'MessagerGroupWhereInput' })
  },
})

export const MessageOrderByRelevanceInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByRelevanceInput',
  definition(t) {
    t.nonNull.field('fields', { type: 'MessageOrderByRelevanceFieldEnum' })
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.nonNull.field('search', { type: 'String' })
  },
})

export const MessageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('files', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const MessageAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const MessageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const MessageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('text', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const MessageSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('senderId', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const MessageCreateNestedManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutSenderInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutSenderInput',
    })
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
  },
})

export const MessagerGroupCreateNestedManyWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateNestedManyWithoutUsersInput',
  definition(t) {
    t.list.field('create', { type: 'MessagerGroupCreateWithoutUsersInput' })
    t.list.field('connectOrCreate', {
      type: 'MessagerGroupCreateOrConnectWithoutUsersInput',
    })
    t.list.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
  },
})

export const ResponseCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'ResponseCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
  },
})

export const AnswerCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
  },
})

export const MessageUncheckedCreateNestedManyWithoutSenderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutSenderInput',
      })
      t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    },
  })

export const MessagerGroupUncheckedCreateNestedManyWithoutUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUncheckedCreateNestedManyWithoutUsersInput',
    definition(t) {
      t.list.field('create', { type: 'MessagerGroupCreateWithoutUsersInput' })
      t.list.field('connectOrCreate', {
        type: 'MessagerGroupCreateOrConnectWithoutUsersInput',
      })
      t.list.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
    },
  })

export const ResponseUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', { type: 'ResponseCreateManyUserInputEnvelope' })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    },
  })

export const AnswerUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const EnumUserRoleEnumFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleEnumFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'UserRoleEnum' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const MessageUpdateManyWithoutSenderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutSenderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutSenderInput',
    })
    t.list.field('upsert', {
      type: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
    })
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
    t.list.field('set', { type: 'MessageWhereUniqueInput' })
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
    t.list.field('delete', { type: 'MessageWhereUniqueInput' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    t.list.field('update', {
      type: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
    })
    t.list.field('updateMany', {
      type: 'MessageUpdateManyWithWhereWithoutSenderInput',
    })
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
  },
})

export const MessagerGroupUpdateManyWithoutUsersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpdateManyWithoutUsersNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessagerGroupCreateWithoutUsersInput' })
    t.list.field('connectOrCreate', {
      type: 'MessagerGroupCreateOrConnectWithoutUsersInput',
    })
    t.list.field('upsert', {
      type: 'MessagerGroupUpsertWithWhereUniqueWithoutUsersInput',
    })
    t.list.field('set', { type: 'MessagerGroupWhereUniqueInput' })
    t.list.field('disconnect', { type: 'MessagerGroupWhereUniqueInput' })
    t.list.field('delete', { type: 'MessagerGroupWhereUniqueInput' })
    t.list.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
    t.list.field('update', {
      type: 'MessagerGroupUpdateWithWhereUniqueWithoutUsersInput',
    })
    t.list.field('updateMany', {
      type: 'MessagerGroupUpdateManyWithWhereWithoutUsersInput',
    })
    t.list.field('deleteMany', { type: 'MessagerGroupScalarWhereInput' })
  },
})

export const ResponseUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'ResponseUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'ResponseCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'ResponseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('update', {
      type: 'ResponseUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'ResponseUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
  },
})

export const AnswerUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'AnswerUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'AnswerWhereUniqueInput' })
    t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('update', {
      type: 'AnswerUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'AnswerUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const MessageUncheckedUpdateManyWithoutSenderNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutSenderInput',
      })
      t.list.field('upsert', {
        type: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
      })
      t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
      t.list.field('set', { type: 'MessageWhereUniqueInput' })
      t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
      t.list.field('delete', { type: 'MessageWhereUniqueInput' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
      t.list.field('update', {
        type: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
      })
      t.list.field('updateMany', {
        type: 'MessageUpdateManyWithWhereWithoutSenderInput',
      })
      t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
    },
  })

export const MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput',
    definition(t) {
      t.list.field('create', { type: 'MessagerGroupCreateWithoutUsersInput' })
      t.list.field('connectOrCreate', {
        type: 'MessagerGroupCreateOrConnectWithoutUsersInput',
      })
      t.list.field('upsert', {
        type: 'MessagerGroupUpsertWithWhereUniqueWithoutUsersInput',
      })
      t.list.field('set', { type: 'MessagerGroupWhereUniqueInput' })
      t.list.field('disconnect', { type: 'MessagerGroupWhereUniqueInput' })
      t.list.field('delete', { type: 'MessagerGroupWhereUniqueInput' })
      t.list.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
      t.list.field('update', {
        type: 'MessagerGroupUpdateWithWhereUniqueWithoutUsersInput',
      })
      t.list.field('updateMany', {
        type: 'MessagerGroupUpdateManyWithWhereWithoutUsersInput',
      })
      t.list.field('deleteMany', { type: 'MessagerGroupScalarWhereInput' })
    },
  })

export const ResponseUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'ResponseUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', { type: 'ResponseCreateManyUserInputEnvelope' })
      t.list.field('set', { type: 'ResponseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('update', {
        type: 'ResponseUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'ResponseUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
    },
  })

export const AnswerUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'AnswerUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'AnswerWhereUniqueInput' })
    t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('update', {
      type: 'AnswerUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'AnswerUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
  },
})

export const DirectionCreateNestedManyWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionCreateNestedManyWithoutSpecializationInput',
    definition(t) {
      t.list.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
      t.list.field('connectOrCreate', {
        type: 'DirectionCreateOrConnectWithoutSpecializationInput',
      })
      t.field('createMany', {
        type: 'DirectionCreateManySpecializationInputEnvelope',
      })
      t.list.field('connect', { type: 'DirectionWhereUniqueInput' })
    },
  })

export const DirectionUncheckedCreateNestedManyWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUncheckedCreateNestedManyWithoutSpecializationInput',
    definition(t) {
      t.list.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
      t.list.field('connectOrCreate', {
        type: 'DirectionCreateOrConnectWithoutSpecializationInput',
      })
      t.field('createMany', {
        type: 'DirectionCreateManySpecializationInputEnvelope',
      })
      t.list.field('connect', { type: 'DirectionWhereUniqueInput' })
    },
  })

export const DirectionUpdateManyWithoutSpecializationNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpdateManyWithoutSpecializationNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
      t.list.field('connectOrCreate', {
        type: 'DirectionCreateOrConnectWithoutSpecializationInput',
      })
      t.list.field('upsert', {
        type: 'DirectionUpsertWithWhereUniqueWithoutSpecializationInput',
      })
      t.field('createMany', {
        type: 'DirectionCreateManySpecializationInputEnvelope',
      })
      t.list.field('set', { type: 'DirectionWhereUniqueInput' })
      t.list.field('disconnect', { type: 'DirectionWhereUniqueInput' })
      t.list.field('delete', { type: 'DirectionWhereUniqueInput' })
      t.list.field('connect', { type: 'DirectionWhereUniqueInput' })
      t.list.field('update', {
        type: 'DirectionUpdateWithWhereUniqueWithoutSpecializationInput',
      })
      t.list.field('updateMany', {
        type: 'DirectionUpdateManyWithWhereWithoutSpecializationInput',
      })
      t.list.field('deleteMany', { type: 'DirectionScalarWhereInput' })
    },
  })

export const DirectionUncheckedUpdateManyWithoutSpecializationNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUncheckedUpdateManyWithoutSpecializationNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
      t.list.field('connectOrCreate', {
        type: 'DirectionCreateOrConnectWithoutSpecializationInput',
      })
      t.list.field('upsert', {
        type: 'DirectionUpsertWithWhereUniqueWithoutSpecializationInput',
      })
      t.field('createMany', {
        type: 'DirectionCreateManySpecializationInputEnvelope',
      })
      t.list.field('set', { type: 'DirectionWhereUniqueInput' })
      t.list.field('disconnect', { type: 'DirectionWhereUniqueInput' })
      t.list.field('delete', { type: 'DirectionWhereUniqueInput' })
      t.list.field('connect', { type: 'DirectionWhereUniqueInput' })
      t.list.field('update', {
        type: 'DirectionUpdateWithWhereUniqueWithoutSpecializationInput',
      })
      t.list.field('updateMany', {
        type: 'DirectionUpdateManyWithWhereWithoutSpecializationInput',
      })
      t.list.field('deleteMany', { type: 'DirectionScalarWhereInput' })
    },
  })

export const ResponseCreateNestedManyWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateNestedManyWithoutDirectionInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutDirectionInput',
    })
    t.field('createMany', { type: 'ResponseCreateManyDirectionInputEnvelope' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
  },
})

export const SpecializationCreateNestedOneWithoutDirectionsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationCreateNestedOneWithoutDirectionsInput',
    definition(t) {
      t.field('create', { type: 'SpecializationCreateWithoutDirectionsInput' })
      t.field('connectOrCreate', {
        type: 'SpecializationCreateOrConnectWithoutDirectionsInput',
      })
      t.field('connect', { type: 'SpecializationWhereUniqueInput' })
    },
  })

export const ResponseUncheckedCreateNestedManyWithoutDirectionInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedCreateNestedManyWithoutDirectionInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutDirectionInput',
      })
      t.field('createMany', {
        type: 'ResponseCreateManyDirectionInputEnvelope',
      })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    },
  })

export const NullableEnumDirectionTypeFieldUpdateOperationsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    definition(t) {
      t.field('set', { type: 'DirectionType' })
    },
  })

export const ResponseUpdateManyWithoutDirectionNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithoutDirectionNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutDirectionInput',
    })
    t.list.field('upsert', {
      type: 'ResponseUpsertWithWhereUniqueWithoutDirectionInput',
    })
    t.field('createMany', { type: 'ResponseCreateManyDirectionInputEnvelope' })
    t.list.field('set', { type: 'ResponseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('update', {
      type: 'ResponseUpdateWithWhereUniqueWithoutDirectionInput',
    })
    t.list.field('updateMany', {
      type: 'ResponseUpdateManyWithWhereWithoutDirectionInput',
    })
    t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
  },
})

export const SpecializationUpdateOneRequiredWithoutDirectionsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationUpdateOneRequiredWithoutDirectionsNestedInput',
    definition(t) {
      t.field('create', { type: 'SpecializationCreateWithoutDirectionsInput' })
      t.field('connectOrCreate', {
        type: 'SpecializationCreateOrConnectWithoutDirectionsInput',
      })
      t.field('upsert', { type: 'SpecializationUpsertWithoutDirectionsInput' })
      t.field('connect', { type: 'SpecializationWhereUniqueInput' })
      t.field('update', {
        type: 'SpecializationUpdateToOneWithWhereWithoutDirectionsInput',
      })
    },
  })

export const ResponseUncheckedUpdateManyWithoutDirectionNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedUpdateManyWithoutDirectionNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutDirectionInput',
      })
      t.list.field('upsert', {
        type: 'ResponseUpsertWithWhereUniqueWithoutDirectionInput',
      })
      t.field('createMany', {
        type: 'ResponseCreateManyDirectionInputEnvelope',
      })
      t.list.field('set', { type: 'ResponseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('update', {
        type: 'ResponseUpdateWithWhereUniqueWithoutDirectionInput',
      })
      t.list.field('updateMany', {
        type: 'ResponseUpdateManyWithWhereWithoutDirectionInput',
      })
      t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
    },
  })

export const UserCreateNestedOneWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutResponsesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutResponsesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutResponsesInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const DirectionCreateNestedOneWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateNestedOneWithoutResponsesInput',
  definition(t) {
    t.field('create', { type: 'DirectionCreateWithoutResponsesInput' })
    t.field('connectOrCreate', {
      type: 'DirectionCreateOrConnectWithoutResponsesInput',
    })
    t.field('connect', { type: 'DirectionWhereUniqueInput' })
  },
})

export const TestCreateNestedManyWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateNestedManyWithoutResponseInput',
  definition(t) {
    t.list.field('create', { type: 'TestCreateWithoutResponseInput' })
    t.list.field('connectOrCreate', {
      type: 'TestCreateOrConnectWithoutResponseInput',
    })
    t.list.field('connect', { type: 'TestWhereUniqueInput' })
  },
})

export const AnswerCreateNestedManyWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateNestedManyWithoutResponseInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutResponseInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutResponseInput',
    })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
  },
})

export const TestUncheckedCreateNestedManyWithoutResponseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'TestUncheckedCreateNestedManyWithoutResponseInput',
    definition(t) {
      t.list.field('create', { type: 'TestCreateWithoutResponseInput' })
      t.list.field('connectOrCreate', {
        type: 'TestCreateOrConnectWithoutResponseInput',
      })
      t.list.field('connect', { type: 'TestWhereUniqueInput' })
    },
  })

export const AnswerUncheckedCreateNestedManyWithoutResponseInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'AnswerUncheckedCreateNestedManyWithoutResponseInput',
    definition(t) {
      t.list.field('create', { type: 'AnswerCreateWithoutResponseInput' })
      t.list.field('connectOrCreate', {
        type: 'AnswerCreateOrConnectWithoutResponseInput',
      })
      t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    },
  })

export const UserUpdateOneRequiredWithoutResponsesNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateOneRequiredWithoutResponsesNestedInput',
    definition(t) {
      t.field('create', { type: 'UserCreateWithoutResponsesInput' })
      t.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutResponsesInput',
      })
      t.field('upsert', { type: 'UserUpsertWithoutResponsesInput' })
      t.field('connect', { type: 'UserWhereUniqueInput' })
      t.field('update', {
        type: 'UserUpdateToOneWithWhereWithoutResponsesInput',
      })
    },
  },
)

export const DirectionUpdateOneRequiredWithoutResponsesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpdateOneRequiredWithoutResponsesNestedInput',
    definition(t) {
      t.field('create', { type: 'DirectionCreateWithoutResponsesInput' })
      t.field('connectOrCreate', {
        type: 'DirectionCreateOrConnectWithoutResponsesInput',
      })
      t.field('upsert', { type: 'DirectionUpsertWithoutResponsesInput' })
      t.field('connect', { type: 'DirectionWhereUniqueInput' })
      t.field('update', {
        type: 'DirectionUpdateToOneWithWhereWithoutResponsesInput',
      })
    },
  })

export const TestUpdateManyWithoutResponseNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateManyWithoutResponseNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TestCreateWithoutResponseInput' })
    t.list.field('connectOrCreate', {
      type: 'TestCreateOrConnectWithoutResponseInput',
    })
    t.list.field('upsert', {
      type: 'TestUpsertWithWhereUniqueWithoutResponseInput',
    })
    t.list.field('set', { type: 'TestWhereUniqueInput' })
    t.list.field('disconnect', { type: 'TestWhereUniqueInput' })
    t.list.field('delete', { type: 'TestWhereUniqueInput' })
    t.list.field('connect', { type: 'TestWhereUniqueInput' })
    t.list.field('update', {
      type: 'TestUpdateWithWhereUniqueWithoutResponseInput',
    })
    t.list.field('updateMany', {
      type: 'TestUpdateManyWithWhereWithoutResponseInput',
    })
    t.list.field('deleteMany', { type: 'TestScalarWhereInput' })
  },
})

export const AnswerUpdateManyWithoutResponseNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithoutResponseNestedInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutResponseInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutResponseInput',
    })
    t.list.field('upsert', {
      type: 'AnswerUpsertWithWhereUniqueWithoutResponseInput',
    })
    t.list.field('set', { type: 'AnswerWhereUniqueInput' })
    t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('update', {
      type: 'AnswerUpdateWithWhereUniqueWithoutResponseInput',
    })
    t.list.field('updateMany', {
      type: 'AnswerUpdateManyWithWhereWithoutResponseInput',
    })
    t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
  },
})

export const TestUncheckedUpdateManyWithoutResponseNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'TestUncheckedUpdateManyWithoutResponseNestedInput',
    definition(t) {
      t.list.field('create', { type: 'TestCreateWithoutResponseInput' })
      t.list.field('connectOrCreate', {
        type: 'TestCreateOrConnectWithoutResponseInput',
      })
      t.list.field('upsert', {
        type: 'TestUpsertWithWhereUniqueWithoutResponseInput',
      })
      t.list.field('set', { type: 'TestWhereUniqueInput' })
      t.list.field('disconnect', { type: 'TestWhereUniqueInput' })
      t.list.field('delete', { type: 'TestWhereUniqueInput' })
      t.list.field('connect', { type: 'TestWhereUniqueInput' })
      t.list.field('update', {
        type: 'TestUpdateWithWhereUniqueWithoutResponseInput',
      })
      t.list.field('updateMany', {
        type: 'TestUpdateManyWithWhereWithoutResponseInput',
      })
      t.list.field('deleteMany', { type: 'TestScalarWhereInput' })
    },
  })

export const AnswerUncheckedUpdateManyWithoutResponseNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'AnswerUncheckedUpdateManyWithoutResponseNestedInput',
    definition(t) {
      t.list.field('create', { type: 'AnswerCreateWithoutResponseInput' })
      t.list.field('connectOrCreate', {
        type: 'AnswerCreateOrConnectWithoutResponseInput',
      })
      t.list.field('upsert', {
        type: 'AnswerUpsertWithWhereUniqueWithoutResponseInput',
      })
      t.list.field('set', { type: 'AnswerWhereUniqueInput' })
      t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
      t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
      t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
      t.list.field('update', {
        type: 'AnswerUpdateWithWhereUniqueWithoutResponseInput',
      })
      t.list.field('updateMany', {
        type: 'AnswerUpdateManyWithWhereWithoutResponseInput',
      })
      t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
    },
  })

export const TaskCreateNestedManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateNestedManyWithoutTestInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'TaskCreateOrConnectWithoutTestInput',
    })
    t.field('createMany', { type: 'TaskCreateManyTestInputEnvelope' })
    t.list.field('connect', { type: 'TaskWhereUniqueInput' })
  },
})

export const AnswerCreateNestedManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateNestedManyWithoutTestInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutTestInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyTestInputEnvelope' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
  },
})

export const ResponseCreateNestedManyWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateNestedManyWithoutTestsInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutTestsInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutTestsInput',
    })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
  },
})

export const TaskUncheckedCreateNestedManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateNestedManyWithoutTestInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'TaskCreateOrConnectWithoutTestInput',
    })
    t.field('createMany', { type: 'TaskCreateManyTestInputEnvelope' })
    t.list.field('connect', { type: 'TaskWhereUniqueInput' })
  },
})

export const AnswerUncheckedCreateNestedManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateNestedManyWithoutTestInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutTestInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyTestInputEnvelope' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
  },
})

export const ResponseUncheckedCreateNestedManyWithoutTestsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedCreateNestedManyWithoutTestsInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutTestsInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutTestsInput',
      })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    },
  })

export const TaskUpdateManyWithoutTestNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithoutTestNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'TaskCreateOrConnectWithoutTestInput',
    })
    t.list.field('upsert', {
      type: 'TaskUpsertWithWhereUniqueWithoutTestInput',
    })
    t.field('createMany', { type: 'TaskCreateManyTestInputEnvelope' })
    t.list.field('set', { type: 'TaskWhereUniqueInput' })
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' })
    t.list.field('delete', { type: 'TaskWhereUniqueInput' })
    t.list.field('connect', { type: 'TaskWhereUniqueInput' })
    t.list.field('update', {
      type: 'TaskUpdateWithWhereUniqueWithoutTestInput',
    })
    t.list.field('updateMany', {
      type: 'TaskUpdateManyWithWhereWithoutTestInput',
    })
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' })
  },
})

export const AnswerUpdateManyWithoutTestNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithoutTestNestedInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutTestInput',
    })
    t.list.field('upsert', {
      type: 'AnswerUpsertWithWhereUniqueWithoutTestInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyTestInputEnvelope' })
    t.list.field('set', { type: 'AnswerWhereUniqueInput' })
    t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('update', {
      type: 'AnswerUpdateWithWhereUniqueWithoutTestInput',
    })
    t.list.field('updateMany', {
      type: 'AnswerUpdateManyWithWhereWithoutTestInput',
    })
    t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
  },
})

export const ResponseUpdateManyWithoutTestsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithoutTestsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutTestsInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutTestsInput',
    })
    t.list.field('upsert', {
      type: 'ResponseUpsertWithWhereUniqueWithoutTestsInput',
    })
    t.list.field('set', { type: 'ResponseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('update', {
      type: 'ResponseUpdateWithWhereUniqueWithoutTestsInput',
    })
    t.list.field('updateMany', {
      type: 'ResponseUpdateManyWithWhereWithoutTestsInput',
    })
    t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
  },
})

export const TaskUncheckedUpdateManyWithoutTestNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutTestNestedInput',
  definition(t) {
    t.list.field('create', { type: 'TaskCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'TaskCreateOrConnectWithoutTestInput',
    })
    t.list.field('upsert', {
      type: 'TaskUpsertWithWhereUniqueWithoutTestInput',
    })
    t.field('createMany', { type: 'TaskCreateManyTestInputEnvelope' })
    t.list.field('set', { type: 'TaskWhereUniqueInput' })
    t.list.field('disconnect', { type: 'TaskWhereUniqueInput' })
    t.list.field('delete', { type: 'TaskWhereUniqueInput' })
    t.list.field('connect', { type: 'TaskWhereUniqueInput' })
    t.list.field('update', {
      type: 'TaskUpdateWithWhereUniqueWithoutTestInput',
    })
    t.list.field('updateMany', {
      type: 'TaskUpdateManyWithWhereWithoutTestInput',
    })
    t.list.field('deleteMany', { type: 'TaskScalarWhereInput' })
  },
})

export const AnswerUncheckedUpdateManyWithoutTestNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyWithoutTestNestedInput',
  definition(t) {
    t.list.field('create', { type: 'AnswerCreateWithoutTestInput' })
    t.list.field('connectOrCreate', {
      type: 'AnswerCreateOrConnectWithoutTestInput',
    })
    t.list.field('upsert', {
      type: 'AnswerUpsertWithWhereUniqueWithoutTestInput',
    })
    t.field('createMany', { type: 'AnswerCreateManyTestInputEnvelope' })
    t.list.field('set', { type: 'AnswerWhereUniqueInput' })
    t.list.field('disconnect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('delete', { type: 'AnswerWhereUniqueInput' })
    t.list.field('connect', { type: 'AnswerWhereUniqueInput' })
    t.list.field('update', {
      type: 'AnswerUpdateWithWhereUniqueWithoutTestInput',
    })
    t.list.field('updateMany', {
      type: 'AnswerUpdateManyWithWhereWithoutTestInput',
    })
    t.list.field('deleteMany', { type: 'AnswerScalarWhereInput' })
  },
})

export const ResponseUncheckedUpdateManyWithoutTestsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedUpdateManyWithoutTestsNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutTestsInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutTestsInput',
      })
      t.list.field('upsert', {
        type: 'ResponseUpsertWithWhereUniqueWithoutTestsInput',
      })
      t.list.field('set', { type: 'ResponseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('update', {
        type: 'ResponseUpdateWithWhereUniqueWithoutTestsInput',
      })
      t.list.field('updateMany', {
        type: 'ResponseUpdateManyWithWhereWithoutTestsInput',
      })
      t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
    },
  })

export const TaskCreatevariantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreatevariantsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const TaskCreatecorrectMultipleAnswerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreatecorrectMultipleAnswerInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Int' })
  },
})

export const TestCreateNestedOneWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateNestedOneWithoutTasksInput',
  definition(t) {
    t.field('create', { type: 'TestCreateWithoutTasksInput' })
    t.field('connectOrCreate', { type: 'TestCreateOrConnectWithoutTasksInput' })
    t.field('connect', { type: 'TestWhereUniqueInput' })
  },
})

export const EnumTaskTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumTaskTypeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'TaskType' })
  },
})

export const TaskUpdatevariantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdatevariantsInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const TaskUpdatecorrectMultipleAnswerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdatecorrectMultipleAnswerInput',
  definition(t) {
    t.list.field('set', { type: 'Int' })
    t.list.field('push', { type: 'Int' })
  },
})

export const TestUpdateOneWithoutTasksNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateOneWithoutTasksNestedInput',
  definition(t) {
    t.field('create', { type: 'TestCreateWithoutTasksInput' })
    t.field('connectOrCreate', { type: 'TestCreateOrConnectWithoutTasksInput' })
    t.field('upsert', { type: 'TestUpsertWithoutTasksInput' })
    t.field('disconnect', { type: 'TestWhereInput' })
    t.field('delete', { type: 'TestWhereInput' })
    t.field('connect', { type: 'TestWhereUniqueInput' })
    t.field('update', { type: 'TestUpdateToOneWithWhereWithoutTasksInput' })
  },
})

export const UserCreateNestedOneWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutAnswersInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAnswersInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutAnswersInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const TestCreateNestedOneWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateNestedOneWithoutAnswersInput',
  definition(t) {
    t.field('create', { type: 'TestCreateWithoutAnswersInput' })
    t.field('connectOrCreate', {
      type: 'TestCreateOrConnectWithoutAnswersInput',
    })
    t.field('connect', { type: 'TestWhereUniqueInput' })
  },
})

export const ResponseCreateNestedManyWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateNestedManyWithoutAnswersInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutAnswersInput',
    })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
  },
})

export const ResponseUncheckedCreateNestedManyWithoutAnswersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedCreateNestedManyWithoutAnswersInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutAnswersInput',
      })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    },
  })

export const UserUpdateOneRequiredWithoutAnswersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutAnswersNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAnswersInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutAnswersInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutAnswersInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutAnswersInput' })
  },
})

export const TestUpdateOneRequiredWithoutAnswersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateOneRequiredWithoutAnswersNestedInput',
  definition(t) {
    t.field('create', { type: 'TestCreateWithoutAnswersInput' })
    t.field('connectOrCreate', {
      type: 'TestCreateOrConnectWithoutAnswersInput',
    })
    t.field('upsert', { type: 'TestUpsertWithoutAnswersInput' })
    t.field('connect', { type: 'TestWhereUniqueInput' })
    t.field('update', { type: 'TestUpdateToOneWithWhereWithoutAnswersInput' })
  },
})

export const ResponseUpdateManyWithoutAnswersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithoutAnswersNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
    t.list.field('connectOrCreate', {
      type: 'ResponseCreateOrConnectWithoutAnswersInput',
    })
    t.list.field('upsert', {
      type: 'ResponseUpsertWithWhereUniqueWithoutAnswersInput',
    })
    t.list.field('set', { type: 'ResponseWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
    t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
    t.list.field('update', {
      type: 'ResponseUpdateWithWhereUniqueWithoutAnswersInput',
    })
    t.list.field('updateMany', {
      type: 'ResponseUpdateManyWithWhereWithoutAnswersInput',
    })
    t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
  },
})

export const ResponseUncheckedUpdateManyWithoutAnswersNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedUpdateManyWithoutAnswersNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
      t.list.field('connectOrCreate', {
        type: 'ResponseCreateOrConnectWithoutAnswersInput',
      })
      t.list.field('upsert', {
        type: 'ResponseUpsertWithWhereUniqueWithoutAnswersInput',
      })
      t.list.field('set', { type: 'ResponseWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('delete', { type: 'ResponseWhereUniqueInput' })
      t.list.field('connect', { type: 'ResponseWhereUniqueInput' })
      t.list.field('update', {
        type: 'ResponseUpdateWithWhereUniqueWithoutAnswersInput',
      })
      t.list.field('updateMany', {
        type: 'ResponseUpdateManyWithWhereWithoutAnswersInput',
      })
      t.list.field('deleteMany', { type: 'ResponseScalarWhereInput' })
    },
  })

export const UserCreateNestedManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedManyWithoutGroupsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupsInput',
    })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const MessageCreateNestedManyWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutGroupInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutGroupInput',
    })
    t.field('createMany', { type: 'MessageCreateManyGroupInputEnvelope' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
  },
})

export const UserUncheckedCreateNestedManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedManyWithoutGroupsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupsInput',
    })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const MessageUncheckedCreateNestedManyWithoutGroupInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedCreateNestedManyWithoutGroupInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutGroupInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutGroupInput',
      })
      t.field('createMany', { type: 'MessageCreateManyGroupInputEnvelope' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    },
  })

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const UserUpdateManyWithoutGroupsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithoutGroupsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupsInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutGroupsInput',
    })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutGroupsInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutGroupsInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const MessageUpdateManyWithoutGroupNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutGroupNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutGroupInput',
    })
    t.list.field('upsert', {
      type: 'MessageUpsertWithWhereUniqueWithoutGroupInput',
    })
    t.field('createMany', { type: 'MessageCreateManyGroupInputEnvelope' })
    t.list.field('set', { type: 'MessageWhereUniqueInput' })
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
    t.list.field('delete', { type: 'MessageWhereUniqueInput' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    t.list.field('update', {
      type: 'MessageUpdateWithWhereUniqueWithoutGroupInput',
    })
    t.list.field('updateMany', {
      type: 'MessageUpdateManyWithWhereWithoutGroupInput',
    })
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
  },
})

export const UserUncheckedUpdateManyWithoutGroupsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutGroupsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupsInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutGroupsInput',
    })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutGroupsInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutGroupsInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const MessageUncheckedUpdateManyWithoutGroupNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedUpdateManyWithoutGroupNestedInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutGroupInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutGroupInput',
      })
      t.list.field('upsert', {
        type: 'MessageUpsertWithWhereUniqueWithoutGroupInput',
      })
      t.field('createMany', { type: 'MessageCreateManyGroupInputEnvelope' })
      t.list.field('set', { type: 'MessageWhereUniqueInput' })
      t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
      t.list.field('delete', { type: 'MessageWhereUniqueInput' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
      t.list.field('update', {
        type: 'MessageUpdateWithWhereUniqueWithoutGroupInput',
      })
      t.list.field('updateMany', {
        type: 'MessageUpdateManyWithWhereWithoutGroupInput',
      })
      t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
    },
  })

export const MessageCreatefilesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreatefilesInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const UserCreateNestedOneWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutMessagesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutMessagesInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const MessagerGroupCreateNestedOneWithoutMessagesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupCreateNestedOneWithoutMessagesInput',
    definition(t) {
      t.field('create', { type: 'MessagerGroupCreateWithoutMessagesInput' })
      t.field('connectOrCreate', {
        type: 'MessagerGroupCreateOrConnectWithoutMessagesInput',
      })
      t.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
    },
  },
)

export const MessageUpdatefilesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdatefilesInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const UserUpdateOneRequiredWithoutMessagesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutMessagesInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutMessagesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateToOneWithWhereWithoutMessagesInput' })
  },
})

export const MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput',
    definition(t) {
      t.field('create', { type: 'MessagerGroupCreateWithoutMessagesInput' })
      t.field('connectOrCreate', {
        type: 'MessagerGroupCreateOrConnectWithoutMessagesInput',
      })
      t.field('upsert', { type: 'MessagerGroupUpsertWithoutMessagesInput' })
      t.field('connect', { type: 'MessagerGroupWhereUniqueInput' })
      t.field('update', {
        type: 'MessagerGroupUpdateToOneWithWhereWithoutMessagesInput',
      })
    },
  })

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedEnumUserRoleEnumFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleEnumFilter',
  definition(t) {
    t.field('equals', { type: 'UserRoleEnum' })
    t.list.field('in', { type: 'UserRoleEnum' })
    t.list.field('notIn', { type: 'UserRoleEnum' })
    t.field('not', { type: 'NestedEnumUserRoleEnumFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedEnumUserRoleEnumWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleEnumWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRoleEnum' })
    t.list.field('in', { type: 'UserRoleEnum' })
    t.list.field('notIn', { type: 'UserRoleEnum' })
    t.field('not', { type: 'NestedEnumUserRoleEnumWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleEnumFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleEnumFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('search', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedEnumDirectionTypeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumDirectionTypeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DirectionType' })
    t.list.field('in', { type: 'DirectionType' })
    t.list.field('notIn', { type: 'DirectionType' })
    t.field('not', { type: 'NestedEnumDirectionTypeNullableFilter' })
  },
})

export const NestedEnumDirectionTypeNullableWithAggregatesFilter =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'NestedEnumDirectionTypeNullableWithAggregatesFilter',
    definition(t) {
      t.field('equals', { type: 'DirectionType' })
      t.list.field('in', { type: 'DirectionType' })
      t.list.field('notIn', { type: 'DirectionType' })
      t.field('not', {
        type: 'NestedEnumDirectionTypeNullableWithAggregatesFilter',
      })
      t.field('_count', { type: 'NestedIntNullableFilter' })
      t.field('_min', { type: 'NestedEnumDirectionTypeNullableFilter' })
      t.field('_max', { type: 'NestedEnumDirectionTypeNullableFilter' })
    },
  })

export const NestedEnumTaskTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumTaskTypeFilter',
  definition(t) {
    t.field('equals', { type: 'TaskType' })
    t.list.field('in', { type: 'TaskType' })
    t.list.field('notIn', { type: 'TaskType' })
    t.field('not', { type: 'NestedEnumTaskTypeFilter' })
  },
})

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  },
})

export const NestedEnumTaskTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumTaskTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'TaskType' })
    t.list.field('in', { type: 'TaskType' })
    t.list.field('notIn', { type: 'TaskType' })
    t.field('not', { type: 'NestedEnumTaskTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumTaskTypeFilter' })
    t.field('_max', { type: 'NestedEnumTaskTypeFilter' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const MessageCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutSenderInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('group', {
      type: 'MessagerGroupCreateNestedOneWithoutMessagesInput',
    })
  },
})

export const MessageUncheckedCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('groupId', { type: 'Int' })
  },
})

export const MessageCreateOrConnectWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('create', { type: 'MessageCreateWithoutSenderInput' })
  },
})

export const MessageCreateManySenderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManySenderInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const MessagerGroupCreateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateWithoutUsersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutGroupInput' })
  },
})

export const MessagerGroupUncheckedCreateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUncheckedCreateWithoutUsersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutGroupInput',
    })
  },
})

export const MessagerGroupCreateOrConnectWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateOrConnectWithoutUsersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessagerGroupWhereUniqueInput' })
    t.nonNull.field('create', { type: 'MessagerGroupCreateWithoutUsersInput' })
  },
})

export const ResponseCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateWithoutUserInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('direction', {
      type: 'DirectionCreateNestedOneWithoutResponsesInput',
    })
    t.field('tests', { type: 'TestCreateNestedManyWithoutResponseInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutResponseInput' })
  },
})

export const ResponseUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('directionId', { type: 'Int' })
    t.field('tests', {
      type: 'TestUncheckedCreateNestedManyWithoutResponseInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutResponseInput',
    })
  },
})

export const ResponseCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutUserInput' })
  },
})

export const ResponseCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ResponseCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const AnswerCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateWithoutUserInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('test', { type: 'TestCreateNestedOneWithoutAnswersInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutAnswersInput' })
  },
})

export const AnswerUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('testId', { type: 'Int' })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutAnswersInput',
    })
  },
})

export const AnswerCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutUserInput' })
  },
})

export const AnswerCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'AnswerCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const MessageUpsertWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('update', { type: 'MessageUpdateWithoutSenderInput' })
    t.nonNull.field('create', { type: 'MessageCreateWithoutSenderInput' })
  },
})

export const MessageUpdateWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('data', { type: 'MessageUpdateWithoutSenderInput' })
  },
})

export const MessageUpdateManyWithWhereWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' })
    t.nonNull.field('data', { type: 'MessageUpdateManyMutationInput' })
  },
})

export const MessageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereInput' })
    t.list.field('OR', { type: 'MessageScalarWhereInput' })
    t.list.field('NOT', { type: 'MessageScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringFilter' })
    t.field('files', { type: 'StringNullableListFilter' })
    t.field('senderId', { type: 'IntFilter' })
    t.field('groupId', { type: 'IntFilter' })
  },
})

export const MessagerGroupUpsertWithWhereUniqueWithoutUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUpsertWithWhereUniqueWithoutUsersInput',
    definition(t) {
      t.nonNull.field('where', { type: 'MessagerGroupWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'MessagerGroupUpdateWithoutUsersInput',
      })
      t.nonNull.field('create', {
        type: 'MessagerGroupCreateWithoutUsersInput',
      })
    },
  })

export const MessagerGroupUpdateWithWhereUniqueWithoutUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUpdateWithWhereUniqueWithoutUsersInput',
    definition(t) {
      t.nonNull.field('where', { type: 'MessagerGroupWhereUniqueInput' })
      t.nonNull.field('data', { type: 'MessagerGroupUpdateWithoutUsersInput' })
    },
  })

export const MessagerGroupUpdateManyWithWhereWithoutUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUpdateManyWithWhereWithoutUsersInput',
    definition(t) {
      t.nonNull.field('where', { type: 'MessagerGroupScalarWhereInput' })
      t.nonNull.field('data', { type: 'MessagerGroupUpdateManyMutationInput' })
    },
  })

export const MessagerGroupScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessagerGroupScalarWhereInput' })
    t.list.field('OR', { type: 'MessagerGroupScalarWhereInput' })
    t.list.field('NOT', { type: 'MessagerGroupScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('creatorId', { type: 'IntNullableFilter' })
    t.field('active', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('icon', { type: 'StringFilter' })
  },
})

export const ResponseUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ResponseUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutUserInput' })
  },
})

export const ResponseUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ResponseUpdateWithoutUserInput' })
  },
})

export const ResponseUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseScalarWhereInput' })
    t.nonNull.field('data', { type: 'ResponseUpdateManyMutationInput' })
  },
})

export const ResponseScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ResponseScalarWhereInput' })
    t.list.field('OR', { type: 'ResponseScalarWhereInput' })
    t.list.field('NOT', { type: 'ResponseScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('text', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('directionId', { type: 'IntFilter' })
  },
})

export const AnswerUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('update', { type: 'AnswerUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutUserInput' })
  },
})

export const AnswerUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateWithoutUserInput' })
  },
})

export const AnswerUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerScalarWhereInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateManyMutationInput' })
  },
})

export const AnswerScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'AnswerScalarWhereInput' })
    t.list.field('OR', { type: 'AnswerScalarWhereInput' })
    t.list.field('NOT', { type: 'AnswerScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('answer', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('testId', { type: 'IntFilter' })
  },
})

export const DirectionCreateWithoutSpecializationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateWithoutSpecializationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('responses', {
      type: 'ResponseCreateNestedManyWithoutDirectionInput',
    })
  },
})

export const DirectionUncheckedCreateWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUncheckedCreateWithoutSpecializationInput',
    definition(t) {
      t.field('id', { type: 'Int' })
      t.field('createdAt', { type: 'DateTime' })
      t.field('type', { type: 'DirectionType' })
      t.nonNull.field('title', { type: 'String' })
      t.nonNull.field('description', { type: 'String' })
      t.field('responses', {
        type: 'ResponseUncheckedCreateNestedManyWithoutDirectionInput',
      })
    },
  })

export const DirectionCreateOrConnectWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionCreateOrConnectWithoutSpecializationInput',
    definition(t) {
      t.nonNull.field('where', { type: 'DirectionWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
    },
  })

export const DirectionCreateManySpecializationInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateManySpecializationInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'DirectionCreateManySpecializationInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const DirectionUpsertWithWhereUniqueWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpsertWithWhereUniqueWithoutSpecializationInput',
    definition(t) {
      t.nonNull.field('where', { type: 'DirectionWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'DirectionUpdateWithoutSpecializationInput',
      })
      t.nonNull.field('create', {
        type: 'DirectionCreateWithoutSpecializationInput',
      })
    },
  })

export const DirectionUpdateWithWhereUniqueWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpdateWithWhereUniqueWithoutSpecializationInput',
    definition(t) {
      t.nonNull.field('where', { type: 'DirectionWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'DirectionUpdateWithoutSpecializationInput',
      })
    },
  })

export const DirectionUpdateManyWithWhereWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpdateManyWithWhereWithoutSpecializationInput',
    definition(t) {
      t.nonNull.field('where', { type: 'DirectionScalarWhereInput' })
      t.nonNull.field('data', { type: 'DirectionUpdateManyMutationInput' })
    },
  })

export const DirectionScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'DirectionScalarWhereInput' })
    t.list.field('OR', { type: 'DirectionScalarWhereInput' })
    t.list.field('NOT', { type: 'DirectionScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('type', { type: 'EnumDirectionTypeNullableFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('specializationId', { type: 'IntFilter' })
  },
})

export const ResponseCreateWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateWithoutDirectionInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutResponsesInput',
    })
    t.field('tests', { type: 'TestCreateNestedManyWithoutResponseInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutResponseInput' })
  },
})

export const ResponseUncheckedCreateWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedCreateWithoutDirectionInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('tests', {
      type: 'TestUncheckedCreateNestedManyWithoutResponseInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutResponseInput',
    })
  },
})

export const ResponseCreateOrConnectWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateOrConnectWithoutDirectionInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
  },
})

export const ResponseCreateManyDirectionInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateManyDirectionInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ResponseCreateManyDirectionInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const SpecializationCreateWithoutDirectionsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationCreateWithoutDirectionsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
  },
})

export const SpecializationUncheckedCreateWithoutDirectionsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationUncheckedCreateWithoutDirectionsInput',
    definition(t) {
      t.field('id', { type: 'Int' })
      t.field('createdAt', { type: 'DateTime' })
      t.nonNull.field('title', { type: 'String' })
    },
  })

export const SpecializationCreateOrConnectWithoutDirectionsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationCreateOrConnectWithoutDirectionsInput',
    definition(t) {
      t.nonNull.field('where', { type: 'SpecializationWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'SpecializationCreateWithoutDirectionsInput',
      })
    },
  })

export const ResponseUpsertWithWhereUniqueWithoutDirectionInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUpsertWithWhereUniqueWithoutDirectionInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
      t.nonNull.field('update', { type: 'ResponseUpdateWithoutDirectionInput' })
      t.nonNull.field('create', { type: 'ResponseCreateWithoutDirectionInput' })
    },
  })

export const ResponseUpdateWithWhereUniqueWithoutDirectionInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUpdateWithWhereUniqueWithoutDirectionInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
      t.nonNull.field('data', { type: 'ResponseUpdateWithoutDirectionInput' })
    },
  })

export const ResponseUpdateManyWithWhereWithoutDirectionInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUpdateManyWithWhereWithoutDirectionInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ResponseScalarWhereInput' })
      t.nonNull.field('data', { type: 'ResponseUpdateManyMutationInput' })
    },
  },
)

export const SpecializationUpsertWithoutDirectionsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUpsertWithoutDirectionsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'SpecializationUpdateWithoutDirectionsInput',
    })
    t.nonNull.field('create', {
      type: 'SpecializationCreateWithoutDirectionsInput',
    })
    t.field('where', { type: 'SpecializationWhereInput' })
  },
})

export const SpecializationUpdateToOneWithWhereWithoutDirectionsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationUpdateToOneWithWhereWithoutDirectionsInput',
    definition(t) {
      t.field('where', { type: 'SpecializationWhereInput' })
      t.nonNull.field('data', {
        type: 'SpecializationUpdateWithoutDirectionsInput',
      })
    },
  })

export const SpecializationUpdateWithoutDirectionsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SpecializationUpdateWithoutDirectionsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const SpecializationUncheckedUpdateWithoutDirectionsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'SpecializationUncheckedUpdateWithoutDirectionsInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    },
  })

export const UserCreateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutResponsesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('groups', {
      type: 'MessagerGroupCreateNestedManyWithoutUsersInput',
    })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutResponsesInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedCreateNestedManyWithoutUsersInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutResponsesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutResponsesInput' })
  },
})

export const DirectionCreateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateWithoutResponsesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('specialization', {
      type: 'SpecializationCreateNestedOneWithoutDirectionsInput',
    })
  },
})

export const DirectionUncheckedCreateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUncheckedCreateWithoutResponsesInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('specializationId', { type: 'Int' })
  },
})

export const DirectionCreateOrConnectWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateOrConnectWithoutResponsesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'DirectionWhereUniqueInput' })
    t.nonNull.field('create', { type: 'DirectionCreateWithoutResponsesInput' })
  },
})

export const TestCreateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateWithoutResponseInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskCreateNestedManyWithoutTestInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutTestInput' })
  },
})

export const TestUncheckedCreateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedCreateWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskUncheckedCreateNestedManyWithoutTestInput' })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutTestInput',
    })
  },
})

export const TestCreateOrConnectWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateOrConnectWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestWhereUniqueInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutResponseInput' })
  },
})

export const AnswerCreateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateWithoutResponseInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutAnswersInput' })
    t.nonNull.field('test', { type: 'TestCreateNestedOneWithoutAnswersInput' })
  },
})

export const AnswerUncheckedCreateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('testId', { type: 'Int' })
  },
})

export const AnswerCreateOrConnectWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateOrConnectWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutResponseInput' })
  },
})

export const UserUpsertWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutResponsesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutResponsesInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutResponsesInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutResponsesInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutResponsesInput' })
  },
})

export const UserUpdateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutResponsesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('groups', {
      type: 'MessagerGroupUpdateManyWithoutUsersNestedInput',
    })
    t.field('answers', { type: 'AnswerUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutResponsesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const DirectionUpsertWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUpsertWithoutResponsesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'DirectionUpdateWithoutResponsesInput' })
    t.nonNull.field('create', { type: 'DirectionCreateWithoutResponsesInput' })
    t.field('where', { type: 'DirectionWhereInput' })
  },
})

export const DirectionUpdateToOneWithWhereWithoutResponsesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUpdateToOneWithWhereWithoutResponsesInput',
    definition(t) {
      t.field('where', { type: 'DirectionWhereInput' })
      t.nonNull.field('data', { type: 'DirectionUpdateWithoutResponsesInput' })
    },
  })

export const DirectionUpdateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUpdateWithoutResponsesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('specialization', {
      type: 'SpecializationUpdateOneRequiredWithoutDirectionsNestedInput',
    })
  },
})

export const DirectionUncheckedUpdateWithoutResponsesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUncheckedUpdateWithoutResponsesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('specializationId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const TestUpsertWithWhereUniqueWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpsertWithWhereUniqueWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestWhereUniqueInput' })
    t.nonNull.field('update', { type: 'TestUpdateWithoutResponseInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutResponseInput' })
  },
})

export const TestUpdateWithWhereUniqueWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateWithWhereUniqueWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestWhereUniqueInput' })
    t.nonNull.field('data', { type: 'TestUpdateWithoutResponseInput' })
  },
})

export const TestUpdateManyWithWhereWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateManyWithWhereWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestScalarWhereInput' })
    t.nonNull.field('data', { type: 'TestUpdateManyMutationInput' })
  },
})

export const TestScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TestScalarWhereInput' })
    t.list.field('OR', { type: 'TestScalarWhereInput' })
    t.list.field('NOT', { type: 'TestScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('title', { type: 'StringFilter' })
  },
})

export const AnswerUpsertWithWhereUniqueWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpsertWithWhereUniqueWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('update', { type: 'AnswerUpdateWithoutResponseInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutResponseInput' })
  },
})

export const AnswerUpdateWithWhereUniqueWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithWhereUniqueWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateWithoutResponseInput' })
  },
})

export const AnswerUpdateManyWithWhereWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithWhereWithoutResponseInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerScalarWhereInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateManyMutationInput' })
  },
})

export const TaskCreateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateWithoutTestInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUncheckedCreateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedCreateWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskCreateOrConnectWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateOrConnectWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' })
    t.nonNull.field('create', { type: 'TaskCreateWithoutTestInput' })
  },
})

export const TaskCreateManyTestInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyTestInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'TaskCreateManyTestInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const AnswerCreateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateWithoutTestInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutAnswersInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutAnswersInput' })
  },
})

export const AnswerUncheckedCreateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedCreateWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutAnswersInput',
    })
  },
})

export const AnswerCreateOrConnectWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateOrConnectWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutTestInput' })
  },
})

export const AnswerCreateManyTestInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateManyTestInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'AnswerCreateManyTestInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ResponseCreateWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateWithoutTestsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutResponsesInput',
    })
    t.nonNull.field('direction', {
      type: 'DirectionCreateNestedOneWithoutResponsesInput',
    })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutResponseInput' })
  },
})

export const ResponseUncheckedCreateWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedCreateWithoutTestsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('directionId', { type: 'Int' })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutResponseInput',
    })
  },
})

export const ResponseCreateOrConnectWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateOrConnectWithoutTestsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutTestsInput' })
  },
})

export const TaskUpsertWithWhereUniqueWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpsertWithWhereUniqueWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' })
    t.nonNull.field('update', { type: 'TaskUpdateWithoutTestInput' })
    t.nonNull.field('create', { type: 'TaskCreateWithoutTestInput' })
  },
})

export const TaskUpdateWithWhereUniqueWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithWhereUniqueWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskWhereUniqueInput' })
    t.nonNull.field('data', { type: 'TaskUpdateWithoutTestInput' })
  },
})

export const TaskUpdateManyWithWhereWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateManyWithWhereWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TaskScalarWhereInput' })
    t.nonNull.field('data', { type: 'TaskUpdateManyMutationInput' })
  },
})

export const TaskScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'TaskScalarWhereInput' })
    t.list.field('OR', { type: 'TaskScalarWhereInput' })
    t.list.field('NOT', { type: 'TaskScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('testId', { type: 'IntNullableFilter' })
    t.field('type', { type: 'EnumTaskTypeFilter' })
    t.field('question', { type: 'StringFilter' })
    t.field('variants', { type: 'StringNullableListFilter' })
    t.field('correctSingleAnswer', { type: 'IntNullableFilter' })
    t.field('correctMultipleAnswer', { type: 'IntNullableListFilter' })
  },
})

export const AnswerUpsertWithWhereUniqueWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpsertWithWhereUniqueWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('update', { type: 'AnswerUpdateWithoutTestInput' })
    t.nonNull.field('create', { type: 'AnswerCreateWithoutTestInput' })
  },
})

export const AnswerUpdateWithWhereUniqueWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithWhereUniqueWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerWhereUniqueInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateWithoutTestInput' })
  },
})

export const AnswerUpdateManyWithWhereWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateManyWithWhereWithoutTestInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AnswerScalarWhereInput' })
    t.nonNull.field('data', { type: 'AnswerUpdateManyMutationInput' })
  },
})

export const ResponseUpsertWithWhereUniqueWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpsertWithWhereUniqueWithoutTestsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ResponseUpdateWithoutTestsInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutTestsInput' })
  },
})

export const ResponseUpdateWithWhereUniqueWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithWhereUniqueWithoutTestsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ResponseUpdateWithoutTestsInput' })
  },
})

export const ResponseUpdateManyWithWhereWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithWhereWithoutTestsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseScalarWhereInput' })
    t.nonNull.field('data', { type: 'ResponseUpdateManyMutationInput' })
  },
})

export const TestCreateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateWithoutTasksInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutTestInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutTestsInput' })
  },
})

export const TestUncheckedCreateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedCreateWithoutTasksInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutTestInput',
    })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutTestsInput',
    })
  },
})

export const TestCreateOrConnectWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateOrConnectWithoutTasksInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestWhereUniqueInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutTasksInput' })
  },
})

export const TestUpsertWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpsertWithoutTasksInput',
  definition(t) {
    t.nonNull.field('update', { type: 'TestUpdateWithoutTasksInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutTasksInput' })
    t.field('where', { type: 'TestWhereInput' })
  },
})

export const TestUpdateToOneWithWhereWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateToOneWithWhereWithoutTasksInput',
  definition(t) {
    t.field('where', { type: 'TestWhereInput' })
    t.nonNull.field('data', { type: 'TestUpdateWithoutTasksInput' })
  },
})

export const TestUpdateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateWithoutTasksInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutTestNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutTestsNestedInput' })
  },
})

export const TestUncheckedUpdateWithoutTasksInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateWithoutTasksInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutTestNestedInput',
    })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutTestsNestedInput',
    })
  },
})

export const UserCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('groups', {
      type: 'MessagerGroupCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', { type: 'ResponseCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutAnswersInput' })
  },
})

export const TestCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskCreateNestedManyWithoutTestInput' })
    t.field('response', { type: 'ResponseCreateNestedManyWithoutTestsInput' })
  },
})

export const TestUncheckedCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedCreateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('title', { type: 'String' })
    t.field('tasks', { type: 'TaskUncheckedCreateNestedManyWithoutTestInput' })
    t.field('response', {
      type: 'ResponseUncheckedCreateNestedManyWithoutTestsInput',
    })
  },
})

export const TestCreateOrConnectWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestCreateOrConnectWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'TestWhereUniqueInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutAnswersInput' })
  },
})

export const ResponseCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('user', {
      type: 'UserCreateNestedOneWithoutResponsesInput',
    })
    t.nonNull.field('direction', {
      type: 'DirectionCreateNestedOneWithoutResponsesInput',
    })
    t.field('tests', { type: 'TestCreateNestedManyWithoutResponseInput' })
  },
})

export const ResponseUncheckedCreateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedCreateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('directionId', { type: 'Int' })
    t.field('tests', {
      type: 'TestUncheckedCreateNestedManyWithoutResponseInput',
    })
  },
})

export const ResponseCreateOrConnectWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateOrConnectWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
  },
})

export const UserUpsertWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutAnswersInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutAnswersInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutAnswersInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutAnswersInput' })
  },
})

export const UserUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('groups', {
      type: 'MessagerGroupUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', { type: 'ResponseUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('groups', {
      type: 'MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const TestUpsertWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpsertWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('update', { type: 'TestUpdateWithoutAnswersInput' })
    t.nonNull.field('create', { type: 'TestCreateWithoutAnswersInput' })
    t.field('where', { type: 'TestWhereInput' })
  },
})

export const TestUpdateToOneWithWhereWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateToOneWithWhereWithoutAnswersInput',
  definition(t) {
    t.field('where', { type: 'TestWhereInput' })
    t.nonNull.field('data', { type: 'TestUpdateWithoutAnswersInput' })
  },
})

export const TestUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUpdateManyWithoutTestNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutTestsNestedInput' })
  },
})

export const TestUncheckedUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUncheckedUpdateManyWithoutTestNestedInput' })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutTestsNestedInput',
    })
  },
})

export const ResponseUpsertWithWhereUniqueWithoutAnswersInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUpsertWithWhereUniqueWithoutAnswersInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
      t.nonNull.field('update', { type: 'ResponseUpdateWithoutAnswersInput' })
      t.nonNull.field('create', { type: 'ResponseCreateWithoutAnswersInput' })
    },
  },
)

export const ResponseUpdateWithWhereUniqueWithoutAnswersInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUpdateWithWhereUniqueWithoutAnswersInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ResponseWhereUniqueInput' })
      t.nonNull.field('data', { type: 'ResponseUpdateWithoutAnswersInput' })
    },
  },
)

export const ResponseUpdateManyWithWhereWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateManyWithWhereWithoutAnswersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ResponseScalarWhereInput' })
    t.nonNull.field('data', { type: 'ResponseUpdateManyMutationInput' })
  },
})

export const UserCreateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutGroupsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('responses', { type: 'ResponseCreateNestedManyWithoutUserInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutGroupsInput' })
  },
})

export const MessageCreateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutGroupInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('sender', {
      type: 'UserCreateNestedOneWithoutMessagesInput',
    })
  },
})

export const MessageUncheckedCreateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutGroupInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('senderId', { type: 'Int' })
  },
})

export const MessageCreateOrConnectWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('create', { type: 'MessageCreateWithoutGroupInput' })
  },
})

export const MessageCreateManyGroupInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyGroupInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManyGroupInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithWhereUniqueWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithWhereUniqueWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('update', { type: 'UserUpdateWithoutGroupsInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutGroupsInput' })
  },
})

export const UserUpdateWithWhereUniqueWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithWhereUniqueWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutGroupsInput' })
  },
})

export const UserUpdateManyWithWhereWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithWhereWithoutGroupsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserScalarWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateManyMutationInput' })
  },
})

export const UserScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereInput' })
    t.list.field('OR', { type: 'UserScalarWhereInput' })
    t.list.field('NOT', { type: 'UserScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('passwordHash', { type: 'StringFilter' })
    t.field('role', { type: 'EnumUserRoleEnumFilter' })
    t.field('tgLink', { type: 'StringNullableFilter' })
    t.field('vkLink', { type: 'StringNullableFilter' })
    t.field('phone', { type: 'StringNullableFilter' })
    t.field('fullname', { type: 'StringNullableFilter' })
    t.field('logo', { type: 'StringNullableFilter' })
  },
})

export const MessageUpsertWithWhereUniqueWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('update', { type: 'MessageUpdateWithoutGroupInput' })
    t.nonNull.field('create', { type: 'MessageCreateWithoutGroupInput' })
  },
})

export const MessageUpdateWithWhereUniqueWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('data', { type: 'MessageUpdateWithoutGroupInput' })
  },
})

export const MessageUpdateManyWithWhereWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' })
    t.nonNull.field('data', { type: 'MessageUpdateManyMutationInput' })
  },
})

export const UserCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutMessagesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('groups', {
      type: 'MessagerGroupCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', { type: 'ResponseCreateNestedManyWithoutUserInput' })
    t.field('answers', { type: 'AnswerCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('passwordHash', { type: 'String' })
    t.field('role', { type: 'UserRoleEnum' })
    t.field('tgLink', { type: 'String' })
    t.field('vkLink', { type: 'String' })
    t.field('phone', { type: 'String' })
    t.field('fullname', { type: 'String' })
    t.field('logo', { type: 'String' })
    t.field('groups', {
      type: 'MessagerGroupUncheckedCreateNestedManyWithoutUsersInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutMessagesInput' })
  },
})

export const MessagerGroupCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupCreateWithoutMessagesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Boolean' })
    t.field('title', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('users', { type: 'UserCreateNestedManyWithoutGroupsInput' })
  },
})

export const MessagerGroupUncheckedCreateWithoutMessagesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUncheckedCreateWithoutMessagesInput',
    definition(t) {
      t.field('id', { type: 'Int' })
      t.field('createdAt', { type: 'DateTime' })
      t.field('creatorId', { type: 'Int' })
      t.field('active', { type: 'Boolean' })
      t.field('title', { type: 'String' })
      t.field('icon', { type: 'String' })
      t.field('users', {
        type: 'UserUncheckedCreateNestedManyWithoutGroupsInput',
      })
    },
  },
)

export const MessagerGroupCreateOrConnectWithoutMessagesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupCreateOrConnectWithoutMessagesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'MessagerGroupWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'MessagerGroupCreateWithoutMessagesInput',
      })
    },
  },
)

export const UserUpsertWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutMessagesInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutMessagesInput' })
    t.field('where', { type: 'UserWhereInput' })
  },
})

export const UserUpdateToOneWithWhereWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateToOneWithWhereWithoutMessagesInput',
  definition(t) {
    t.field('where', { type: 'UserWhereInput' })
    t.nonNull.field('data', { type: 'UserUpdateWithoutMessagesInput' })
  },
})

export const UserUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutMessagesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('groups', {
      type: 'MessagerGroupUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', { type: 'ResponseUpdateManyWithoutUserNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('groups', {
      type: 'MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const MessagerGroupUpsertWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpsertWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'MessagerGroupUpdateWithoutMessagesInput',
    })
    t.nonNull.field('create', {
      type: 'MessagerGroupCreateWithoutMessagesInput',
    })
    t.field('where', { type: 'MessagerGroupWhereInput' })
  },
})

export const MessagerGroupUpdateToOneWithWhereWithoutMessagesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUpdateToOneWithWhereWithoutMessagesInput',
    definition(t) {
      t.field('where', { type: 'MessagerGroupWhereInput' })
      t.nonNull.field('data', {
        type: 'MessagerGroupUpdateWithoutMessagesInput',
      })
    },
  })

export const MessagerGroupUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpdateWithoutMessagesInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    t.field('users', { type: 'UserUpdateManyWithoutGroupsNestedInput' })
  },
})

export const MessagerGroupUncheckedUpdateWithoutMessagesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUncheckedUpdateWithoutMessagesInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
      t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
      t.field('users', {
        type: 'UserUncheckedUpdateManyWithoutGroupsNestedInput',
      })
    },
  },
)

export const MessageCreateManySenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('groupId', { type: 'Int' })
  },
})

export const ResponseCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('directionId', { type: 'Int' })
  },
})

export const AnswerCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('testId', { type: 'Int' })
  },
})

export const MessageUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutSenderInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('group', {
      type: 'MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput',
    })
  },
})

export const MessageUncheckedUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('groupId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessageUncheckedUpdateManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('groupId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessagerGroupUpdateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUpdateWithoutUsersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutGroupNestedInput' })
  },
})

export const MessagerGroupUncheckedUpdateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessagerGroupUncheckedUpdateWithoutUsersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutGroupNestedInput',
    })
  },
})

export const MessagerGroupUncheckedUpdateManyWithoutUsersInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessagerGroupUncheckedUpdateManyWithoutUsersInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('creatorId', { type: 'NullableIntFieldUpdateOperationsInput' })
      t.field('active', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('icon', { type: 'StringFieldUpdateOperationsInput' })
    },
  })

export const ResponseUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithoutUserInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('direction', {
      type: 'DirectionUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('tests', { type: 'TestUpdateManyWithoutResponseNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutResponseNestedInput' })
  },
})

export const ResponseUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('tests', {
      type: 'TestUncheckedUpdateManyWithoutResponseNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutResponseNestedInput',
    })
  },
})

export const ResponseUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateManyWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const AnswerUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithoutUserInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('test', { type: 'TestUpdateOneRequiredWithoutAnswersNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutAnswersNestedInput' })
  },
})

export const AnswerUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutAnswersNestedInput',
    })
  },
})

export const AnswerUncheckedUpdateManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const DirectionCreateManySpecializationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionCreateManySpecializationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('type', { type: 'DirectionType' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
  },
})

export const DirectionUpdateWithoutSpecializationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DirectionUpdateWithoutSpecializationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', {
      type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
    })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('responses', {
      type: 'ResponseUpdateManyWithoutDirectionNestedInput',
    })
  },
})

export const DirectionUncheckedUpdateWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUncheckedUpdateWithoutSpecializationInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('type', {
        type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
      })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
      t.field('responses', {
        type: 'ResponseUncheckedUpdateManyWithoutDirectionNestedInput',
      })
    },
  })

export const DirectionUncheckedUpdateManyWithoutSpecializationInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'DirectionUncheckedUpdateManyWithoutSpecializationInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('type', {
        type: 'NullableEnumDirectionTypeFieldUpdateOperationsInput',
      })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    },
  })

export const ResponseCreateManyDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseCreateManyDirectionInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('text', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const ResponseUpdateWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithoutDirectionInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('tests', { type: 'TestUpdateManyWithoutResponseNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutResponseNestedInput' })
  },
})

export const ResponseUncheckedUpdateWithoutDirectionInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateWithoutDirectionInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('tests', {
      type: 'TestUncheckedUpdateManyWithoutResponseNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutResponseNestedInput',
    })
  },
})

export const ResponseUncheckedUpdateManyWithoutDirectionInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ResponseUncheckedUpdateManyWithoutDirectionInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    },
  },
)

export const TestUpdateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUpdateWithoutResponseInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUpdateManyWithoutTestNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutTestNestedInput' })
  },
})

export const TestUncheckedUpdateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('tasks', { type: 'TaskUncheckedUpdateManyWithoutTestNestedInput' })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutTestNestedInput',
    })
  },
})

export const TestUncheckedUpdateManyWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TestUncheckedUpdateManyWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const AnswerUpdateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithoutResponseInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutAnswersNestedInput' })
    t.field('test', { type: 'TestUpdateOneRequiredWithoutAnswersNestedInput' })
  },
})

export const AnswerUncheckedUpdateWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const AnswerUncheckedUpdateManyWithoutResponseInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyWithoutResponseInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('testId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const TaskCreateManyTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskCreateManyTestInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('type', { type: 'TaskType' })
    t.nonNull.field('question', { type: 'String' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const AnswerCreateManyTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerCreateManyTestInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('answer', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const TaskUpdateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUpdateWithoutTestInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUncheckedUpdateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskUncheckedUpdateManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'TaskUncheckedUpdateManyWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumTaskTypeFieldUpdateOperationsInput' })
    t.field('question', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('variants', { type: 'String' })
    t.field('correctSingleAnswer', {
      type: 'NullableIntFieldUpdateOperationsInput',
    })
    t.list.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const AnswerUpdateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUpdateWithoutTestInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutAnswersNestedInput' })
    t.field('response', { type: 'ResponseUpdateManyWithoutAnswersNestedInput' })
  },
})

export const AnswerUncheckedUpdateWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('response', {
      type: 'ResponseUncheckedUpdateManyWithoutAnswersNestedInput',
    })
  },
})

export const AnswerUncheckedUpdateManyWithoutTestInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AnswerUncheckedUpdateManyWithoutTestInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('answer', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ResponseUpdateWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithoutTestsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('direction', {
      type: 'DirectionUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('answers', { type: 'AnswerUpdateManyWithoutResponseNestedInput' })
  },
})

export const ResponseUncheckedUpdateWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateWithoutTestsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutResponseNestedInput',
    })
  },
})

export const ResponseUncheckedUpdateManyWithoutTestsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateManyWithoutTestsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ResponseUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUpdateWithoutAnswersInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('user', {
      type: 'UserUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('direction', {
      type: 'DirectionUpdateOneRequiredWithoutResponsesNestedInput',
    })
    t.field('tests', { type: 'TestUpdateManyWithoutResponseNestedInput' })
  },
})

export const ResponseUncheckedUpdateWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('tests', {
      type: 'TestUncheckedUpdateManyWithoutResponseNestedInput',
    })
  },
})

export const ResponseUncheckedUpdateManyWithoutAnswersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ResponseUncheckedUpdateManyWithoutAnswersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('directionId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessageCreateManyGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyGroupInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('text', { type: 'String' })
    t.list.field('files', { type: 'String' })
    t.nonNull.field('senderId', { type: 'Int' })
  },
})

export const UserUpdateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutGroupsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('responses', { type: 'ResponseUpdateManyWithoutUserNestedInput' })
    t.field('answers', { type: 'AnswerUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('responses', {
      type: 'ResponseUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('answers', {
      type: 'AnswerUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserUncheckedUpdateManyWithoutGroupsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutGroupsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('passwordHash', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleEnumFieldUpdateOperationsInput' })
    t.field('tgLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('vkLink', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('phone', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('fullname', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('logo', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const MessageUpdateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutGroupInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('sender', {
      type: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
    })
  },
})

export const MessageUncheckedUpdateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutGroupInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('senderId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const MessageUncheckedUpdateManyWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutGroupInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('text', { type: 'StringFieldUpdateOperationsInput' })
    t.list.field('files', { type: 'String' })
    t.field('senderId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const AggregateSpecialization = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateSpecialization',
  definition(t) {
    t.nullable.field('_count', {
      type: 'SpecializationCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'SpecializationAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'SpecializationSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'SpecializationMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'SpecializationMaxAggregateOutputType' })
  },
})

export const AggregateDirection = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateDirection',
  definition(t) {
    t.nullable.field('_count', { type: 'DirectionCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'DirectionAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'DirectionSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'DirectionMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'DirectionMaxAggregateOutputType' })
  },
})

export const AggregateResponse = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateResponse',
  definition(t) {
    t.nullable.field('_count', { type: 'ResponseCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ResponseAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ResponseSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ResponseMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ResponseMaxAggregateOutputType' })
  },
})

export const AggregateTest = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTest',
  definition(t) {
    t.nullable.field('_count', { type: 'TestCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'TestAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'TestSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'TestMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'TestMaxAggregateOutputType' })
  },
})

export const AggregateTask = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateTask',
  definition(t) {
    t.nullable.field('_count', { type: 'TaskCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'TaskAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'TaskSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'TaskMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'TaskMaxAggregateOutputType' })
  },
})

export const AggregateAnswer = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateAnswer',
  definition(t) {
    t.nullable.field('_count', { type: 'AnswerCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'AnswerAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'AnswerSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'AnswerMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'AnswerMaxAggregateOutputType' })
  },
})

export const AggregateMessagerGroup = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateMessagerGroup',
  definition(t) {
    t.nullable.field('_count', {
      type: 'MessagerGroupCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'MessagerGroupAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'MessagerGroupSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'MessagerGroupMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'MessagerGroupMaxAggregateOutputType' })
  },
})

export const AggregateMessage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateMessage',
  definition(t) {
    t.nullable.field('_count', { type: 'MessageCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'MessageAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'MessageSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'MessageMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'MessageMaxAggregateOutputType' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('messages', { type: 'Int' })
    t.field('groups', { type: 'Int' })
    t.field('responses', { type: 'Int' })
    t.field('answers', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('passwordHash', { type: 'Int' })
    t.field('role', { type: 'Int' })
    t.field('tgLink', { type: 'Int' })
    t.field('vkLink', { type: 'Int' })
    t.field('phone', { type: 'Int' })
    t.field('fullname', { type: 'Int' })
    t.field('logo', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('passwordHash', { type: 'String' })
    t.nullable.field('role', { type: 'UserRoleEnum' })
    t.nullable.field('tgLink', { type: 'String' })
    t.nullable.field('vkLink', { type: 'String' })
    t.nullable.field('phone', { type: 'String' })
    t.nullable.field('fullname', { type: 'String' })
    t.nullable.field('logo', { type: 'String' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('passwordHash', { type: 'String' })
    t.nullable.field('role', { type: 'UserRoleEnum' })
    t.nullable.field('tgLink', { type: 'String' })
    t.nullable.field('vkLink', { type: 'String' })
    t.nullable.field('phone', { type: 'String' })
    t.nullable.field('fullname', { type: 'String' })
    t.nullable.field('logo', { type: 'String' })
  },
})

export const SpecializationCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationCountOutputType',
  definition(t) {
    t.field('directions', { type: 'Int' })
  },
})

export const SpecializationCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const SpecializationAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const SpecializationSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const SpecializationMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const SpecializationMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'SpecializationMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const DirectionCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionCountOutputType',
  definition(t) {
    t.field('responses', { type: 'Int' })
  },
})

export const DirectionCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('specializationId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const DirectionAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('specializationId', { type: 'Float' })
  },
})

export const DirectionSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('specializationId', { type: 'Int' })
  },
})

export const DirectionMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('type', { type: 'DirectionType' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('specializationId', { type: 'Int' })
  },
})

export const DirectionMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'DirectionMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('type', { type: 'DirectionType' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('specializationId', { type: 'Int' })
  },
})

export const ResponseCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseCountOutputType',
  definition(t) {
    t.field('tests', { type: 'Int' })
    t.field('answers', { type: 'Int' })
  },
})

export const ResponseCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('text', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('directionId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ResponseAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('directionId', { type: 'Float' })
  },
})

export const ResponseSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('directionId', { type: 'Int' })
  },
})

export const ResponseMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('text', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('directionId', { type: 'Int' })
  },
})

export const ResponseMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ResponseMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('text', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('directionId', { type: 'Int' })
  },
})

export const TestCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestCountOutputType',
  definition(t) {
    t.field('tasks', { type: 'Int' })
    t.field('answers', { type: 'Int' })
    t.field('response', { type: 'Int' })
  },
})

export const TestCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const TestAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const TestSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const TestMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const TestMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TestMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const TaskCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('testId', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('question', { type: 'Int' })
    t.field('variants', { type: 'Int' })
    t.field('correctSingleAnswer', { type: 'Int' })
    t.field('correctMultipleAnswer', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const TaskAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('testId', { type: 'Float' })
    t.nullable.field('correctSingleAnswer', { type: 'Float' })
    t.nullable.field('correctMultipleAnswer', { type: 'Float' })
  },
})

export const TaskSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('testId', { type: 'Int' })
    t.nullable.field('correctSingleAnswer', { type: 'Int' })
    t.nullable.field('correctMultipleAnswer', { type: 'Int' })
  },
})

export const TaskMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('testId', { type: 'Int' })
    t.nullable.field('type', { type: 'TaskType' })
    t.nullable.field('question', { type: 'String' })
    t.nullable.field('correctSingleAnswer', { type: 'Int' })
  },
})

export const TaskMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'TaskMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('testId', { type: 'Int' })
    t.nullable.field('type', { type: 'TaskType' })
    t.nullable.field('question', { type: 'String' })
    t.nullable.field('correctSingleAnswer', { type: 'Int' })
  },
})

export const AnswerCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerCountOutputType',
  definition(t) {
    t.field('response', { type: 'Int' })
  },
})

export const AnswerCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('answer', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('testId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const AnswerAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('testId', { type: 'Float' })
  },
})

export const AnswerSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('testId', { type: 'Int' })
  },
})

export const AnswerMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('answer', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('testId', { type: 'Int' })
  },
})

export const AnswerMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AnswerMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('answer', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('testId', { type: 'Int' })
  },
})

export const MessagerGroupCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupCountOutputType',
  definition(t) {
    t.field('users', { type: 'Int' })
    t.field('messages', { type: 'Int' })
  },
})

export const MessagerGroupCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('creatorId', { type: 'Int' })
    t.field('active', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('icon', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const MessagerGroupAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('creatorId', { type: 'Float' })
  },
})

export const MessagerGroupSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('creatorId', { type: 'Int' })
  },
})

export const MessagerGroupMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('creatorId', { type: 'Int' })
    t.nullable.field('active', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('icon', { type: 'String' })
  },
})

export const MessagerGroupMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessagerGroupMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('creatorId', { type: 'Int' })
    t.nullable.field('active', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('icon', { type: 'String' })
  },
})

export const MessageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('text', { type: 'Int' })
    t.field('files', { type: 'Int' })
    t.field('senderId', { type: 'Int' })
    t.field('groupId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const MessageAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('senderId', { type: 'Float' })
    t.nullable.field('groupId', { type: 'Float' })
  },
})

export const MessageSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('senderId', { type: 'Int' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})

export const MessageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('text', { type: 'String' })
    t.nullable.field('senderId', { type: 'Int' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})

export const MessageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('text', { type: 'String' })
    t.nullable.field('senderId', { type: 'Int' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})
