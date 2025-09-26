import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename: 'Address';
  city: Maybe<Scalars['String']['output']>;
  geo: Maybe<Geo>;
  street: Maybe<Scalars['String']['output']>;
  suite: Maybe<Scalars['String']['output']>;
  zipcode: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city: InputMaybe<Scalars['String']['input']>;
  geo: InputMaybe<GeoInput>;
  street: InputMaybe<Scalars['String']['input']>;
  suite: InputMaybe<Scalars['String']['input']>;
  zipcode: InputMaybe<Scalars['String']['input']>;
};

export type Album = {
  __typename: 'Album';
  id: Maybe<Scalars['ID']['output']>;
  photos: Maybe<PhotosPage>;
  title: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};


export type AlbumPhotosArgs = {
  options: InputMaybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename: 'AlbumsPage';
  data: Maybe<Array<Maybe<Album>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type Comment = {
  __typename: 'Comment';
  body: Maybe<Scalars['String']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  post: Maybe<Post>;
};

export type CommentsPage = {
  __typename: 'CommentsPage';
  data: Maybe<Array<Maybe<Comment>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type Company = {
  __typename: 'Company';
  bs: Maybe<Scalars['String']['output']>;
  catchPhrase: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  bs: InputMaybe<Scalars['String']['input']>;
  catchPhrase: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type CreateAlbumInput = {
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCommentInput = {
  body: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreatePhotoInput = {
  thumbnailUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreatePostInput = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTodoInput = {
  completed: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address: InputMaybe<AddressInput>;
  company: InputMaybe<CompanyInput>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website: InputMaybe<Scalars['String']['input']>;
};

export type Geo = {
  __typename: 'Geo';
  lat: Maybe<Scalars['Float']['output']>;
  lng: Maybe<Scalars['Float']['output']>;
};

export type GeoInput = {
  lat: InputMaybe<Scalars['Float']['input']>;
  lng: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename: 'Mutation';
  _: Maybe<Scalars['Int']['output']>;
  createAlbum: Maybe<Album>;
  createComment: Maybe<Comment>;
  createPhoto: Maybe<Photo>;
  createPost: Maybe<Post>;
  createTodo: Maybe<Todo>;
  createUser: Maybe<User>;
  deleteAlbum: Maybe<Scalars['Boolean']['output']>;
  deleteComment: Maybe<Scalars['Boolean']['output']>;
  deletePhoto: Maybe<Scalars['Boolean']['output']>;
  deletePost: Maybe<Scalars['Boolean']['output']>;
  deleteTodo: Maybe<Scalars['Boolean']['output']>;
  deleteUser: Maybe<Scalars['Boolean']['output']>;
  updateAlbum: Maybe<Album>;
  updateComment: Maybe<Comment>;
  updatePhoto: Maybe<Photo>;
  updatePost: Maybe<Post>;
  updateTodo: Maybe<Todo>;
  updateUser: Maybe<User>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAlbumInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCommentInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePhotoInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Like = 'LIKE',
  Lte = 'LTE',
  Ne = 'NE'
}

export type OperatorOptions = {
  field: InputMaybe<Scalars['String']['input']>;
  kind: InputMaybe<OperatorKindEnum>;
  value: InputMaybe<Scalars['String']['input']>;
};

export type PageLimitPair = {
  __typename: 'PageLimitPair';
  limit: Maybe<Scalars['Int']['output']>;
  page: Maybe<Scalars['Int']['output']>;
};

export type PageMetadata = {
  __typename: 'PageMetadata';
  totalCount: Maybe<Scalars['Int']['output']>;
};

export type PageQueryOptions = {
  operators: InputMaybe<Array<InputMaybe<OperatorOptions>>>;
  paginate: InputMaybe<PaginateOptions>;
  search: InputMaybe<SearchOptions>;
  slice: InputMaybe<SliceOptions>;
  sort: InputMaybe<Array<InputMaybe<SortOptions>>>;
};

export type PaginateOptions = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationLinks = {
  __typename: 'PaginationLinks';
  first: Maybe<PageLimitPair>;
  last: Maybe<PageLimitPair>;
  next: Maybe<PageLimitPair>;
  prev: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename: 'Photo';
  album: Maybe<Album>;
  id: Maybe<Scalars['ID']['output']>;
  thumbnailUrl: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type PhotosPage = {
  __typename: 'PhotosPage';
  data: Maybe<Array<Maybe<Photo>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type Post = {
  __typename: 'Post';
  body: Maybe<Scalars['String']['output']>;
  comments: Maybe<CommentsPage>;
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};


export type PostCommentsArgs = {
  options: InputMaybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename: 'PostsPage';
  data: Maybe<Array<Maybe<Post>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type Query = {
  __typename: 'Query';
  _: Maybe<Scalars['Int']['output']>;
  album: Maybe<Album>;
  albums: Maybe<AlbumsPage>;
  comment: Maybe<Comment>;
  comments: Maybe<CommentsPage>;
  photo: Maybe<Photo>;
  photos: Maybe<PhotosPage>;
  post: Maybe<Post>;
  posts: Maybe<PostsPage>;
  todo: Maybe<Todo>;
  todos: Maybe<TodosPage>;
  user: Maybe<User>;
  users: Maybe<UsersPage>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAlbumsArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPhotosArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTodosArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  options: InputMaybe<PageQueryOptions>;
};

export type SearchOptions = {
  q: InputMaybe<Scalars['String']['input']>;
};

export type SliceOptions = {
  end: InputMaybe<Scalars['Int']['input']>;
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export type SortOptions = {
  field: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Todo = {
  __typename: 'Todo';
  completed: Maybe<Scalars['Boolean']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  title: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
};

export type TodosPage = {
  __typename: 'TodosPage';
  data: Maybe<Array<Maybe<Todo>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title: InputMaybe<Scalars['String']['input']>;
  userId: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCommentInput = {
  body: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhotoInput = {
  thumbnailUrl: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  body: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTodoInput = {
  completed: InputMaybe<Scalars['Boolean']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address: InputMaybe<AddressInput>;
  company: InputMaybe<CompanyInput>;
  email: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename: 'User';
  address: Maybe<Address>;
  albums: Maybe<AlbumsPage>;
  company: Maybe<Company>;
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  posts: Maybe<PostsPage>;
  todos: Maybe<TodosPage>;
  username: Maybe<Scalars['String']['output']>;
  website: Maybe<Scalars['String']['output']>;
};


export type UserAlbumsArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type UserPostsArgs = {
  options: InputMaybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options: InputMaybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename: 'UsersPage';
  data: Maybe<Array<Maybe<User>>>;
  links: Maybe<PaginationLinks>;
  meta: Maybe<PageMetadata>;
};

export type PhotoFieldsFragment = { __typename: 'Photo', title: string | null, url: string | null, id: string | null };

export type PostFieldsFragment = { __typename: 'Post', id: string | null, title: string | null, body: string | null };

export type UserFieldsFragment = { __typename: 'User', id: string | null, username: string | null, email: string | null, address: { __typename: 'Address', geo: { __typename: 'Geo', lat: number | null, lng: number | null } | null } | null };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename: 'Mutation', createPost: { __typename: 'Post', id: string | null, title: string | null, body: string | null } | null };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename: 'Mutation', deletePost: boolean | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename: 'Mutation', updatePost: { __typename: 'Post', id: string | null, title: string | null, body: string | null } | null };

export type GetAllPhotosQueryVariables = Exact<{
  options: InputMaybe<PageQueryOptions>;
}>;


export type GetAllPhotosQuery = { __typename: 'Query', photos: { __typename: 'PhotosPage', data: Array<{ __typename: 'Photo', title: string | null, url: string | null, id: string | null } | null> | null } | null };

export type GetAllPostsQueryVariables = Exact<{
  options: InputMaybe<PageQueryOptions>;
}>;


export type GetAllPostsQuery = { __typename: 'Query', posts: { __typename: 'PostsPage', data: Array<{ __typename: 'Post', id: string | null, title: string | null, body: string | null } | null> | null } | null };

export type GetAllUsersQueryVariables = Exact<{
  options: InputMaybe<PageQueryOptions>;
}>;


export type GetAllUsersQuery = { __typename: 'Query', users: { __typename: 'UsersPage', data: Array<{ __typename: 'User', id: string | null, username: string | null, email: string | null, address: { __typename: 'Address', geo: { __typename: 'Geo', lat: number | null, lng: number | null } | null } | null } | null> | null } | null };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPostQuery = { __typename: 'Query', post: { __typename: 'Post', id: string | null, title: string | null, body: string | null } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename: 'Query', user: { __typename: 'User', id: string | null, username: string | null, email: string | null, address: { __typename: 'Address', geo: { __typename: 'Geo', lat: number | null, lng: number | null } | null } | null } | null };

export const PhotoFieldsFragmentDoc = gql`
    fragment PhotoFields on Photo {
  title
  url
  id
}
    `;
export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  title
  body
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  username
  email
  address {
    geo {
      lat
      lng
    }
  }
}
    `;
export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($id: ID!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
  updatePost(id: $id, input: $input) {
    id
    title
    body
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const GetAllPhotosDocument = gql`
    query GetAllPhotos($options: PageQueryOptions) {
  photos(options: $options) {
    data {
      ...PhotoFields
    }
  }
}
    ${PhotoFieldsFragmentDoc}`;

/**
 * __useGetAllPhotosQuery__
 *
 * To run a query within a React component, call `useGetAllPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPhotosQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetAllPhotosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPhotosQuery, GetAllPhotosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPhotosQuery, GetAllPhotosQueryVariables>(GetAllPhotosDocument, options);
      }
export function useGetAllPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPhotosQuery, GetAllPhotosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPhotosQuery, GetAllPhotosQueryVariables>(GetAllPhotosDocument, options);
        }
export function useGetAllPhotosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPhotosQuery, GetAllPhotosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPhotosQuery, GetAllPhotosQueryVariables>(GetAllPhotosDocument, options);
        }
export type GetAllPhotosQueryHookResult = ReturnType<typeof useGetAllPhotosQuery>;
export type GetAllPhotosLazyQueryHookResult = ReturnType<typeof useGetAllPhotosLazyQuery>;
export type GetAllPhotosSuspenseQueryHookResult = ReturnType<typeof useGetAllPhotosSuspenseQuery>;
export type GetAllPhotosQueryResult = Apollo.QueryResult<GetAllPhotosQuery, GetAllPhotosQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts($options: PageQueryOptions) {
  posts(options: $options) {
    data {
      ...PostFields
    }
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers($options: PageQueryOptions) {
  users(options: $options) {
    data {
      ...UserFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  post(id: $id) {
    ...PostFields
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables> & ({ variables: GetPostQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;