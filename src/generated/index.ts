import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type AggregateAnswer = {
  __typename?: 'AggregateAnswer';
  _avg?: Maybe<AnswerAvgAggregateOutputType>;
  _count?: Maybe<AnswerCountAggregateOutputType>;
  _max?: Maybe<AnswerMaxAggregateOutputType>;
  _min?: Maybe<AnswerMinAggregateOutputType>;
  _sum?: Maybe<AnswerSumAggregateOutputType>;
};

export type AggregateDirection = {
  __typename?: 'AggregateDirection';
  _avg?: Maybe<DirectionAvgAggregateOutputType>;
  _count?: Maybe<DirectionCountAggregateOutputType>;
  _max?: Maybe<DirectionMaxAggregateOutputType>;
  _min?: Maybe<DirectionMinAggregateOutputType>;
  _sum?: Maybe<DirectionSumAggregateOutputType>;
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _avg?: Maybe<MessageAvgAggregateOutputType>;
  _count?: Maybe<MessageCountAggregateOutputType>;
  _max?: Maybe<MessageMaxAggregateOutputType>;
  _min?: Maybe<MessageMinAggregateOutputType>;
  _sum?: Maybe<MessageSumAggregateOutputType>;
};

export type AggregateMessagerGroup = {
  __typename?: 'AggregateMessagerGroup';
  _avg?: Maybe<MessagerGroupAvgAggregateOutputType>;
  _count?: Maybe<MessagerGroupCountAggregateOutputType>;
  _max?: Maybe<MessagerGroupMaxAggregateOutputType>;
  _min?: Maybe<MessagerGroupMinAggregateOutputType>;
  _sum?: Maybe<MessagerGroupSumAggregateOutputType>;
};

export type AggregateResponse = {
  __typename?: 'AggregateResponse';
  _avg?: Maybe<ResponseAvgAggregateOutputType>;
  _count?: Maybe<ResponseCountAggregateOutputType>;
  _max?: Maybe<ResponseMaxAggregateOutputType>;
  _min?: Maybe<ResponseMinAggregateOutputType>;
  _sum?: Maybe<ResponseSumAggregateOutputType>;
};

export type AggregateSpecialization = {
  __typename?: 'AggregateSpecialization';
  _avg?: Maybe<SpecializationAvgAggregateOutputType>;
  _count?: Maybe<SpecializationCountAggregateOutputType>;
  _max?: Maybe<SpecializationMaxAggregateOutputType>;
  _min?: Maybe<SpecializationMinAggregateOutputType>;
  _sum?: Maybe<SpecializationSumAggregateOutputType>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg?: Maybe<TaskAvgAggregateOutputType>;
  _count?: Maybe<TaskCountAggregateOutputType>;
  _max?: Maybe<TaskMaxAggregateOutputType>;
  _min?: Maybe<TaskMinAggregateOutputType>;
  _sum?: Maybe<TaskSumAggregateOutputType>;
};

export type AggregateTaskAnswer = {
  __typename?: 'AggregateTaskAnswer';
  _avg?: Maybe<TaskAnswerAvgAggregateOutputType>;
  _count?: Maybe<TaskAnswerCountAggregateOutputType>;
  _max?: Maybe<TaskAnswerMaxAggregateOutputType>;
  _min?: Maybe<TaskAnswerMinAggregateOutputType>;
  _sum?: Maybe<TaskAnswerSumAggregateOutputType>;
};

export type AggregateTest = {
  __typename?: 'AggregateTest';
  _avg?: Maybe<TestAvgAggregateOutputType>;
  _count?: Maybe<TestCountAggregateOutputType>;
  _max?: Maybe<TestMaxAggregateOutputType>;
  _min?: Maybe<TestMinAggregateOutputType>;
  _sum?: Maybe<TestSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type Answer = {
  __typename?: 'Answer';
  _count: AnswerCountOutputType;
  answer?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  response: Array<Response>;
  taskAnswers: Array<TaskAnswer>;
  test: Test;
  testId: Scalars['Int'];
};


export type AnswerResponseArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type AnswerTaskAnswersArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};

export type AnswerAvgAggregateOutputType = {
  __typename?: 'AnswerAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  testId?: Maybe<Scalars['Float']>;
};

export type AnswerAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerCountAggregateOutputType = {
  __typename?: 'AnswerCountAggregateOutputType';
  _all: Scalars['Int'];
  answer: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  testId: Scalars['Int'];
};

export type AnswerCountOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerCountOutputType = {
  __typename?: 'AnswerCountOutputType';
  response: Scalars['Int'];
  taskAnswers: Scalars['Int'];
};

export type AnswerCreateInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutAnswersInput>;
  taskAnswers?: InputMaybe<TaskAnswerCreateNestedManyWithoutAnswerModelInput>;
  test: TestCreateNestedOneWithoutAnswersInput;
};

export type AnswerCreateManyInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  testId: Scalars['Int'];
};

export type AnswerCreateManyTestInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AnswerCreateManyTestInputEnvelope = {
  data: AnswerCreateManyTestInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AnswerCreateNestedManyWithoutResponseInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutResponseInput>>>;
};

export type AnswerCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutTestInput>>>;
  createMany?: InputMaybe<AnswerCreateManyTestInputEnvelope>;
};

export type AnswerCreateNestedOneWithoutTaskAnswersInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutTaskAnswersInput>;
  create?: InputMaybe<AnswerCreateWithoutTaskAnswersInput>;
};

export type AnswerCreateOrConnectWithoutResponseInput = {
  create: AnswerCreateWithoutResponseInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateOrConnectWithoutTaskAnswersInput = {
  create: AnswerCreateWithoutTaskAnswersInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateOrConnectWithoutTestInput = {
  create: AnswerCreateWithoutTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutResponseInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  taskAnswers?: InputMaybe<TaskAnswerCreateNestedManyWithoutAnswerModelInput>;
  test: TestCreateNestedOneWithoutAnswersInput;
};

export type AnswerCreateWithoutTaskAnswersInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutAnswersInput>;
  test: TestCreateNestedOneWithoutAnswersInput;
};

export type AnswerCreateWithoutTestInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutAnswersInput>;
  taskAnswers?: InputMaybe<TaskAnswerCreateNestedManyWithoutAnswerModelInput>;
};

export type AnswerListRelationFilter = {
  every?: InputMaybe<AnswerWhereInput>;
  none?: InputMaybe<AnswerWhereInput>;
  some?: InputMaybe<AnswerWhereInput>;
};

export type AnswerMaxAggregateOutputType = {
  __typename?: 'AnswerMaxAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
};

export type AnswerMaxOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerMinAggregateOutputType = {
  __typename?: 'AnswerMinAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
};

export type AnswerMinOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithAggregationInput = {
  _avg?: InputMaybe<AnswerAvgOrderByAggregateInput>;
  _count?: InputMaybe<AnswerCountOrderByAggregateInput>;
  _max?: InputMaybe<AnswerMaxOrderByAggregateInput>;
  _min?: InputMaybe<AnswerMinOrderByAggregateInput>;
  _sum?: InputMaybe<AnswerSumOrderByAggregateInput>;
  answer?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  response?: InputMaybe<ResponseOrderByRelationAggregateInput>;
  taskAnswers?: InputMaybe<TaskAnswerOrderByRelationAggregateInput>;
  test?: InputMaybe<TestOrderByWithRelationInput>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerRelationFilter = {
  is?: InputMaybe<AnswerWhereInput>;
  isNot?: InputMaybe<AnswerWhereInput>;
};

export enum AnswerScalarFieldEnum {
  Answer = 'answer',
  CreatedAt = 'createdAt',
  Id = 'id',
  TestId = 'testId'
}

export type AnswerScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  answer?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  testId?: InputMaybe<IntFilter>;
};

export type AnswerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerScalarWhereWithAggregatesInput>>>;
  answer?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  testId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AnswerSumAggregateOutputType = {
  __typename?: 'AnswerSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
};

export type AnswerSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type AnswerUncheckedCreateInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutAnswersInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutAnswerModelInput>;
  testId: Scalars['Int'];
};

export type AnswerUncheckedCreateNestedManyWithoutResponseInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutResponseInput>>>;
};

export type AnswerUncheckedCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutTestInput>>>;
  createMany?: InputMaybe<AnswerCreateManyTestInputEnvelope>;
};

export type AnswerUncheckedCreateWithoutResponseInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutAnswerModelInput>;
  testId: Scalars['Int'];
};

export type AnswerUncheckedCreateWithoutTaskAnswersInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutAnswersInput>;
  testId: Scalars['Int'];
};

export type AnswerUncheckedCreateWithoutTestInput = {
  answer?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutAnswersInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutAnswerModelInput>;
};

export type AnswerUncheckedUpdateInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutAnswersNestedInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutAnswerModelNestedInput>;
  testId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutResponseInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutResponseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutResponseInput>>>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutResponseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutResponseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutResponseInput>>>;
};

export type AnswerUncheckedUpdateManyWithoutTestInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutTestInput>>>;
  createMany?: InputMaybe<AnswerCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type AnswerUncheckedUpdateWithoutResponseInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutAnswerModelNestedInput>;
  testId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateWithoutTaskAnswersInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutAnswersNestedInput>;
  testId?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AnswerUncheckedUpdateWithoutTestInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutAnswersNestedInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutAnswerModelNestedInput>;
};

export type AnswerUpdateInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutAnswersNestedInput>;
  taskAnswers?: InputMaybe<TaskAnswerUpdateManyWithoutAnswerModelNestedInput>;
  test?: InputMaybe<TestUpdateOneRequiredWithoutAnswersNestedInput>;
};

export type AnswerUpdateManyMutationInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnswerUpdateManyWithWhereWithoutResponseInput = {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithWhereWithoutTestInput = {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithoutResponseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutResponseInput>>>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutResponseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutResponseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutResponseInput>>>;
};

export type AnswerUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<AnswerCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<AnswerCreateWithoutTestInput>>>;
  createMany?: InputMaybe<AnswerCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<AnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<AnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<AnswerUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<AnswerUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<AnswerUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type AnswerUpdateOneRequiredWithoutTaskAnswersNestedInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutTaskAnswersInput>;
  create?: InputMaybe<AnswerCreateWithoutTaskAnswersInput>;
  update?: InputMaybe<AnswerUpdateToOneWithWhereWithoutTaskAnswersInput>;
  upsert?: InputMaybe<AnswerUpsertWithoutTaskAnswersInput>;
};

export type AnswerUpdateToOneWithWhereWithoutTaskAnswersInput = {
  data: AnswerUpdateWithoutTaskAnswersInput;
  where?: InputMaybe<AnswerWhereInput>;
};

export type AnswerUpdateWithWhereUniqueWithoutResponseInput = {
  data: AnswerUpdateWithoutResponseInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithWhereUniqueWithoutTestInput = {
  data: AnswerUpdateWithoutTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithoutResponseInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUpdateManyWithoutAnswerModelNestedInput>;
  test?: InputMaybe<TestUpdateOneRequiredWithoutAnswersNestedInput>;
};

export type AnswerUpdateWithoutTaskAnswersInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutAnswersNestedInput>;
  test?: InputMaybe<TestUpdateOneRequiredWithoutAnswersNestedInput>;
};

export type AnswerUpdateWithoutTestInput = {
  answer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutAnswersNestedInput>;
  taskAnswers?: InputMaybe<TaskAnswerUpdateManyWithoutAnswerModelNestedInput>;
};

