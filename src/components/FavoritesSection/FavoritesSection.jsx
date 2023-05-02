import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "rebass";
import { Spinner } from "theme-ui";
import { getAllReq } from "../../app/features/song/songSlice";
import useAuthStatus from "../../hooks/useAuthStatus"
import BaseCard from "../BaseCard";

const FavoritesSection = () => {

  const {isChecking, isLoggedIn} = useAuthStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReq());
  }, [dispatch]);

  const { songs } = useSelector(state => state.song);
  const { favs } = useSelector(state => state.user);

  if(isChecking) {
    return <Box>
            <Spinner 
              color='green'
            />
          </Box>
  }

  if(!isLoggedIn) {
    return;
  }


  return (
    <Box>
      <h3
        style={{
          color: 'white',
          marginBlock: '1rem'
        }}
      >Songs You Like</h3>

      <Flex
        flexWrap='wrap'
        sx={{
          gap: '20px'
        }}
      >
        {
          songs.filter(song => favs.includes(song.id)).map((song) => 
            <BaseCard title={song.title} imageUrl={song.imageUrl} 
              artist={song.artist} id={song.id}
            />
          )
        }
      </Flex>

    </Box>
  )
}

export default FavoritesSection