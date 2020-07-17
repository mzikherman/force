import React from "react"
import { Box } from "@artsy/palette"
import {
  RelayPaginationProp,
  createFragmentContainer,
  graphql,
} from "react-relay"

import { ViewingRoomsLatestGrid_viewingRoomsConnection } from "v2/__generated__/ViewingRoomsLatestGrid_viewingRoomsConnection.graphql"

export interface ViewingRoomsLatestGridProps {
  relay: RelayPaginationProp
  viewingRoomsConnection: ViewingRoomsLatestGrid_viewingRoomsConnection
}

export const ViewingRoomsLatestGrid: React.FC<ViewingRoomsLatestGridProps> = props => {
  console.log("!!!!!!!!!!!!!!!!!")
  console.log(props)
  console.log("!!!!!!!!!!!!!!!!!")
  return <Box>Hello World</Box>
}

export const ViewingRoomsLatestGridFragmentContainer = createFragmentContainer(
  ViewingRoomsLatestGrid,
  {
    viewingRoomsConnection: graphql`
      fragment ViewingRoomsLatestGrid_viewingRoomsConnection on Viewer
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 10 }
          after: { type: "String" }
        ) {
        viewingRoomsConnection(first: $count, after: $after) {
          edges {
            node {
              slug
              status
              title
              # TODO: Need to either figure out how to get dimensions here
              # or request a square vervion
              heroImageURL
              distanceToOpen(short: true)
              distanceToClose(short: true)
              partner {
                name
              }
              artworksConnection(first: 2) {
                totalCount
                edges {
                  node {
                    image {
                      square: url(version: "square")
                      regular: url(version: "large")
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  }
)