export type AnswerUpsertWithWhereUniqueWithoutResponseInput = {
  create: AnswerCreateWithoutResponseInput;
  update: AnswerUpdateWithoutResponseInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpsertWithWhereUniqueWithoutTestInput = {
  create: AnswerCreateWithoutTestInput;
  update: AnswerUpdateWithoutTestInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpsertWithoutTaskAnswersInput = {
  create: AnswerCreateWithoutTaskAnswersInput;
  update: AnswerUpdateWithoutTaskAnswersInput;
  where?: InputMaybe<AnswerWhereInput>;
};

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  answer?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  response?: InputMaybe<ResponseListRelationFilter>;
  taskAnswers?: InputMaybe<TaskAnswerListRelationFilter>;
  test?: InputMaybe<TestRelationFilter>;
  testId?: InputMaybe<IntFilter>;
};

export type AnswerWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AnswerWhereInput>>>;
  answer?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseListRelationFilter>;
  taskAnswers?: InputMaybe<TaskAnswerListRelationFilter>;
  test?: InputMaybe<TestRelationFilter>;
  testId?: InputMaybe<IntFilter>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Direction = {
  __typename?: 'Direction';
  _count: DirectionCountOutputType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  responses: Array<Response>;
  specialization: Specialization;
  specializationId: Scalars['Int'];
  test?: Maybe<Test>;
  testId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: Maybe<DirectionType>;
};


export type DirectionResponsesArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type DirectionTestArgs = {
  where?: InputMaybe<TestWhereInput>;
};

export type DirectionAvgAggregateOutputType = {
  __typename?: 'DirectionAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  specializationId?: Maybe<Scalars['Float']>;
  testId?: Maybe<Scalars['Float']>;
};

export type DirectionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type DirectionCountAggregateOutputType = {
  __typename?: 'DirectionCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  specializationId: Scalars['Int'];
  testId: Scalars['Int'];
  title: Scalars['Int'];
  type: Scalars['Int'];
};

export type DirectionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type DirectionCountOutputType = {
  __typename?: 'DirectionCountOutputType';
  responses: Scalars['Int'];
};

export type DirectionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  responses?: InputMaybe<ResponseCreateNestedManyWithoutDirectionInput>;
  specialization: SpecializationCreateNestedOneWithoutDirectionsInput;
  test?: InputMaybe<TestCreateNestedOneWithoutDirectionInput>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  specializationId: Scalars['Int'];
  testId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateManySpecializationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  testId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateManySpecializationInputEnvelope = {
  data: DirectionCreateManySpecializationInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DirectionCreateManyTestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  specializationId: Scalars['Int'];
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateManyTestInputEnvelope = {
  data: DirectionCreateManyTestInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DirectionCreateNestedManyWithoutSpecializationInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutSpecializationInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutSpecializationInput>>>;
  createMany?: InputMaybe<DirectionCreateManySpecializationInputEnvelope>;
};

export type DirectionCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutTestInput>>>;
  createMany?: InputMaybe<DirectionCreateManyTestInputEnvelope>;
};

export type DirectionCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<DirectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DirectionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<DirectionCreateWithoutResponsesInput>;
};

export type DirectionCreateOrConnectWithoutResponsesInput = {
  create: DirectionCreateWithoutResponsesInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionCreateOrConnectWithoutSpecializationInput = {
  create: DirectionCreateWithoutSpecializationInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionCreateOrConnectWithoutTestInput = {
  create: DirectionCreateWithoutTestInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionCreateWithoutResponsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  specialization: SpecializationCreateNestedOneWithoutDirectionsInput;
  test?: InputMaybe<TestCreateNestedOneWithoutDirectionInput>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateWithoutSpecializationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  responses?: InputMaybe<ResponseCreateNestedManyWithoutDirectionInput>;
  test?: InputMaybe<TestCreateNestedOneWithoutDirectionInput>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionCreateWithoutTestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  responses?: InputMaybe<ResponseCreateNestedManyWithoutDirectionInput>;
  specialization: SpecializationCreateNestedOneWithoutDirectionsInput;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionListRelationFilter = {
  every?: InputMaybe<DirectionWhereInput>;
  none?: InputMaybe<DirectionWhereInput>;
  some?: InputMaybe<DirectionWhereInput>;
};

export type DirectionMaxAggregateOutputType = {
  __typename?: 'DirectionMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  specializationId?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DirectionType>;
};

export type DirectionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type DirectionMinAggregateOutputType = {
  __typename?: 'DirectionMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  specializationId?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<DirectionType>;
};

export type DirectionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type DirectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DirectionOrderByWithAggregationInput = {
  _avg?: InputMaybe<DirectionAvgOrderByAggregateInput>;
  _count?: InputMaybe<DirectionCountOrderByAggregateInput>;
  _max?: InputMaybe<DirectionMaxOrderByAggregateInput>;
  _min?: InputMaybe<DirectionMinOrderByAggregateInput>;
  _sum?: InputMaybe<DirectionSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
};

export type DirectionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  responses?: InputMaybe<ResponseOrderByRelationAggregateInput>;
  specialization?: InputMaybe<SpecializationOrderByWithRelationInput>;
  specializationId?: InputMaybe<SortOrder>;
  test?: InputMaybe<TestOrderByWithRelationInput>;
  testId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
};

export type DirectionRelationFilter = {
  is?: InputMaybe<DirectionWhereInput>;
  isNot?: InputMaybe<DirectionWhereInput>;
};

export enum DirectionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  SpecializationId = 'specializationId',
  TestId = 'testId',
  Title = 'title',
  Type = 'type'
}

export type DirectionScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  specializationId?: InputMaybe<IntFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumDirectionTypeNullableFilter>;
};

export type DirectionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<DirectionScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DirectionScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DirectionScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  specializationId?: InputMaybe<IntWithAggregatesFilter>;
  testId?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumDirectionTypeNullableWithAggregatesFilter>;
};

export type DirectionSumAggregateOutputType = {
  __typename?: 'DirectionSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  specializationId?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
};

export type DirectionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  specializationId?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export enum DirectionType {
  Internship = 'internship',
  Practice = 'practice'
}

export type DirectionUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutDirectionInput>;
  specializationId: Scalars['Int'];
  testId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionUncheckedCreateNestedManyWithoutSpecializationInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutSpecializationInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutSpecializationInput>>>;
  createMany?: InputMaybe<DirectionCreateManySpecializationInputEnvelope>;
};

export type DirectionUncheckedCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutTestInput>>>;
  createMany?: InputMaybe<DirectionCreateManyTestInputEnvelope>;
};

export type DirectionUncheckedCreateWithoutResponsesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  specializationId: Scalars['Int'];
  testId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionUncheckedCreateWithoutSpecializationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutDirectionInput>;
  testId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionUncheckedCreateWithoutTestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutDirectionInput>;
  specializationId: Scalars['Int'];
  title: Scalars['String'];
  type?: InputMaybe<DirectionType>;
};

export type DirectionUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutDirectionNestedInput>;
  specializationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  specializationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateManyWithoutSpecializationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateManyWithoutSpecializationNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutSpecializationInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutSpecializationInput>>>;
  createMany?: InputMaybe<DirectionCreateManySpecializationInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DirectionUpdateWithWhereUniqueWithoutSpecializationInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DirectionUpdateManyWithWhereWithoutSpecializationInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DirectionUpsertWithWhereUniqueWithoutSpecializationInput>>>;
};

export type DirectionUncheckedUpdateManyWithoutTestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  specializationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutTestInput>>>;
  createMany?: InputMaybe<DirectionCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DirectionUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DirectionUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DirectionUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type DirectionUncheckedUpdateWithoutResponsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  specializationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateWithoutSpecializationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutDirectionNestedInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUncheckedUpdateWithoutTestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutDirectionNestedInput>;
  specializationId?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutDirectionNestedInput>;
  specialization?: InputMaybe<SpecializationUpdateOneRequiredWithoutDirectionsNestedInput>;
  test?: InputMaybe<TestUpdateOneWithoutDirectionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpdateManyWithWhereWithoutSpecializationInput = {
  data: DirectionUpdateManyMutationInput;
  where: DirectionScalarWhereInput;
};

export type DirectionUpdateManyWithWhereWithoutTestInput = {
  data: DirectionUpdateManyMutationInput;
  where: DirectionScalarWhereInput;
};

export type DirectionUpdateManyWithoutSpecializationNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutSpecializationInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutSpecializationInput>>>;
  createMany?: InputMaybe<DirectionCreateManySpecializationInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DirectionUpdateWithWhereUniqueWithoutSpecializationInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DirectionUpdateManyWithWhereWithoutSpecializationInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DirectionUpsertWithWhereUniqueWithoutSpecializationInput>>>;
};

export type DirectionUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DirectionCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<DirectionCreateWithoutTestInput>>>;
  createMany?: InputMaybe<DirectionCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DirectionScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DirectionWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DirectionUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DirectionUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DirectionUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type DirectionUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<DirectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DirectionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<DirectionCreateWithoutResponsesInput>;
  update?: InputMaybe<DirectionUpdateToOneWithWhereWithoutResponsesInput>;
  upsert?: InputMaybe<DirectionUpsertWithoutResponsesInput>;
};

export type DirectionUpdateToOneWithWhereWithoutResponsesInput = {
  data: DirectionUpdateWithoutResponsesInput;
  where?: InputMaybe<DirectionWhereInput>;
};

export type DirectionUpdateWithWhereUniqueWithoutSpecializationInput = {
  data: DirectionUpdateWithoutSpecializationInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionUpdateWithWhereUniqueWithoutTestInput = {
  data: DirectionUpdateWithoutTestInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionUpdateWithoutResponsesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  specialization?: InputMaybe<SpecializationUpdateOneRequiredWithoutDirectionsNestedInput>;
  test?: InputMaybe<TestUpdateOneWithoutDirectionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpdateWithoutSpecializationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutDirectionNestedInput>;
  test?: InputMaybe<TestUpdateOneWithoutDirectionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpdateWithoutTestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutDirectionNestedInput>;
  specialization?: InputMaybe<SpecializationUpdateOneRequiredWithoutDirectionsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumDirectionTypeFieldUpdateOperationsInput>;
};

export type DirectionUpsertWithWhereUniqueWithoutSpecializationInput = {
  create: DirectionCreateWithoutSpecializationInput;
  update: DirectionUpdateWithoutSpecializationInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionUpsertWithWhereUniqueWithoutTestInput = {
  create: DirectionCreateWithoutTestInput;
  update: DirectionUpdateWithoutTestInput;
  where: DirectionWhereUniqueInput;
};

export type DirectionUpsertWithoutResponsesInput = {
  create: DirectionCreateWithoutResponsesInput;
  update: DirectionUpdateWithoutResponsesInput;
  where?: InputMaybe<DirectionWhereInput>;
};

export type DirectionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  specialization?: InputMaybe<SpecializationRelationFilter>;
  specializationId?: InputMaybe<IntFilter>;
  test?: InputMaybe<TestNullableRelationFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumDirectionTypeNullableFilter>;
};

export type DirectionWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DirectionWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  specialization?: InputMaybe<SpecializationRelationFilter>;
  specializationId?: InputMaybe<IntFilter>;
  test?: InputMaybe<TestNullableRelationFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumDirectionTypeNullableFilter>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumDirectionTypeNullableFilter = {
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<InputMaybe<DirectionType>>>;
  not?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<DirectionType>>>;
};

export type EnumDirectionTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<InputMaybe<DirectionType>>>;
  not?: InputMaybe<NestedEnumDirectionTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<DirectionType>>>;
};

export type EnumTaskTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TaskType>;
};

export type EnumTaskTypeFilter = {
  equals?: InputMaybe<TaskType>;
  in?: InputMaybe<Array<InputMaybe<TaskType>>>;
  not?: InputMaybe<NestedEnumTaskTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<TaskType>>>;
};

export type EnumTaskTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTaskTypeFilter>;
  _min?: InputMaybe<NestedEnumTaskTypeFilter>;
  equals?: InputMaybe<TaskType>;
  in?: InputMaybe<Array<InputMaybe<TaskType>>>;
  not?: InputMaybe<NestedEnumTaskTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<TaskType>>>;
};

export type EnumUserRoleEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRoleEnum>;
};

export type EnumUserRoleEnumFilter = {
  equals?: InputMaybe<UserRoleEnum>;
  in?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  not?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
};

export type EnumUserRoleEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  _min?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  equals?: InputMaybe<UserRoleEnum>;
  in?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  not?: InputMaybe<NestedEnumUserRoleEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableListFilter = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  has?: InputMaybe<Scalars['Int']>;
  hasEvery?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hasSome?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  files: Array<Scalars['String']>;
  group: MessagerGroup;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  sender: User;
  senderId: Scalars['Int'];
  text: Scalars['String'];
};

