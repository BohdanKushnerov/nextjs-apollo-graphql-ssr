import { gql } from "@apollo/client";

export const Post = gql`
  fragment Post on Post {
    id
    title
    body
  }
`;
