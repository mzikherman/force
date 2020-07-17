import React from "react"
import { AppContainer } from "v2/Apps/Components/AppContainer"
import { Box, Sans, Separator, breakpoints } from "@artsy/palette"
import { ViewingRoomsLatestGridFragmentContainer as ViewingRoomsLatestGrid } from "./Components/ViewingRoomsLatestGrid"
import { Footer } from "v2/Components/Footer"
import { ViewingRoomsApp_viewer } from "v2/__generated__/ViewingRoomsApp_viewer.graphql"
import { createFragmentContainer, graphql } from "react-relay"

interface ViewingRoomsAppProps {
  viewer: ViewingRoomsApp_viewer
}

const ViewingRoomsApp: React.FC<ViewingRoomsAppProps> = props => {
  console.log("FROM APP")
  console.log(props)
  const { viewer } = props
  return (
    <AppContainer maxWidth="100%">
      <Box maxWidth={breakpoints.xl} mx="auto" width="100%">
        <Box mx={2}>
          <Sans size="10" my={3}>
            Viewing Rooms
          </Sans>
          <ViewingRoomsLatestGrid viewingRoomsConnection={viewer} />
        </Box>
      </Box>
      <Box mx={2}>
        <Separator mt={6} mb={3} />
        <Footer />
      </Box>
    </AppContainer>
  )
}

export const ViewingRoomsAppFragmentContainer = createFragmentContainer(
  ViewingRoomsApp,
  {
    viewer: graphql`
      fragment ViewingRoomsApp_viewer on Viewer {
        ...ViewingRoomsLatestGrid_viewingRoomsConnection
      }
    `,
  }
)

// Top-level route needs to be exported for bundle splitting in the router
export default ViewingRoomsAppFragmentContainer
