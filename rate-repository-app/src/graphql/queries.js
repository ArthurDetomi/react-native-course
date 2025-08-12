import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query findAllRepositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
  ) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
      edges {
        node {
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          id
        }
      }
    }
  }
`;

export const FIND_USER_LOGGED = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const FIND_REPOSITORY_BY_ID = gql`
  query findById($id: ID!) {
    repository(id: $id) {
      id
      ownerAvatarUrl
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
