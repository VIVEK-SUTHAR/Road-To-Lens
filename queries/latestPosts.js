import { gql } from "@apollo/client/core";

export default gql`
  query MyQuery {
    explorePublications(request: { sortCriteria: TOP_COLLECTED }) {
      items {
        ... on Post {
          id
          profile {
            handle
            id
            name
          }
          metadata {
            content
            image
            tags
          }
          stats {
            totalUpvotes
            totalDownvotes
            totalAmountOfMirrors
            totalAmountOfComments
            totalAmountOfCollects
          }
        }
      }
    }
  }
`;