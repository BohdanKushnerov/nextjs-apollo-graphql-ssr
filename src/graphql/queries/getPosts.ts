import { gql } from "@apollo/client";
import { Post } from "../fragments/post";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        ...Post
      }
    }
  }
  ${Post}
`;
