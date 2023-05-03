import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux"
import { Box, Button, Flex, Image, Text } from "rebass";
import { Link } from "react-router-dom";
import { color } from "styled-system";
import SongTile from "../components/SongTile/SongTile";
import Header from '../components/Header';
import { auth } from "../firebase/firebase";
import useAuthStatus from "../hooks/useAuthStatus";
import { Spinner } from "theme-ui";
import { useEffect } from "react";
import { getAllReq, reset } from "../app/features/song/songSlice";

const Library = () => {
  const { songs, isLoading, currentState } = useSelector(state => state.song);
  
  const SongsContainer = styled(Box)`
    width: 100%;
  `;

  const FilterContainer = styled(Flex)`
    padding: 1rem 1rem;
    flex-wrap: wrap;
  `;

  const FilterButton = styled(Button)`
    ${color}
    background: #171717;
    border: 1px solid #1ED760;
    &:hover  {
      background: #1ED760;
      color: #000;
      cursor: pointer;
    }
  `;

  const LibraryHeader = styled(Text)`
    margin-block: 1rem;
    color: #fff;
  `; 

  const genres = [
    'HipHop',
    'R&B',
    'Pop',
    'Country',
    'Ethiopian',
    'Other'
  ];

  const { isLoggedIn } = useAuthStatus();

  const yourSongs = songs.filter(song => song?.postedBy === auth.currentUser?.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
    dispatch(getAllReq());
  }, [dispatch]);

  const LoadingBox = styled(Box)`
    width: 60%;
    height: 50vh;
    display: grid;
    place-content: center;
  `;

  return (
    <Flex
      flexDirection='column'
      sx={{width: '100%'}}
      className='home'
      marginTop='10px'
      flex='1'
    >
      <Header />
      {
        isLoggedIn &&
        <>
          <LibraryHeader
            as='h3'
          >Your Songs</LibraryHeader>

          <SongsContainer
                >
              { yourSongs.length > 0 ? 
                yourSongs.map(({album, artist, duration, id, imageUrl, title, genre}, index) => <SongTile 
                  album={album}
                  artist={artist?.name || artist}
                  duration={duration}
                  id={id}
                  key={id}
                  index={index}
                  imageUrl={imageUrl}
                  title={title}
                  genre={genre}
                />) : 
                <Flex
                  sx={{gap: '10px'}}
                >
                  <Image 
                    src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'}
                    height={'50px'}
                  />
                  <Flex alignItems='center' sx={{color: 'white', gap: '10px'}}>

                    <Text>
                      Add Songs  
                    </Text>
                    <Link to='/add-song' style={{color: '#fff'}}>  Here</Link>

                  </Flex>
                </Flex>
              }
          </SongsContainer>
        </>

      }


      <LibraryHeader
        as='h3'
      >All Songs</LibraryHeader>

      <FilterContainer
        sx={{gap: '10px'}}
      >
        {
          genres.map(genre => 
            <FilterButton
              key={genre}
              color='textSecondary'
            >
              {genre}
            </FilterButton>
            
          )
        }
      </FilterContainer>

      <SongsContainer
      >
        {
          isLoading && currentState === 'GET_ALL' ? 
          <LoadingBox>
            <Spinner 
              color='green'
            />
          </LoadingBox>
           :
          songs.map(({album, artist, duration, id, imageUrl, title, genre}, index) => <SongTile 
            album={album?.title || album}
            artist={artist?.name || artist}
            duration={duration}
            id={id}
            index={index}
            imageUrl={imageUrl}
            title={title}
            genre={genre}
          />)
        }
      </SongsContainer>
    </Flex>
  )
}

export default Library