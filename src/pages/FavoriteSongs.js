import styled from "@emotion/styled";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "rebass";
import { color, fontSize, fontWeight } from "styled-system";
import { getAllReq } from "../app/features/song/songSlice";
import SongTile from "../components/SongTile/SongTile";
import '../App.css';

const FavoriteSongs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReq());
  }, [dispatch]);

  const { songs } = useSelector(state => state.song);
  const { favs } = useSelector(state => state.user);

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
        <HeaderText
          color='textPrimary'
          fontSize={['sm', 'md']}
          fontWeight={['semiBold']}
        >
          Songs you enjoy Listening
        </HeaderText>
        {
          songs.filter((song) => favs.includes(song.id)).map((song, index) => 
            <SongTile imageUrl={song.imageUrl} title={song.title} index={index}
              duration={song.duration} artist={song.artist} album={song.album}
              id={song.id}
            />
            )
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