import styled from "@emotion/styled";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Box, Image, Text } from "rebass";
import { color, fontSize, fontWeight } from "styled-system";
import { getAllReq } from "../app/features/song/songSlice";
import SongTile from "../components/SongTile/SongTile";
import '../App.css';
import useAuthStatus from "../hooks/useAuthStatus";
import { MdAccountCircle } from "react-icons/md";

const FavoriteSongs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReq());
  }, [dispatch]);

  const { songs } = useSelector(state => state.song);
  const { favs } = useSelector(state => state.user);
  const {isLoggedIn} = useAuthStatus();

  const HeaderText = styled(Text)`
    ${color}
    ${fontSize}
    ${fontWeight}
    text-align: center;
    margin-block: 2rem;
  `;

  return (
    <Box
      className="home"
      marginTop='1rem'
      style={{
        width: '100%'
      }}
    >
      <Box>
        {
          isLoggedIn &&
          <HeaderText
            color='textPrimary'
            fontSize={['sm', 'md']}
            fontWeight={['semiBold']}
          >
            Songs you enjoy Listening
          </HeaderText>
        }
        {
          isLoggedIn ? 
          songs.filter((song) => favs.includes(song.id)).map((song, index) => 
            <SongTile imageUrl={song.imageUrl} title={song.title} index={index}
              duration={song.duration} artist={song.artist} album={song.album}
              id={song.id} 
            />
            ) : 

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                height={'100px'}
                src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'}
              />
              <Text sx={{color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>Login to see your Favorites <MdAccountCircle /> </Text>
            </Box>
        }
      </Box>

    <Box>

      <HeaderText
          color='textPrimary'
          fontSize={['sm', 'md']}
          fontWeight={['semiBold']}
        >
          Songs you May Like
        </HeaderText>

        {
          songs.map((song, index) => 
            <SongTile imageUrl={song.imageUrl} title={song.title} index={index}
              duration={song.duration} artist={song.artist} album={song.album}
              id={song.id}
            />
            )
        }

      </Box>

    </Box>
  )
}

export default FavoriteSongs