import styled from "@emotion/styled";
import { useEffect } from "react";
import { Box, Flex } from "rebass";
import { Grid, Spinner } from "theme-ui";
import SongCard from "../SongCard";
import { fetchRecentRequest, reset } from "../../app/features/song/songSlice";
import { useDispatch, useSelector } from "react-redux";

const RecentSongs = () => {

  const RecentGrid = styled(Grid)`

    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    }

  `;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchRecentRequest());
  }, [dispatch]);

  const { recents, isLoading, isError, currentState, fetchRecentState, isSuccess  } = useSelector(state => state.song);

  return (
    <Flex
      flexDirection='column'
      sx={{
        gap: '10px'
      }}
    >

      <RecentGrid
      >
        {
          isLoading && fetchRecentState === 'FETCH_RECENT' ?
          <Box
            height='100px'
            width='100%'
            sx={{
              display: 'grid',
              placeContent: 'center'
            }}
          >
              <Spinner color='green' />
          </Box>
           : isError && fetchRecentState === 'FETCH_RECENT' ? 
           <h5 
            style={{
              color: 'white'
            }}
           >An Error Occurred</h5>
           : isSuccess && fetchRecentState === 'FETCH_RECENT' &&
          recents?.map(recent => 
            <SongCard key={recent.id} id={recent.id} artist={recent.artist} imageUrl={recent.imageUrl} title={recent.title} album={recent.album} 
              duration={recent.duration} genre={recent.genre}
            />
            )
        }
      </RecentGrid>
    </Flex>
  )
}

export default RecentSongs