import { gql } from "@apollo/client/core";

export default gql`
query latestPosts {
    explorePublications(request: {sortCriteria: LATEST}) {
      items {
        ... on Post {
          id
          metadata {
            content
            image
          }
          stats {
            totalUpvotes
            totalDownvotes
            totalAmountOfComments
          }
          profile {
            name
            handle
            id
          }
        }
      }
    }
  }
  
  
`