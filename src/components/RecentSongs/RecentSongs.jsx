import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import { Grid } from "theme-ui";
import SongCard from "../SongCard";

const RecentSongs = () => {

  const RecentGrid = styled(Grid)`
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    }
  `;

  return (
    <Flex
      flexDirection='column'
      sx={{
        gap: '10px'
      }}
    >

      <RecentGrid
      >
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </RecentGrid>


    </Flex>
  )
}

export default RecentSongs