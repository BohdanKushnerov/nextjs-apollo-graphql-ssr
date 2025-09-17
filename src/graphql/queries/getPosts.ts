import { gql } from "@apollo/client";
import { Post } from "../fragments/post";

export const GET_POSTS = gql`
  query GetPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        ...Post
      }
    }
  }

  ${Post}
`;