export type MessageAvgAggregateOutputType = {
  __typename?: 'MessageAvgAggregateOutputType';
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

export type MessageAvgOrderByAggregateInput = {
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type MessageCountAggregateOutputType = {
  __typename?: 'MessageCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  files: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  senderId: Scalars['Int'];
  text: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group: MessagerGroupCreateNestedOneWithoutMessagesInput;
  sender: UserCreateNestedOneWithoutMessagesInput;
  text: Scalars['String'];
};

export type MessageCreateManyGroupInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['Int']>;
  senderId: Scalars['Int'];
  text: Scalars['String'];
};

export type MessageCreateManyGroupInputEnvelope = {
  data: MessageCreateManyGroupInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  senderId: Scalars['Int'];
  text: Scalars['String'];
};

export type MessageCreateManySenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type MessageCreateManySenderInputEnvelope = {
  data: MessageCreateManySenderInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutGroupInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutGroupInput>>>;
  createMany?: InputMaybe<MessageCreateManyGroupInputEnvelope>;
};

export type MessageCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageCreateOrConnectWithoutGroupInput = {
  create: MessageCreateWithoutGroupInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutGroupInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sender: UserCreateNestedOneWithoutMessagesInput;
  text: Scalars['String'];
};

export type MessageCreateWithoutSenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group: MessagerGroupCreateNestedOneWithoutMessagesInput;
  text: Scalars['String'];
};

