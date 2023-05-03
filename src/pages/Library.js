import styled from "@emotion/styled";
import { useSelector } from "react-redux"
import { Box, Button, Flex, Text } from "rebass";
import { color } from "styled-system";
import SongTile from "../components/SongTile/SongTile";
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