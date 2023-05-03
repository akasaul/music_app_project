import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Image, Text } from "rebass";
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

      {
        favs.length === 0 &&
        <Flex
          alignItems={'center'}
          sx={{gap: '20px'}}
        >
          <Image
            src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'}
            height={'80px'}
          />
          <Text
            sx={{color: '#fff'}}
          >You have no favorites</Text>
        </Flex>

      }

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
              album={song.album} duration={song.duration}
              genre={song.genre} key={song.id}
            />
          )
        }
      </Flex>

    </Box>
  )
}

export default FavoritesSection