export type MessageCreatefilesInput = {
  set: Scalars['String'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregateOutputType = {
  __typename?: 'MessageMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type MessageMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageMinAggregateOutputType = {
  __typename?: 'MessageMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type MessageMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _avg?: InputMaybe<MessageAvgOrderByAggregateInput>;
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  _sum?: InputMaybe<MessageSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<SortOrder>;
  group?: InputMaybe<MessagerGroupOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  senderId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Files = 'files',
  GroupId = 'groupId',
  Id = 'id',
  SenderId = 'senderId',
  Text = 'text'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<StringNullableListFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  senderId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  files?: InputMaybe<StringNullableListFilter>;
  groupId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  senderId?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type MessageSumAggregateOutputType = {
  __typename?: 'MessageSumAggregateOutputType';
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

export type MessageSumOrderByAggregateInput = {
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type MessageUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  senderId: Scalars['Int'];
  text: Scalars['String'];
};

export type MessageUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutGroupInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutGroupInput>>>;
  createMany?: InputMaybe<MessageCreateManyGroupInputEnvelope>;
};

export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageUncheckedCreateWithoutGroupInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['Int']>;
  senderId: Scalars['Int'];
  text: Scalars['String'];
};

export type MessageUncheckedCreateWithoutSenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type MessageUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  senderId?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  senderId?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyWithoutGroupInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  senderId?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutGroupInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutGroupInput>>>;
  createMany?: InputMaybe<MessageCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type MessageUncheckedUpdateManyWithoutSenderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type MessageUncheckedUpdateWithoutGroupInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  senderId?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateWithoutSenderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutGroupInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutSenderInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutGroupInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutGroupInput>>>;
  createMany?: InputMaybe<MessageCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type MessageUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type MessageUpdateWithWhereUniqueWithoutGroupInput = {
  data: MessageUpdateWithoutGroupInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
  data: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutGroupInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutSenderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  group?: InputMaybe<MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdatefilesInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MessageUpsertWithWhereUniqueWithoutGroupInput = {
  create: MessageCreateWithoutGroupInput;
  update: MessageUpdateWithoutGroupInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  update: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<StringNullableListFilter>;
  group?: InputMaybe<MessagerGroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  sender?: InputMaybe<UserRelationFilter>;
  senderId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<StringNullableListFilter>;
  group?: InputMaybe<MessagerGroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  sender?: InputMaybe<UserRelationFilter>;
  senderId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type MessagerGroup = {
  __typename?: 'MessagerGroup';
  _count: MessagerGroupCountOutputType;
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  creatorId?: Maybe<Scalars['Int']>;
  icon: Scalars['String'];
  id: Scalars['Int'];
  messages: Array<Message>;
  title: Scalars['String'];
  users: Array<User>;
};


export type MessagerGroupMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type MessagerGroupUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type MessagerGroupAvgAggregateOutputType = {
  __typename?: 'MessagerGroupAvgAggregateOutputType';
  creatorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type MessagerGroupAvgOrderByAggregateInput = {
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessagerGroupCountAggregateOutputType = {
  __typename?: 'MessagerGroupCountAggregateOutputType';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  createdAt: Scalars['Int'];
  creatorId: Scalars['Int'];
  icon: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type MessagerGroupCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MessagerGroupCountOutputType = {
  __typename?: 'MessagerGroupCountOutputType';
  messages: Scalars['Int'];
  users: Scalars['Int'];
};

export type MessagerGroupCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutGroupInput>;
  title?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type MessagerGroupCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MessagerGroupCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessagerGroupCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessagerGroupCreateWithoutUsersInput>>>;
};

export type MessagerGroupCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<MessagerGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessagerGroupCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<MessagerGroupCreateWithoutMessagesInput>;
};

export type MessagerGroupCreateOrConnectWithoutMessagesInput = {
  create: MessagerGroupCreateWithoutMessagesInput;
  where: MessagerGroupWhereUniqueInput;
};

export type MessagerGroupCreateOrConnectWithoutUsersInput = {
  create: MessagerGroupCreateWithoutUsersInput;
  where: MessagerGroupWhereUniqueInput;
};

export type MessagerGroupCreateWithoutMessagesInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type MessagerGroupCreateWithoutUsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutGroupInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type MessagerGroupListRelationFilter = {
  every?: InputMaybe<MessagerGroupWhereInput>;
  none?: InputMaybe<MessagerGroupWhereInput>;
  some?: InputMaybe<MessagerGroupWhereInput>;
};

export type MessagerGroupMaxAggregateOutputType = {
  __typename?: 'MessagerGroupMaxAggregateOutputType';
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type MessagerGroupMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MessagerGroupMinAggregateOutputType = {
  __typename?: 'MessagerGroupMinAggregateOutputType';
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type MessagerGroupMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MessagerGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessagerGroupOrderByWithAggregationInput = {
  _avg?: InputMaybe<MessagerGroupAvgOrderByAggregateInput>;
  _count?: InputMaybe<MessagerGroupCountOrderByAggregateInput>;
  _max?: InputMaybe<MessagerGroupMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessagerGroupMinOrderByAggregateInput>;
  _sum?: InputMaybe<MessagerGroupSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrderInput>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type MessagerGroupOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrderInput>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type MessagerGroupRelationFilter = {
  is?: InputMaybe<MessagerGroupWhereInput>;
  isNot?: InputMaybe<MessagerGroupWhereInput>;
};

export enum MessagerGroupScalarFieldEnum {
  Active = 'active',
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  Icon = 'icon',
  Id = 'id',
  Title = 'title'
}

export type MessagerGroupScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereInput>>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creatorId?: InputMaybe<IntNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type MessagerGroupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereWithAggregatesInput>>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  creatorId?: InputMaybe<IntNullableWithAggregatesFilter>;
  icon?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type MessagerGroupSumAggregateOutputType = {
  __typename?: 'MessagerGroupSumAggregateOutputType';
  creatorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type MessagerGroupSumOrderByAggregateInput = {
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessagerGroupUncheckedCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutGroupInput>;
  title?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserUncheckedCreateNestedManyWithoutGroupsInput>;
};

export type MessagerGroupUncheckedCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessagerGroupCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessagerGroupCreateWithoutUsersInput>>>;
};

export type MessagerGroupUncheckedCreateWithoutMessagesInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserUncheckedCreateNestedManyWithoutGroupsInput>;
};

export type MessagerGroupUncheckedCreateWithoutUsersInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutGroupInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type MessagerGroupUncheckedUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUncheckedUpdateManyWithoutGroupsNestedInput>;
};

export type MessagerGroupUncheckedUpdateManyInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessagerGroupUncheckedUpdateManyWithoutUsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessagerGroupCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessagerGroupCreateWithoutUsersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessagerGroupUpdateWithWhereUniqueWithoutUsersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessagerGroupUpdateManyWithWhereWithoutUsersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessagerGroupUpsertWithWhereUniqueWithoutUsersInput>>>;
};

export type MessagerGroupUncheckedUpdateWithoutMessagesInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUncheckedUpdateManyWithoutGroupsNestedInput>;
};

export type MessagerGroupUncheckedUpdateWithoutUsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessagerGroupUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type MessagerGroupUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessagerGroupUpdateManyWithWhereWithoutUsersInput = {
  data: MessagerGroupUpdateManyMutationInput;
  where: MessagerGroupScalarWhereInput;
};

export type MessagerGroupUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessagerGroupCreateOrConnectWithoutUsersInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessagerGroupCreateWithoutUsersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessagerGroupScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessagerGroupWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessagerGroupUpdateWithWhereUniqueWithoutUsersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessagerGroupUpdateManyWithWhereWithoutUsersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessagerGroupUpsertWithWhereUniqueWithoutUsersInput>>>;
};

export type MessagerGroupUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<MessagerGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessagerGroupCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<MessagerGroupCreateWithoutMessagesInput>;
  update?: InputMaybe<MessagerGroupUpdateToOneWithWhereWithoutMessagesInput>;
  upsert?: InputMaybe<MessagerGroupUpsertWithoutMessagesInput>;
};

export type MessagerGroupUpdateToOneWithWhereWithoutMessagesInput = {
  data: MessagerGroupUpdateWithoutMessagesInput;
  where?: InputMaybe<MessagerGroupWhereInput>;
};

export type MessagerGroupUpdateWithWhereUniqueWithoutUsersInput = {
  data: MessagerGroupUpdateWithoutUsersInput;
  where: MessagerGroupWhereUniqueInput;
};

export type MessagerGroupUpdateWithoutMessagesInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type MessagerGroupUpdateWithoutUsersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creatorId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutGroupNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessagerGroupUpsertWithWhereUniqueWithoutUsersInput = {
  create: MessagerGroupCreateWithoutUsersInput;
  update: MessagerGroupUpdateWithoutUsersInput;
  where: MessagerGroupWhereUniqueInput;
};

export type MessagerGroupUpsertWithoutMessagesInput = {
  create: MessagerGroupCreateWithoutMessagesInput;
  update: MessagerGroupUpdateWithoutMessagesInput;
  where?: InputMaybe<MessagerGroupWhereInput>;
};

export type MessagerGroupWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creatorId?: InputMaybe<IntNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type MessagerGroupWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessagerGroupWhereInput>>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creatorId?: InputMaybe<IntNullableFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']>;
  messages?: InputMaybe<MessageListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneAnswer: Answer;
  createOneDirection: Direction;
  createOneMessage: Message;
  createOneMessagerGroup: MessagerGroup;
  createOneResponse: Response;
  createOneSpecialization: Specialization;
  createOneTask: Task;
  createOneTaskAnswer: TaskAnswer;
  createOneTest: Test;
  createOneUser: User;
  deleteManyAnswer: BatchPayload;
  deleteManyDirection: BatchPayload;
  deleteManyMessage: BatchPayload;
  deleteManyMessagerGroup: BatchPayload;
  deleteManyResponse: BatchPayload;
  deleteManySpecialization: BatchPayload;
  deleteManyTask: BatchPayload;
  deleteManyTaskAnswer: BatchPayload;
  deleteManyTest: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneAnswer?: Maybe<Answer>;
  deleteOneDirection?: Maybe<Direction>;
  deleteOneMessage?: Maybe<Message>;
  deleteOneMessagerGroup?: Maybe<MessagerGroup>;
  deleteOneResponse?: Maybe<Response>;
  deleteOneSpecialization?: Maybe<Specialization>;
  deleteOneTask?: Maybe<Task>;
  deleteOneTaskAnswer?: Maybe<TaskAnswer>;
  deleteOneTest?: Maybe<Test>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateField: Field;
  updateManyAnswer: BatchPayload;
  updateManyDirection: BatchPayload;
  updateManyMessage: BatchPayload;
  updateManyMessagerGroup: BatchPayload;
  updateManyResponse: BatchPayload;
  updateManySpecialization: BatchPayload;
  updateManyTask: BatchPayload;
  updateManyTaskAnswer: BatchPayload;
  updateManyTest: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneAnswer: Answer;
  updateOneDirection: Direction;
  updateOneMessage: Message;
  updateOneMessagerGroup: MessagerGroup;
  updateOneResponse: Response;
  updateOneSpecialization: Specialization;
  updateOneTask: Task;
  updateOneTaskAnswer: TaskAnswer;
  updateOneTest: Test;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneAnswer: Answer;
  upsertOneDirection: Direction;
  upsertOneMessage: Message;
  upsertOneMessagerGroup: MessagerGroup;
  upsertOneResponse: Response;
  upsertOneSpecialization: Specialization;
  upsertOneTask: Task;
  upsertOneTaskAnswer: TaskAnswer;
  upsertOneTest: Test;
  upsertOneUser: User;
};


export type MutationCreateOneAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateOneDirectionArgs = {
  data: DirectionCreateInput;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOneMessagerGroupArgs = {
  data?: InputMaybe<MessagerGroupCreateInput>;
};


export type MutationCreateOneResponseArgs = {
  data: ResponseCreateInput;
};


export type MutationCreateOneSpecializationArgs = {
  data: SpecializationCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneTaskAnswerArgs = {
  data: TaskAnswerCreateInput;
};


export type MutationCreateOneTestArgs = {
  data: TestCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyAnswerArgs = {
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationDeleteManyDirectionArgs = {
  where?: InputMaybe<DirectionWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyMessagerGroupArgs = {
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type MutationDeleteManyResponseArgs = {
  where?: InputMaybe<ResponseWhereInput>;
};


export type MutationDeleteManySpecializationArgs = {
  where?: InputMaybe<SpecializationWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyTaskAnswerArgs = {
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type MutationDeleteManyTestArgs = {
  where?: InputMaybe<TestWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationDeleteOneDirectionArgs = {
  where: DirectionWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOneMessagerGroupArgs = {
  where: MessagerGroupWhereUniqueInput;
};


export type MutationDeleteOneResponseArgs = {
  where: ResponseWhereUniqueInput;
};


export type MutationDeleteOneSpecializationArgs = {
  where: SpecializationWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneTaskAnswerArgs = {
  where: TaskAnswerWhereUniqueInput;
};


export type MutationDeleteOneTestArgs = {
  where: TestWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyAnswerArgs = {
  data: AnswerUpdateManyMutationInput;
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationUpdateManyDirectionArgs = {
  data: DirectionUpdateManyMutationInput;
  where?: InputMaybe<DirectionWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyMessagerGroupArgs = {
  data: MessagerGroupUpdateManyMutationInput;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type MutationUpdateManyResponseArgs = {
  data: ResponseUpdateManyMutationInput;
  where?: InputMaybe<ResponseWhereInput>;
};


export type MutationUpdateManySpecializationArgs = {
  data: SpecializationUpdateManyMutationInput;
  where?: InputMaybe<SpecializationWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyTaskAnswerArgs = {
  data: TaskAnswerUpdateManyMutationInput;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type MutationUpdateManyTestArgs = {
  data: TestUpdateManyMutationInput;
  where?: InputMaybe<TestWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateOneDirectionArgs = {
  data: DirectionUpdateInput;
  where: DirectionWhereUniqueInput;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOneMessagerGroupArgs = {
  data: MessagerGroupUpdateInput;
  where: MessagerGroupWhereUniqueInput;
};


export type MutationUpdateOneResponseArgs = {
  data: ResponseUpdateInput;
  where: ResponseWhereUniqueInput;
};


export type MutationUpdateOneSpecializationArgs = {
  data: SpecializationUpdateInput;
  where: SpecializationWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneTaskAnswerArgs = {
  data: TaskAnswerUpdateInput;
  where: TaskAnswerWhereUniqueInput;
};


export type MutationUpdateOneTestArgs = {
  data: TestUpdateInput;
  where: TestWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneAnswerArgs = {
  create: AnswerCreateInput;
  update: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpsertOneDirectionArgs = {
  create: DirectionCreateInput;
  update: DirectionUpdateInput;
  where: DirectionWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOneMessagerGroupArgs = {
  create: MessagerGroupCreateInput;
  update: MessagerGroupUpdateInput;
  where: MessagerGroupWhereUniqueInput;
};


export type MutationUpsertOneResponseArgs = {
  create: ResponseCreateInput;
  update: ResponseUpdateInput;
  where: ResponseWhereUniqueInput;
};


export type MutationUpsertOneSpecializationArgs = {
  create: SpecializationCreateInput;
  update: SpecializationUpdateInput;
  where: SpecializationWhereUniqueInput;
};


export type MutationUpsertOneTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertOneTaskAnswerArgs = {
  create: TaskAnswerCreateInput;
  update: TaskAnswerUpdateInput;
  where: TaskAnswerWhereUniqueInput;
};


export type MutationUpsertOneTestArgs = {
  create: TestCreateInput;
  update: TestUpdateInput;
  where: TestWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedEnumDirectionTypeNullableFilter = {
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<InputMaybe<DirectionType>>>;
  not?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<DirectionType>>>;
};

export type NestedEnumDirectionTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumDirectionTypeNullableFilter>;
  equals?: InputMaybe<DirectionType>;
  in?: InputMaybe<Array<InputMaybe<DirectionType>>>;
  not?: InputMaybe<NestedEnumDirectionTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<DirectionType>>>;
};

export type NestedEnumTaskTypeFilter = {
  equals?: InputMaybe<TaskType>;
  in?: InputMaybe<Array<InputMaybe<TaskType>>>;
  not?: InputMaybe<NestedEnumTaskTypeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<TaskType>>>;
};

export type NestedEnumTaskTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTaskTypeFilter>;
  _min?: InputMaybe<NestedEnumTaskTypeFilter>;
  equals?: InputMaybe<TaskType>;
  in?: InputMaybe<Array<InputMaybe<TaskType>>>;
  not?: InputMaybe<NestedEnumTaskTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<TaskType>>>;
};

export type NestedEnumUserRoleEnumFilter = {
  equals?: InputMaybe<UserRoleEnum>;
  in?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  not?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
};

export type NestedEnumUserRoleEnumWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  _min?: InputMaybe<NestedEnumUserRoleEnumFilter>;
  equals?: InputMaybe<UserRoleEnum>;
  in?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  not?: InputMaybe<NestedEnumUserRoleEnumWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumDirectionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<DirectionType>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateAnswer?: Maybe<AggregateAnswer>;
  aggregateDirection?: Maybe<AggregateDirection>;
  aggregateMessage?: Maybe<AggregateMessage>;
  aggregateMessagerGroup?: Maybe<AggregateMessagerGroup>;
  aggregateResponse?: Maybe<AggregateResponse>;
  aggregateSpecialization?: Maybe<AggregateSpecialization>;
  aggregateTask?: Maybe<AggregateTask>;
  aggregateTaskAnswer?: Maybe<AggregateTaskAnswer>;
  aggregateTest?: Maybe<AggregateTest>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstAnswer?: Maybe<Answer>;
  findFirstDirection?: Maybe<Direction>;
  findFirstMessage?: Maybe<Message>;
  findFirstMessagerGroup?: Maybe<MessagerGroup>;
  findFirstResponse?: Maybe<Response>;
  findFirstSpecialization?: Maybe<Specialization>;
  findFirstTask?: Maybe<Task>;
  findFirstTaskAnswer?: Maybe<TaskAnswer>;
  findFirstTest?: Maybe<Test>;
  findFirstUser?: Maybe<User>;
  findManyAnswer: Array<Answer>;
  findManyAnswerCount: Scalars['Int'];
  findManyDirection: Array<Direction>;
  findManyDirectionCount: Scalars['Int'];
  findManyMessage: Array<Message>;
  findManyMessageCount: Scalars['Int'];
  findManyMessagerGroup: Array<MessagerGroup>;
  findManyMessagerGroupCount: Scalars['Int'];
  findManyResponse: Array<Response>;
  findManyResponseCount: Scalars['Int'];
  findManySpecialization: Array<Specialization>;
  findManySpecializationCount: Scalars['Int'];
  findManyTask: Array<Task>;
  findManyTaskAnswer: Array<TaskAnswer>;
  findManyTaskAnswerCount: Scalars['Int'];
  findManyTaskCount: Scalars['Int'];
  findManyTest: Array<Test>;
  findManyTestCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueAnswer?: Maybe<Answer>;
  findUniqueDirection?: Maybe<Direction>;
  findUniqueMessage?: Maybe<Message>;
  findUniqueMessagerGroup?: Maybe<MessagerGroup>;
  findUniqueResponse?: Maybe<Response>;
  findUniqueSpecialization?: Maybe<Specialization>;
  findUniqueTask?: Maybe<Task>;
  findUniqueTaskAnswer?: Maybe<TaskAnswer>;
  findUniqueTest?: Maybe<Test>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryAggregateAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryAggregateDirectionArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregateMessagerGroupArgs = {
  cursor?: InputMaybe<MessagerGroupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<MessagerGroupOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type QueryAggregateResponseArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type QueryAggregateSpecializationArgs = {
  cursor?: InputMaybe<SpecializationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<SpecializationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecializationWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateTaskAnswerArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type QueryAggregateTestArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<TestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindFirstDirectionArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DirectionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstMessagerGroupArgs = {
  cursor?: InputMaybe<MessagerGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessagerGroupScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessagerGroupOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type QueryFindFirstResponseArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type QueryFindFirstSpecializationArgs = {
  cursor?: InputMaybe<SpecializationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<SpecializationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<SpecializationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecializationWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTaskAnswerArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type QueryFindFirstTestArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindManyAnswerCountArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindManyDirectionArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DirectionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};


export type QueryFindManyDirectionCountArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DirectionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};


export type QueryFindManyMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindManyMessageCountArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindManyMessagerGroupArgs = {
  cursor?: InputMaybe<MessagerGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessagerGroupScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessagerGroupOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type QueryFindManyMessagerGroupCountArgs = {
  cursor?: InputMaybe<MessagerGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessagerGroupScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessagerGroupOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type QueryFindManyResponseArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type QueryFindManyResponseCountArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type QueryFindManySpecializationArgs = {
  cursor?: InputMaybe<SpecializationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<SpecializationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<SpecializationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecializationWhereInput>;
};


export type QueryFindManySpecializationCountArgs = {
  cursor?: InputMaybe<SpecializationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<SpecializationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<SpecializationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SpecializationWhereInput>;
};


export type QueryFindManyTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindManyTaskAnswerArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type QueryFindManyTaskAnswerCountArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type QueryFindManyTaskCountArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindManyTestArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryFindManyTestCountArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryFindUniqueDirectionArgs = {
  where: DirectionWhereUniqueInput;
};


export type QueryFindUniqueMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryFindUniqueMessagerGroupArgs = {
  where: MessagerGroupWhereUniqueInput;
};


export type QueryFindUniqueResponseArgs = {
  where: ResponseWhereUniqueInput;
};


export type QueryFindUniqueSpecializationArgs = {
  where: SpecializationWhereUniqueInput;
};


export type QueryFindUniqueTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryFindUniqueTaskAnswerArgs = {
  where: TaskAnswerWhereUniqueInput;
};


export type QueryFindUniqueTestArgs = {
  where: TestWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Response = {
  __typename?: 'Response';
  _count: ResponseCountOutputType;
  answers: Array<Answer>;
  createdAt: Scalars['DateTime'];
  direction: Direction;
  directionId: Scalars['Int'];
  id: Scalars['Int'];
  tests: Array<Test>;
  text?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
  verdict?: Maybe<Scalars['String']>;
};


export type ResponseAnswersArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type ResponseTestsArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};

export type ResponseAvgAggregateOutputType = {
  __typename?: 'ResponseAvgAggregateOutputType';
  directionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ResponseAvgOrderByAggregateInput = {
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ResponseCountAggregateOutputType = {
  __typename?: 'ResponseCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  directionId: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
  userId: Scalars['Int'];
  verdict: Scalars['Int'];
};

export type ResponseCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type ResponseCountOutputType = {
  __typename?: 'ResponseCountOutputType';
  answers: Scalars['Int'];
  tests: Scalars['Int'];
};

export type ResponseCreateInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction: DirectionCreateNestedOneWithoutResponsesInput;
  tests?: InputMaybe<TestCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutResponsesInput;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyDirectionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyDirectionInputEnvelope = {
  data: ResponseCreateManyDirectionInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateManyUserInputEnvelope = {
  data: ResponseCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ResponseCreateNestedManyWithoutAnswersInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutAnswersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutAnswersInput>>>;
};

export type ResponseCreateNestedManyWithoutDirectionInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutDirectionInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutDirectionInput>>>;
  createMany?: InputMaybe<ResponseCreateManyDirectionInputEnvelope>;
};

export type ResponseCreateNestedManyWithoutTestsInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutTestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutTestsInput>>>;
};

export type ResponseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
};

export type ResponseCreateOrConnectWithoutAnswersInput = {
  create: ResponseCreateWithoutAnswersInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutDirectionInput = {
  create: ResponseCreateWithoutDirectionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutTestsInput = {
  create: ResponseCreateWithoutTestsInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateOrConnectWithoutUserInput = {
  create: ResponseCreateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction: DirectionCreateNestedOneWithoutResponsesInput;
  tests?: InputMaybe<TestCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutResponsesInput;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tests?: InputMaybe<TestCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutResponsesInput;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateWithoutTestsInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction: DirectionCreateNestedOneWithoutResponsesInput;
  text?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutResponsesInput;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseCreateWithoutUserInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction: DirectionCreateNestedOneWithoutResponsesInput;
  tests?: InputMaybe<TestCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseListRelationFilter = {
  every?: InputMaybe<ResponseWhereInput>;
  none?: InputMaybe<ResponseWhereInput>;
  some?: InputMaybe<ResponseWhereInput>;
};

export type ResponseMaxAggregateOutputType = {
  __typename?: 'ResponseMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  directionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  verdict?: Maybe<Scalars['String']>;
};

export type ResponseMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type ResponseMinAggregateOutputType = {
  __typename?: 'ResponseMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  directionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  verdict?: Maybe<Scalars['String']>;
};

export type ResponseMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type ResponseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ResponseOrderByWithAggregationInput = {
  _avg?: InputMaybe<ResponseAvgOrderByAggregateInput>;
  _count?: InputMaybe<ResponseCountOrderByAggregateInput>;
  _max?: InputMaybe<ResponseMaxOrderByAggregateInput>;
  _min?: InputMaybe<ResponseMinOrderByAggregateInput>;
  _sum?: InputMaybe<ResponseSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrderInput>;
};

export type ResponseOrderByWithRelationInput = {
  answers?: InputMaybe<AnswerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  direction?: InputMaybe<DirectionOrderByWithRelationInput>;
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tests?: InputMaybe<TestOrderByRelationAggregateInput>;
  text?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrderInput>;
};

export enum ResponseScalarFieldEnum {
  CreatedAt = 'createdAt',
  DirectionId = 'directionId',
  Id = 'id',
  Text = 'text',
  UserId = 'userId',
  Verdict = 'verdict'
}

export type ResponseScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  directionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<StringNullableFilter>;
};

export type ResponseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<ResponseScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ResponseScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ResponseScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  directionId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  verdict?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ResponseSumAggregateOutputType = {
  __typename?: 'ResponseSumAggregateOutputType';
  directionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ResponseSumOrderByAggregateInput = {
  directionId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ResponseUncheckedCreateInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  tests?: InputMaybe<TestUncheckedCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseUncheckedCreateNestedManyWithoutAnswersInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutAnswersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutAnswersInput>>>;
};

export type ResponseUncheckedCreateNestedManyWithoutDirectionInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutDirectionInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutDirectionInput>>>;
  createMany?: InputMaybe<ResponseCreateManyDirectionInputEnvelope>;
};

export type ResponseUncheckedCreateNestedManyWithoutTestsInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutTestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutTestsInput>>>;
};

export type ResponseUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
};

export type ResponseUncheckedCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  tests?: InputMaybe<TestUncheckedCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseUncheckedCreateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tests?: InputMaybe<TestUncheckedCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseUncheckedCreateWithoutTestsInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseUncheckedCreateWithoutUserInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutResponseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directionId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  tests?: InputMaybe<TestUncheckedCreateNestedManyWithoutResponseInput>;
  text?: InputMaybe<Scalars['String']>;
  verdict?: InputMaybe<Scalars['String']>;
};

export type ResponseUncheckedUpdateInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  tests?: InputMaybe<TestUncheckedUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyWithoutAnswersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutAnswersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutAnswersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutAnswersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutAnswersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutAnswersInput>>>;
};

export type ResponseUncheckedUpdateManyWithoutDirectionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyWithoutDirectionNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutDirectionInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutDirectionInput>>>;
  createMany?: InputMaybe<ResponseCreateManyDirectionInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutDirectionInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutDirectionInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutDirectionInput>>>;
};

export type ResponseUncheckedUpdateManyWithoutTestsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyWithoutTestsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutTestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutTestsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutTestsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutTestsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutTestsInput>>>;
};

export type ResponseUncheckedUpdateManyWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ResponseUncheckedUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  tests?: InputMaybe<TestUncheckedUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  tests?: InputMaybe<TestUncheckedUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateWithoutTestsInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUncheckedUpdateWithoutUserInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  tests?: InputMaybe<TestUncheckedUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateOneRequiredWithoutResponsesNestedInput>;
  tests?: InputMaybe<TestUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateManyWithWhereWithoutAnswersInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutDirectionInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutTestsInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithWhereWithoutUserInput = {
  data: ResponseUpdateManyMutationInput;
  where: ResponseScalarWhereInput;
};

export type ResponseUpdateManyWithoutAnswersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutAnswersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutAnswersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutAnswersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutAnswersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutAnswersInput>>>;
};

export type ResponseUpdateManyWithoutDirectionNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutDirectionInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutDirectionInput>>>;
  createMany?: InputMaybe<ResponseCreateManyDirectionInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutDirectionInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutDirectionInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutDirectionInput>>>;
};

export type ResponseUpdateManyWithoutTestsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutTestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutTestsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutTestsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutTestsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutTestsInput>>>;
};

export type ResponseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ResponseCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<ResponseCreateWithoutUserInput>>>;
  createMany?: InputMaybe<ResponseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ResponseScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ResponseWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ResponseUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ResponseUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ResponseUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ResponseUpdateWithWhereUniqueWithoutAnswersInput = {
  data: ResponseUpdateWithoutAnswersInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutDirectionInput = {
  data: ResponseUpdateWithoutDirectionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutTestsInput = {
  data: ResponseUpdateWithoutTestsInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithWhereUniqueWithoutUserInput = {
  data: ResponseUpdateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateOneRequiredWithoutResponsesNestedInput>;
  tests?: InputMaybe<TestUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tests?: InputMaybe<TestUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateWithoutTestsInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateOneRequiredWithoutResponsesNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutResponsesNestedInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpdateWithoutUserInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateOneRequiredWithoutResponsesNestedInput>;
  tests?: InputMaybe<TestUpdateManyWithoutResponseNestedInput>;
  text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ResponseUpsertWithWhereUniqueWithoutAnswersInput = {
  create: ResponseCreateWithoutAnswersInput;
  update: ResponseUpdateWithoutAnswersInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutDirectionInput = {
  create: ResponseCreateWithoutDirectionInput;
  update: ResponseUpdateWithoutDirectionInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutTestsInput = {
  create: ResponseCreateWithoutTestsInput;
  update: ResponseUpdateWithoutTestsInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseUpsertWithWhereUniqueWithoutUserInput = {
  create: ResponseCreateWithoutUserInput;
  update: ResponseUpdateWithoutUserInput;
  where: ResponseWhereUniqueInput;
};

export type ResponseWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  direction?: InputMaybe<DirectionRelationFilter>;
  directionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  tests?: InputMaybe<TestListRelationFilter>;
  text?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<StringNullableFilter>;
};

export type ResponseWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ResponseWhereInput>>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  direction?: InputMaybe<DirectionRelationFilter>;
  directionId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  tests?: InputMaybe<TestListRelationFilter>;
  text?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<StringNullableFilter>;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Specialization = {
  __typename?: 'Specialization';
  _count: SpecializationCountOutputType;
  createdAt: Scalars['DateTime'];
  directions: Array<Direction>;
  id: Scalars['Int'];
  title: Scalars['String'];
};


export type SpecializationDirectionsArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DirectionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};

export type SpecializationAvgAggregateOutputType = {
  __typename?: 'SpecializationAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type SpecializationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SpecializationCountAggregateOutputType = {
  __typename?: 'SpecializationCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type SpecializationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SpecializationCountOutputType = {
  __typename?: 'SpecializationCountOutputType';
  directions: Scalars['Int'];
};

export type SpecializationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directions?: InputMaybe<DirectionCreateNestedManyWithoutSpecializationInput>;
  title: Scalars['String'];
};

export type SpecializationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type SpecializationCreateNestedOneWithoutDirectionsInput = {
  connect?: InputMaybe<SpecializationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecializationCreateOrConnectWithoutDirectionsInput>;
  create?: InputMaybe<SpecializationCreateWithoutDirectionsInput>;
};

export type SpecializationCreateOrConnectWithoutDirectionsInput = {
  create: SpecializationCreateWithoutDirectionsInput;
  where: SpecializationWhereUniqueInput;
};

export type SpecializationCreateWithoutDirectionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type SpecializationMaxAggregateOutputType = {
  __typename?: 'SpecializationMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type SpecializationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SpecializationMinAggregateOutputType = {
  __typename?: 'SpecializationMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type SpecializationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SpecializationOrderByWithAggregationInput = {
  _avg?: InputMaybe<SpecializationAvgOrderByAggregateInput>;
  _count?: InputMaybe<SpecializationCountOrderByAggregateInput>;
  _max?: InputMaybe<SpecializationMaxOrderByAggregateInput>;
  _min?: InputMaybe<SpecializationMinOrderByAggregateInput>;
  _sum?: InputMaybe<SpecializationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SpecializationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  directions?: InputMaybe<DirectionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SpecializationRelationFilter = {
  is?: InputMaybe<SpecializationWhereInput>;
  isNot?: InputMaybe<SpecializationWhereInput>;
};

export enum SpecializationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title'
}

export type SpecializationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<SpecializationScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SpecializationScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SpecializationScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type SpecializationSumAggregateOutputType = {
  __typename?: 'SpecializationSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type SpecializationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SpecializationUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directions?: InputMaybe<DirectionUncheckedCreateNestedManyWithoutSpecializationInput>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type SpecializationUncheckedCreateWithoutDirectionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type SpecializationUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directions?: InputMaybe<DirectionUncheckedUpdateManyWithoutSpecializationNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUncheckedUpdateWithoutDirectionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  directions?: InputMaybe<DirectionUpdateManyWithoutSpecializationNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUpdateOneRequiredWithoutDirectionsNestedInput = {
  connect?: InputMaybe<SpecializationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SpecializationCreateOrConnectWithoutDirectionsInput>;
  create?: InputMaybe<SpecializationCreateWithoutDirectionsInput>;
  update?: InputMaybe<SpecializationUpdateToOneWithWhereWithoutDirectionsInput>;
  upsert?: InputMaybe<SpecializationUpsertWithoutDirectionsInput>;
};

export type SpecializationUpdateToOneWithWhereWithoutDirectionsInput = {
  data: SpecializationUpdateWithoutDirectionsInput;
  where?: InputMaybe<SpecializationWhereInput>;
};

export type SpecializationUpdateWithoutDirectionsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SpecializationUpsertWithoutDirectionsInput = {
  create: SpecializationCreateWithoutDirectionsInput;
  update: SpecializationUpdateWithoutDirectionsInput;
  where?: InputMaybe<SpecializationWhereInput>;
};

export type SpecializationWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  directions?: InputMaybe<DirectionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SpecializationWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SpecializationWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  directions?: InputMaybe<DirectionListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<StringFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasSome?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  _count: TaskCountOutputType;
  code?: Maybe<Scalars['String']>;
  correctMultipleAnswer: Array<Scalars['Int']>;
  correctSingleAnswer?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  question: Scalars['String'];
  taskAnswers: Array<TaskAnswer>;
  test?: Maybe<Test>;
  testId?: Maybe<Scalars['Int']>;
  type: TaskType;
  variants: Array<Scalars['String']>;
};


export type TaskTaskAnswersArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type TaskTestArgs = {
  where?: InputMaybe<TestWhereInput>;
};

export type TaskAnswer = {
  __typename?: 'TaskAnswer';
  answer: Scalars['String'];
  answerModel: Answer;
  answerModelId: Scalars['Int'];
  id: Scalars['Int'];
  task: Task;
  taskId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
  verdict?: Maybe<Scalars['Int']>;
};

export type TaskAnswerAvgAggregateOutputType = {
  __typename?: 'TaskAnswerAvgAggregateOutputType';
  answerModelId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  taskId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  verdict?: Maybe<Scalars['Float']>;
};

export type TaskAnswerAvgOrderByAggregateInput = {
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type TaskAnswerCountAggregateOutputType = {
  __typename?: 'TaskAnswerCountAggregateOutputType';
  _all: Scalars['Int'];
  answer: Scalars['Int'];
  answerModelId: Scalars['Int'];
  id: Scalars['Int'];
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  verdict: Scalars['Int'];
};

export type TaskAnswerCountOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type TaskAnswerCreateInput = {
  answer: Scalars['String'];
  answerModel: AnswerCreateNestedOneWithoutTaskAnswersInput;
  task: TaskCreateNestedOneWithoutTaskAnswersInput;
  user: UserCreateNestedOneWithoutAnswersInput;
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateManyAnswerModelInput = {
  answer: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateManyAnswerModelInputEnvelope = {
  data: TaskAnswerCreateManyAnswerModelInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskAnswerCreateManyInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateManyTaskInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateManyTaskInputEnvelope = {
  data: TaskAnswerCreateManyTaskInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskAnswerCreateManyUserInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateManyUserInputEnvelope = {
  data: TaskAnswerCreateManyUserInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskAnswerCreateNestedManyWithoutAnswerModelInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutAnswerModelInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutAnswerModelInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyAnswerModelInputEnvelope>;
};

export type TaskAnswerCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutTaskInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutTaskInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyTaskInputEnvelope>;
};

export type TaskAnswerCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutUserInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyUserInputEnvelope>;
};

export type TaskAnswerCreateOrConnectWithoutAnswerModelInput = {
  create: TaskAnswerCreateWithoutAnswerModelInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerCreateOrConnectWithoutTaskInput = {
  create: TaskAnswerCreateWithoutTaskInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerCreateOrConnectWithoutUserInput = {
  create: TaskAnswerCreateWithoutUserInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerCreateWithoutAnswerModelInput = {
  answer: Scalars['String'];
  task: TaskCreateNestedOneWithoutTaskAnswersInput;
  user: UserCreateNestedOneWithoutAnswersInput;
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateWithoutTaskInput = {
  answer: Scalars['String'];
  answerModel: AnswerCreateNestedOneWithoutTaskAnswersInput;
  user: UserCreateNestedOneWithoutAnswersInput;
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerCreateWithoutUserInput = {
  answer: Scalars['String'];
  answerModel: AnswerCreateNestedOneWithoutTaskAnswersInput;
  task: TaskCreateNestedOneWithoutTaskAnswersInput;
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerListRelationFilter = {
  every?: InputMaybe<TaskAnswerWhereInput>;
  none?: InputMaybe<TaskAnswerWhereInput>;
  some?: InputMaybe<TaskAnswerWhereInput>;
};

export type TaskAnswerMaxAggregateOutputType = {
  __typename?: 'TaskAnswerMaxAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  answerModelId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  taskId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  verdict?: Maybe<Scalars['Int']>;
};

export type TaskAnswerMaxOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type TaskAnswerMinAggregateOutputType = {
  __typename?: 'TaskAnswerMinAggregateOutputType';
  answer?: Maybe<Scalars['String']>;
  answerModelId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  taskId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  verdict?: Maybe<Scalars['Int']>;
};

export type TaskAnswerMinOrderByAggregateInput = {
  answer?: InputMaybe<SortOrder>;
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type TaskAnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskAnswerOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAnswerAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskAnswerCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskAnswerMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskAnswerMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskAnswerSumOrderByAggregateInput>;
  answer?: InputMaybe<SortOrder>;
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrderInput>;
};

export type TaskAnswerOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrder>;
  answerModel?: InputMaybe<AnswerOrderByWithRelationInput>;
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrderInput>;
};

export enum TaskAnswerScalarFieldEnum {
  Answer = 'answer',
  AnswerModelId = 'answerModelId',
  Id = 'id',
  TaskId = 'taskId',
  UserId = 'userId',
  Verdict = 'verdict'
}

export type TaskAnswerScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  answer?: InputMaybe<StringFilter>;
  answerModelId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  taskId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<IntNullableFilter>;
};

export type TaskAnswerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereWithAggregatesInput>>>;
  answer?: InputMaybe<StringWithAggregatesFilter>;
  answerModelId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  taskId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  verdict?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type TaskAnswerSumAggregateOutputType = {
  __typename?: 'TaskAnswerSumAggregateOutputType';
  answerModelId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  taskId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  verdict?: Maybe<Scalars['Int']>;
};

export type TaskAnswerSumOrderByAggregateInput = {
  answerModelId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  verdict?: InputMaybe<SortOrder>;
};

export type TaskAnswerUncheckedCreateInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerUncheckedCreateNestedManyWithoutAnswerModelInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutAnswerModelInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutAnswerModelInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyAnswerModelInputEnvelope>;
};

export type TaskAnswerUncheckedCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutTaskInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutTaskInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyTaskInputEnvelope>;
};

export type TaskAnswerUncheckedCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutUserInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyUserInputEnvelope>;
};

export type TaskAnswerUncheckedCreateWithoutAnswerModelInput = {
  answer: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerUncheckedCreateWithoutTaskInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerUncheckedCreateWithoutUserInput = {
  answer: Scalars['String'];
  answerModelId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  taskId: Scalars['Int'];
  verdict?: InputMaybe<Scalars['Int']>;
};

export type TaskAnswerUncheckedUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateManyInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateManyWithoutAnswerModelInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateManyWithoutAnswerModelNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutAnswerModelInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutAnswerModelInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyAnswerModelInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutAnswerModelInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutAnswerModelInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutAnswerModelInput>>>;
};

export type TaskAnswerUncheckedUpdateManyWithoutTaskInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutTaskInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutTaskInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutTaskInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutTaskInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutTaskInput>>>;
};

export type TaskAnswerUncheckedUpdateManyWithoutUserInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutUserInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TaskAnswerUncheckedUpdateWithoutAnswerModelInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateWithoutTaskInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  userId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUncheckedUpdateWithoutUserInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModelId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  taskId?: InputMaybe<IntFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpdateInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModel?: InputMaybe<AnswerUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAnswersNestedInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpdateManyMutationInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpdateManyWithWhereWithoutAnswerModelInput = {
  data: TaskAnswerUpdateManyMutationInput;
  where: TaskAnswerScalarWhereInput;
};

export type TaskAnswerUpdateManyWithWhereWithoutTaskInput = {
  data: TaskAnswerUpdateManyMutationInput;
  where: TaskAnswerScalarWhereInput;
};

export type TaskAnswerUpdateManyWithWhereWithoutUserInput = {
  data: TaskAnswerUpdateManyMutationInput;
  where: TaskAnswerScalarWhereInput;
};

export type TaskAnswerUpdateManyWithoutAnswerModelNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutAnswerModelInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutAnswerModelInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyAnswerModelInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutAnswerModelInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutAnswerModelInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutAnswerModelInput>>>;
};

export type TaskAnswerUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutTaskInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutTaskInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutTaskInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutTaskInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutTaskInput>>>;
};

export type TaskAnswerUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskAnswerCreateOrConnectWithoutUserInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskAnswerCreateWithoutUserInput>>>;
  createMany?: InputMaybe<TaskAnswerCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskAnswerScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskAnswerWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskAnswerUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskAnswerUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TaskAnswerUpdateWithWhereUniqueWithoutAnswerModelInput = {
  data: TaskAnswerUpdateWithoutAnswerModelInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerUpdateWithWhereUniqueWithoutTaskInput = {
  data: TaskAnswerUpdateWithoutTaskInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerUpdateWithWhereUniqueWithoutUserInput = {
  data: TaskAnswerUpdateWithoutUserInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerUpdateWithoutAnswerModelInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAnswersNestedInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpdateWithoutTaskInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModel?: InputMaybe<AnswerUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAnswersNestedInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpdateWithoutUserInput = {
  answer?: InputMaybe<StringFieldUpdateOperationsInput>;
  answerModel?: InputMaybe<AnswerUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutTaskAnswersNestedInput>;
  verdict?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type TaskAnswerUpsertWithWhereUniqueWithoutAnswerModelInput = {
  create: TaskAnswerCreateWithoutAnswerModelInput;
  update: TaskAnswerUpdateWithoutAnswerModelInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerUpsertWithWhereUniqueWithoutTaskInput = {
  create: TaskAnswerCreateWithoutTaskInput;
  update: TaskAnswerUpdateWithoutTaskInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerUpsertWithWhereUniqueWithoutUserInput = {
  create: TaskAnswerCreateWithoutUserInput;
  update: TaskAnswerUpdateWithoutUserInput;
  where: TaskAnswerWhereUniqueInput;
};

export type TaskAnswerWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  answer?: InputMaybe<StringFilter>;
  answerModel?: InputMaybe<AnswerRelationFilter>;
  answerModelId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<IntNullableFilter>;
};

export type TaskAnswerWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskAnswerWhereInput>>>;
  answer?: InputMaybe<StringFilter>;
  answerModel?: InputMaybe<AnswerRelationFilter>;
  answerModelId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  verdict?: InputMaybe<IntNullableFilter>;
};

export type TaskAvgAggregateOutputType = {
  __typename?: 'TaskAvgAggregateOutputType';
  correctMultipleAnswer?: Maybe<Scalars['Float']>;
  correctSingleAnswer?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  testId?: Maybe<Scalars['Float']>;
};

export type TaskAvgOrderByAggregateInput = {
  correctMultipleAnswer?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export type TaskCountAggregateOutputType = {
  __typename?: 'TaskCountAggregateOutputType';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  correctMultipleAnswer: Scalars['Int'];
  correctSingleAnswer: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  question: Scalars['Int'];
  testId: Scalars['Int'];
  type: Scalars['Int'];
  variants: Scalars['Int'];
};

export type TaskCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  correctMultipleAnswer?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  variants?: InputMaybe<SortOrder>;
};

export type TaskCountOutputType = {
  __typename?: 'TaskCountOutputType';
  taskAnswers: Scalars['Int'];
};

export type TaskCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  question: Scalars['String'];
  taskAnswers?: InputMaybe<TaskAnswerCreateNestedManyWithoutTaskInput>;
  test?: InputMaybe<TestCreateNestedOneWithoutTasksInput>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskCreateManyInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  question: Scalars['String'];
  testId?: InputMaybe<Scalars['Int']>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskCreateManyTestInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  question: Scalars['String'];
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskCreateManyTestInputEnvelope = {
  data: TaskCreateManyTestInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TaskCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskCreateWithoutTestInput>>>;
  createMany?: InputMaybe<TaskCreateManyTestInputEnvelope>;
};

export type TaskCreateNestedOneWithoutTaskAnswersInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutTaskAnswersInput>;
  create?: InputMaybe<TaskCreateWithoutTaskAnswersInput>;
};

export type TaskCreateOrConnectWithoutTaskAnswersInput = {
  create: TaskCreateWithoutTaskAnswersInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutTestInput = {
  create: TaskCreateWithoutTestInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutTaskAnswersInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  question: Scalars['String'];
  test?: InputMaybe<TestCreateNestedOneWithoutTasksInput>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskCreateWithoutTestInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  question: Scalars['String'];
  taskAnswers?: InputMaybe<TaskAnswerCreateNestedManyWithoutTaskInput>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskCreatecorrectMultipleAnswerInput = {
  set: Scalars['Int'];
};

export type TaskCreatevariantsInput = {
  set: Scalars['String'];
};

export type TaskListRelationFilter = {
  every?: InputMaybe<TaskWhereInput>;
  none?: InputMaybe<TaskWhereInput>;
  some?: InputMaybe<TaskWhereInput>;
};

export type TaskMaxAggregateOutputType = {
  __typename?: 'TaskMaxAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  correctSingleAnswer?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['Int']>;
  type?: Maybe<TaskType>;
};

export type TaskMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TaskMinAggregateOutputType = {
  __typename?: 'TaskMinAggregateOutputType';
  code?: Maybe<Scalars['String']>;
  correctSingleAnswer?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['Int']>;
  type?: Maybe<TaskType>;
};

export type TaskMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrderInput>;
  correctMultipleAnswer?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  variants?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  code?: InputMaybe<SortOrderInput>;
  correctMultipleAnswer?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  taskAnswers?: InputMaybe<TaskAnswerOrderByRelationAggregateInput>;
  test?: InputMaybe<TestOrderByWithRelationInput>;
  testId?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  variants?: InputMaybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  Code = 'code',
  CorrectMultipleAnswer = 'correctMultipleAnswer',
  CorrectSingleAnswer = 'correctSingleAnswer',
  CreatedAt = 'createdAt',
  Id = 'id',
  Question = 'question',
  TestId = 'testId',
  Type = 'type',
  Variants = 'variants'
}

export type TaskScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskScalarWhereInput>>>;
  code?: InputMaybe<StringNullableFilter>;
  correctMultipleAnswer?: InputMaybe<IntNullableListFilter>;
  correctSingleAnswer?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumTaskTypeFilter>;
  variants?: InputMaybe<StringNullableListFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskScalarWhereWithAggregatesInput>>>;
  code?: InputMaybe<StringNullableWithAggregatesFilter>;
  correctMultipleAnswer?: InputMaybe<IntNullableListFilter>;
  correctSingleAnswer?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  question?: InputMaybe<StringWithAggregatesFilter>;
  testId?: InputMaybe<IntNullableWithAggregatesFilter>;
  type?: InputMaybe<EnumTaskTypeWithAggregatesFilter>;
  variants?: InputMaybe<StringNullableListFilter>;
};

export type TaskSumAggregateOutputType = {
  __typename?: 'TaskSumAggregateOutputType';
  correctMultipleAnswer?: Maybe<Scalars['Int']>;
  correctSingleAnswer?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
};

export type TaskSumOrderByAggregateInput = {
  correctMultipleAnswer?: InputMaybe<SortOrder>;
  correctSingleAnswer?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  testId?: InputMaybe<SortOrder>;
};

export enum TaskType {
  CodeResponse = 'codeResponse',
  DetailedResponse = 'detailedResponse',
  MultipleResponse = 'multipleResponse',
  SingleResponse = 'singleResponse'
}

export type TaskUncheckedCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  question: Scalars['String'];
  taskAnswers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutTaskInput>;
  testId?: InputMaybe<Scalars['Int']>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedCreateNestedManyWithoutTestInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskCreateWithoutTestInput>>>;
  createMany?: InputMaybe<TaskCreateManyTestInputEnvelope>;
};

export type TaskUncheckedCreateWithoutTaskAnswersInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  question: Scalars['String'];
  testId?: InputMaybe<Scalars['Int']>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedCreateWithoutTestInput = {
  code?: InputMaybe<Scalars['String']>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  question: Scalars['String'];
  taskAnswers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutTaskInput>;
  type: TaskType;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutTaskNestedInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedUpdateManyInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedUpdateManyWithoutTestInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskCreateWithoutTestInput>>>;
  createMany?: InputMaybe<TaskCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type TaskUncheckedUpdateWithoutTaskAnswersInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  testId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUncheckedUpdateWithoutTestInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutTaskNestedInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpdateInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUpdateManyWithoutTaskNestedInput>;
  test?: InputMaybe<TestUpdateOneWithoutTasksNestedInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpdateManyMutationInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpdateManyWithWhereWithoutTestInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutTestNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TaskCreateOrConnectWithoutTestInput>>>;
  create?: InputMaybe<Array<InputMaybe<TaskCreateWithoutTestInput>>>;
  createMany?: InputMaybe<TaskCreateManyTestInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TaskScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TaskWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TaskUpdateWithWhereUniqueWithoutTestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TaskUpdateManyWithWhereWithoutTestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TaskUpsertWithWhereUniqueWithoutTestInput>>>;
};

export type TaskUpdateOneRequiredWithoutTaskAnswersNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutTaskAnswersInput>;
  create?: InputMaybe<TaskCreateWithoutTaskAnswersInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutTaskAnswersInput>;
  upsert?: InputMaybe<TaskUpsertWithoutTaskAnswersInput>;
};

export type TaskUpdateToOneWithWhereWithoutTaskAnswersInput = {
  data: TaskUpdateWithoutTaskAnswersInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateWithWhereUniqueWithoutTestInput = {
  data: TaskUpdateWithoutTestInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutTaskAnswersInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  test?: InputMaybe<TestUpdateOneWithoutTasksNestedInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpdateWithoutTestInput = {
  code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  correctMultipleAnswer?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  correctSingleAnswer?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  question?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskAnswers?: InputMaybe<TaskAnswerUpdateManyWithoutTaskNestedInput>;
  type?: InputMaybe<EnumTaskTypeFieldUpdateOperationsInput>;
  variants?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpdatecorrectMultipleAnswerInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TaskUpdatevariantsInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TaskUpsertWithWhereUniqueWithoutTestInput = {
  create: TaskCreateWithoutTestInput;
  update: TaskUpdateWithoutTestInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutTaskAnswersInput = {
  create: TaskCreateWithoutTaskAnswersInput;
  update: TaskUpdateWithoutTaskAnswersInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  code?: InputMaybe<StringNullableFilter>;
  correctMultipleAnswer?: InputMaybe<IntNullableListFilter>;
  correctSingleAnswer?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  taskAnswers?: InputMaybe<TaskAnswerListRelationFilter>;
  test?: InputMaybe<TestNullableRelationFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumTaskTypeFilter>;
  variants?: InputMaybe<StringNullableListFilter>;
};

export type TaskWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaskWhereInput>>>;
  code?: InputMaybe<StringNullableFilter>;
  correctMultipleAnswer?: InputMaybe<IntNullableListFilter>;
  correctSingleAnswer?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<StringFilter>;
  taskAnswers?: InputMaybe<TaskAnswerListRelationFilter>;
  test?: InputMaybe<TestNullableRelationFilter>;
  testId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<EnumTaskTypeFilter>;
  variants?: InputMaybe<StringNullableListFilter>;
};

export type Test = {
  __typename?: 'Test';
  _count: TestCountOutputType;
  answers: Array<Answer>;
  createdAt: Scalars['DateTime'];
  direction: Array<Direction>;
  id: Scalars['Int'];
  response: Array<Response>;
  tasks: Array<Task>;
  title: Scalars['String'];
};


export type TestAnswersArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<AnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<AnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type TestDirectionArgs = {
  cursor?: InputMaybe<DirectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DirectionScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DirectionOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectionWhereInput>;
};


export type TestResponseArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};


export type TestTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskWhereInput>;
};

export type TestAvgAggregateOutputType = {
  __typename?: 'TestAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type TestAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TestCountAggregateOutputType = {
  __typename?: 'TestCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type TestCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TestCountOutputType = {
  __typename?: 'TestCountOutputType';
  answers: Scalars['Int'];
  direction: Scalars['Int'];
  response: Scalars['Int'];
  tasks: Scalars['Int'];
};

export type TestCreateInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionCreateNestedManyWithoutTestInput>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type TestCreateNestedManyWithoutResponseInput = {
  connect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TestCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<TestCreateWithoutResponseInput>>>;
};

export type TestCreateNestedOneWithoutAnswersInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<TestCreateWithoutAnswersInput>;
};

export type TestCreateNestedOneWithoutDirectionInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutDirectionInput>;
  create?: InputMaybe<TestCreateWithoutDirectionInput>;
};

export type TestCreateNestedOneWithoutTasksInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<TestCreateWithoutTasksInput>;
};

export type TestCreateOrConnectWithoutAnswersInput = {
  create: TestCreateWithoutAnswersInput;
  where: TestWhereUniqueInput;
};

export type TestCreateOrConnectWithoutDirectionInput = {
  create: TestCreateWithoutDirectionInput;
  where: TestWhereUniqueInput;
};

export type TestCreateOrConnectWithoutResponseInput = {
  create: TestCreateWithoutResponseInput;
  where: TestWhereUniqueInput;
};

export type TestCreateOrConnectWithoutTasksInput = {
  create: TestCreateWithoutTasksInput;
  where: TestWhereUniqueInput;
};

export type TestCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionCreateNestedManyWithoutTestInput>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestCreateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestCreateWithoutResponseInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionCreateNestedManyWithoutTestInput>;
  tasks?: InputMaybe<TaskCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestCreateWithoutTasksInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionCreateNestedManyWithoutTestInput>;
  response?: InputMaybe<ResponseCreateNestedManyWithoutTestsInput>;
  title: Scalars['String'];
};

export type TestListRelationFilter = {
  every?: InputMaybe<TestWhereInput>;
  none?: InputMaybe<TestWhereInput>;
  some?: InputMaybe<TestWhereInput>;
};

export type TestMaxAggregateOutputType = {
  __typename?: 'TestMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TestMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TestMinAggregateOutputType = {
  __typename?: 'TestMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TestMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TestNullableRelationFilter = {
  is?: InputMaybe<TestWhereInput>;
  isNot?: InputMaybe<TestWhereInput>;
};

export type TestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TestOrderByWithAggregationInput = {
  _avg?: InputMaybe<TestAvgOrderByAggregateInput>;
  _count?: InputMaybe<TestCountOrderByAggregateInput>;
  _max?: InputMaybe<TestMaxOrderByAggregateInput>;
  _min?: InputMaybe<TestMinOrderByAggregateInput>;
  _sum?: InputMaybe<TestSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TestOrderByWithRelationInput = {
  answers?: InputMaybe<AnswerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  direction?: InputMaybe<DirectionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  response?: InputMaybe<ResponseOrderByRelationAggregateInput>;
  tasks?: InputMaybe<TaskOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

export type TestRelationFilter = {
  is?: InputMaybe<TestWhereInput>;
  isNot?: InputMaybe<TestWhereInput>;
};

export enum TestScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title'
}

export type TestScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TestScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TestScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TestScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<TestScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TestScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TestScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type TestSumAggregateOutputType = {
  __typename?: 'TestSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type TestSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TestUncheckedCreateInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionUncheckedCreateNestedManyWithoutTestInput>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskUncheckedCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestUncheckedCreateNestedManyWithoutResponseInput = {
  connect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TestCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<TestCreateWithoutResponseInput>>>;
};

export type TestUncheckedCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionUncheckedCreateNestedManyWithoutTestInput>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskUncheckedCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestUncheckedCreateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutTestsInput>;
  tasks?: InputMaybe<TaskUncheckedCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestUncheckedCreateWithoutResponseInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionUncheckedCreateNestedManyWithoutTestInput>;
  id?: InputMaybe<Scalars['Int']>;
  tasks?: InputMaybe<TaskUncheckedCreateNestedManyWithoutTestInput>;
  title: Scalars['String'];
};

export type TestUncheckedCreateWithoutTasksInput = {
  answers?: InputMaybe<AnswerUncheckedCreateNestedManyWithoutTestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  direction?: InputMaybe<DirectionUncheckedCreateNestedManyWithoutTestInput>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutTestsInput>;
  title: Scalars['String'];
};

export type TestUncheckedUpdateInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUncheckedUpdateManyWithoutTestNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUncheckedUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateManyWithoutResponseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateManyWithoutResponseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TestCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<TestCreateWithoutResponseInput>>>;
  delete?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TestUpdateWithWhereUniqueWithoutResponseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TestUpdateManyWithWhereWithoutResponseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TestUpsertWithWhereUniqueWithoutResponseInput>>>;
};

export type TestUncheckedUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUncheckedUpdateManyWithoutTestNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUncheckedUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUncheckedUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateWithoutResponseInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUncheckedUpdateManyWithoutTestNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  tasks?: InputMaybe<TaskUncheckedUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUncheckedUpdateWithoutTasksInput = {
  answers?: InputMaybe<AnswerUncheckedUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUncheckedUpdateManyWithoutTestNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUncheckedUpdateManyWithoutTestsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateManyWithoutTestNestedInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateManyWithWhereWithoutResponseInput = {
  data: TestUpdateManyMutationInput;
  where: TestScalarWhereInput;
};

export type TestUpdateManyWithoutResponseNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<TestCreateOrConnectWithoutResponseInput>>>;
  create?: InputMaybe<Array<InputMaybe<TestCreateWithoutResponseInput>>>;
  delete?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<TestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<TestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<TestUpdateWithWhereUniqueWithoutResponseInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<TestUpdateManyWithWhereWithoutResponseInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<TestUpsertWithWhereUniqueWithoutResponseInput>>>;
};

export type TestUpdateOneRequiredWithoutAnswersNestedInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<TestCreateWithoutAnswersInput>;
  update?: InputMaybe<TestUpdateToOneWithWhereWithoutAnswersInput>;
  upsert?: InputMaybe<TestUpsertWithoutAnswersInput>;
};

export type TestUpdateOneWithoutDirectionNestedInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutDirectionInput>;
  create?: InputMaybe<TestCreateWithoutDirectionInput>;
  delete?: InputMaybe<TestWhereInput>;
  disconnect?: InputMaybe<TestWhereInput>;
  update?: InputMaybe<TestUpdateToOneWithWhereWithoutDirectionInput>;
  upsert?: InputMaybe<TestUpsertWithoutDirectionInput>;
};

export type TestUpdateOneWithoutTasksNestedInput = {
  connect?: InputMaybe<TestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TestCreateOrConnectWithoutTasksInput>;
  create?: InputMaybe<TestCreateWithoutTasksInput>;
  delete?: InputMaybe<TestWhereInput>;
  disconnect?: InputMaybe<TestWhereInput>;
  update?: InputMaybe<TestUpdateToOneWithWhereWithoutTasksInput>;
  upsert?: InputMaybe<TestUpsertWithoutTasksInput>;
};

export type TestUpdateToOneWithWhereWithoutAnswersInput = {
  data: TestUpdateWithoutAnswersInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestUpdateToOneWithWhereWithoutDirectionInput = {
  data: TestUpdateWithoutDirectionInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestUpdateToOneWithWhereWithoutTasksInput = {
  data: TestUpdateWithoutTasksInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestUpdateWithWhereUniqueWithoutResponseInput = {
  data: TestUpdateWithoutResponseInput;
  where: TestWhereUniqueInput;
};

export type TestUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateManyWithoutTestNestedInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateWithoutDirectionInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutTestsNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateWithoutResponseInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateManyWithoutTestNestedInput>;
  tasks?: InputMaybe<TaskUpdateManyWithoutTestNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpdateWithoutTasksInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutTestNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  direction?: InputMaybe<DirectionUpdateManyWithoutTestNestedInput>;
  response?: InputMaybe<ResponseUpdateManyWithoutTestsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TestUpsertWithWhereUniqueWithoutResponseInput = {
  create: TestCreateWithoutResponseInput;
  update: TestUpdateWithoutResponseInput;
  where: TestWhereUniqueInput;
};

export type TestUpsertWithoutAnswersInput = {
  create: TestCreateWithoutAnswersInput;
  update: TestUpdateWithoutAnswersInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestUpsertWithoutDirectionInput = {
  create: TestCreateWithoutDirectionInput;
  update: TestUpdateWithoutDirectionInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestUpsertWithoutTasksInput = {
  create: TestCreateWithoutTasksInput;
  update: TestUpdateWithoutTasksInput;
  where?: InputMaybe<TestWhereInput>;
};

export type TestWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  direction?: InputMaybe<DirectionListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  response?: InputMaybe<ResponseListRelationFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TestWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TestWhereInput>>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  direction?: InputMaybe<DirectionListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  response?: InputMaybe<ResponseListRelationFilter>;
  tasks?: InputMaybe<TaskListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

export type UpdateFieldInput = {
  create?: InputMaybe<Scalars['Boolean']>;
  editor?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isId?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<KindEnum>;
  list?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  read?: InputMaybe<Scalars['Boolean']>;
  relationField?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unique?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
  upload?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  displayFields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateFieldInput>>>;
  idField?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  answers: Array<TaskAnswer>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullname?: Maybe<Scalars['String']>;
  groups: Array<MessagerGroup>;
  id: Scalars['Int'];
  logo?: Maybe<Scalars['String']>;
  messages: Array<Message>;
  passwordHash: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  responses: Array<Response>;
  role: UserRoleEnum;
  tgLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
};


export type UserAnswersArgs = {
  cursor?: InputMaybe<TaskAnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<TaskAnswerScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<TaskAnswerOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TaskAnswerWhereInput>;
};


export type UserGroupsArgs = {
  cursor?: InputMaybe<MessagerGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessagerGroupScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessagerGroupOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessagerGroupWhereInput>;
};


export type UserMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type UserResponsesArgs = {
  cursor?: InputMaybe<ResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ResponseScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ResponseOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponseWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  fullname: Scalars['Int'];
  id: Scalars['Int'];
  logo: Scalars['Int'];
  passwordHash: Scalars['Int'];
  phone: Scalars['Int'];
  role: Scalars['Int'];
  tgLink: Scalars['Int'];
  vkLink: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  tgLink?: InputMaybe<SortOrder>;
  vkLink?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  answers: Scalars['Int'];
  groups: Scalars['Int'];
  messages: Scalars['Int'];
  responses: Scalars['Int'];
};

export type UserCreateInput = {
  answers?: InputMaybe<TaskAnswerCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupCreateNestedManyWithoutUsersInput>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedManyWithoutGroupsInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutGroupsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutGroupsInput>>>;
};

export type UserCreateNestedOneWithoutAnswersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<UserCreateWithoutAnswersInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<UserCreateWithoutResponsesInput>;
};

export type UserCreateOrConnectWithoutAnswersInput = {
  create: UserCreateWithoutAnswersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGroupsInput = {
  create: UserCreateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutResponsesInput = {
  create: UserCreateWithoutResponsesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupCreateNestedManyWithoutUsersInput>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutGroupsInput = {
  answers?: InputMaybe<TaskAnswerCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutMessagesInput = {
  answers?: InputMaybe<TaskAnswerCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupCreateNestedManyWithoutUsersInput>;
  logo?: InputMaybe<Scalars['String']>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutResponsesInput = {
  answers?: InputMaybe<TaskAnswerCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupCreateNestedManyWithoutUsersInput>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  tgLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  tgLink?: InputMaybe<SortOrder>;
  vkLink?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<UserRoleEnum>;
  tgLink?: Maybe<Scalars['String']>;
  vkLink?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  tgLink?: InputMaybe<SortOrder>;
  vkLink?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullname?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrderInput>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  tgLink?: InputMaybe<SortOrderInput>;
  vkLink?: InputMaybe<SortOrderInput>;
};

export type UserOrderByWithRelationInput = {
  answers?: InputMaybe<TaskAnswerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  fullname?: InputMaybe<SortOrderInput>;
  groups?: InputMaybe<MessagerGroupOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrderInput>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  passwordHash?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrderInput>;
  responses?: InputMaybe<ResponseOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  tgLink?: InputMaybe<SortOrderInput>;
  vkLink?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRoleEnum {
  Customer = 'customer',
  Hr = 'hr'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Fullname = 'fullname',
  Id = 'id',
  Logo = 'logo',
  PasswordHash = 'passwordHash',
  Phone = 'phone',
  Role = 'role',
  TgLink = 'tgLink',
  VkLink = 'vkLink'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  fullname?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumUserRoleEnumFilter>;
  tgLink?: InputMaybe<StringNullableFilter>;
  vkLink?: InputMaybe<StringNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  fullname?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  logo?: InputMaybe<StringNullableWithAggregatesFilter>;
  passwordHash?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleEnumWithAggregatesFilter>;
  tgLink?: InputMaybe<StringNullableWithAggregatesFilter>;
  vkLink?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  answers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupUncheckedCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedCreateNestedManyWithoutGroupsInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutGroupsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutGroupsInput>>>;
};

export type UserUncheckedCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupUncheckedCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedCreateWithoutGroupsInput = {
  answers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedCreateWithoutMessagesInput = {
  answers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupUncheckedCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<ResponseUncheckedCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedCreateWithoutResponsesInput = {
  answers?: InputMaybe<TaskAnswerUncheckedCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullname?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<MessagerGroupUncheckedCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  passwordHash: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
  tgLink?: InputMaybe<Scalars['String']>;
  vkLink?: InputMaybe<Scalars['String']>;
};

export type UserUncheckedUpdateInput = {
  answers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutGroupsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutGroupsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutGroupsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutGroupsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutGroupsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutGroupsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutGroupsInput>>>;
};

export type UserUncheckedUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutGroupsInput = {
  answers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutMessagesInput = {
  answers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUncheckedUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutResponsesInput = {
  answers?: InputMaybe<TaskAnswerUncheckedUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUncheckedUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  answers?: InputMaybe<TaskAnswerUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUpdateManyWithoutUsersNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutGroupsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutGroupsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutGroupsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutGroupsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutGroupsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutGroupsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutGroupsInput>>>;
};

export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<UserCreateWithoutAnswersInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAnswersInput>;
  upsert?: InputMaybe<UserUpsertWithoutAnswersInput>;
};

export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateOneRequiredWithoutResponsesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<UserCreateWithoutResponsesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutResponsesInput>;
  upsert?: InputMaybe<UserUpsertWithoutResponsesInput>;
};

export type UserUpdateToOneWithWhereWithoutAnswersInput = {
  data: UserUpdateWithoutAnswersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutMessagesInput = {
  data: UserUpdateWithoutMessagesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutResponsesInput = {
  data: UserUpdateWithoutResponsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
  data: UserUpdateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUpdateManyWithoutUsersNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGroupsInput = {
  answers?: InputMaybe<TaskAnswerUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagesInput = {
  answers?: InputMaybe<TaskAnswerUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUpdateManyWithoutUsersNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responses?: InputMaybe<ResponseUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutResponsesInput = {
  answers?: InputMaybe<TaskAnswerUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<MessagerGroupUpdateManyWithoutUsersNestedInput>;
  logo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  passwordHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleEnumFieldUpdateOperationsInput>;
  tgLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vkLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
  create: UserCreateWithoutGroupsInput;
  update: UserUpdateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAnswersInput = {
  create: UserCreateWithoutAnswersInput;
  update: UserUpdateWithoutAnswersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  update: UserUpdateWithoutMessagesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutResponsesInput = {
  create: UserCreateWithoutResponsesInput;
  update: UserUpdateWithoutResponsesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  answers?: InputMaybe<TaskAnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  fullname?: InputMaybe<StringNullableFilter>;
  groups?: InputMaybe<MessagerGroupListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  role?: InputMaybe<EnumUserRoleEnumFilter>;
  tgLink?: InputMaybe<StringNullableFilter>;
  vkLink?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  answers?: InputMaybe<TaskAnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<StringNullableFilter>;
  groups?: InputMaybe<MessagerGroupListRelationFilter>;
  id?: InputMaybe<Scalars['Int']>;
  logo?: InputMaybe<StringNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  passwordHash?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  responses?: InputMaybe<ResponseListRelationFilter>;
  role?: InputMaybe<EnumUserRoleEnumFilter>;
  tgLink?: InputMaybe<StringNullableFilter>;
  vkLink?: InputMaybe<StringNullableFilter>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string } | undefined };


export const MeDocument = gql`
    query me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;