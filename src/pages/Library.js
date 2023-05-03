import styled from "@emotion/styled";
import { useSelector } from "react-redux"
import { Box, Button, Flex, Image, Text } from "rebass";
import { Link } from "react-router-dom";
import { color } from "styled-system";
import SongTile from "../components/SongTile/SongTile";
import { auth } from "../firebase/firebase";
import useAuthStatus from "../hooks/useAuthStatus";

const Library = () => {
  const { songs } = useSelector(state => state.song);
  
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

  const Header = styled(Text)`
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

  const yourSongs = songs.filter(song => song.postedBy === auth.currentUser.uid);

  return (
    <Flex
      flexDirection='column'
      sx={{width: '100%'}}
      className='home'
      marginTop='1rem'
    >

      {
        isLoggedIn &&

        <>
          <Header
            as='h3'
          >Your Songs</Header>

          <SongsContainer
                >
              { yourSongs.length > 0 ? 
                yourSongs.map(({album, artist, duration, id, imageUrl, title, genre}, index) => <SongTile 
                  album={album}
                  artist={artist}
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


      <Header
        as='h3'
      >All Songs</Header>

      <FilterContainer
        sx={{gap: '10px'}}
      >
        {
          genres.map(genre => 
            <FilterButton
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
          songs.map(({album, artist, duration, id, imageUrl, title, genre}, index) => <SongTile 
            album={album}
            artist={artist}
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