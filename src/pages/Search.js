import { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Text } from "rebass"
import { Container, Input, Spinner } from "theme-ui"
import { getAllReq } from "../app/features/song/songSlice";
import SongTile from "../components/SongTile/SongTile";
import TopResultCard from '../components/TopResultCard/TopResultCard'

const Search = () => {

  const dispatch = useDispatch();
  const { songs, isLoading, currentState, isSuccess } = useSelector(state => state.song);

  useEffect(() => {
      dispatch(getAllReq());
  }, [dispatch])
  
    
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <Box
      className='home'
      sx={{
        marginTop: '20px',
        width: '100%',
        maxWidth: '1000px'
      }}
    >
      <Container
        className='search-container'
      >
        <MdSearch 
          style={{color: 'white'}}
          size={22}
        />

        <Input
          className='search-input' 
          placeholder='Search' 
          value={query}
          sx={{
            border: 'none',
            color: 'white'
          }}
          onChange={handleChange}
        />
        <MdClose 
          onClick={() => setQuery('')}  
          style={{color: 'white'}}
          size={22}
        />
      </Container>

      {
          isLoading &&
          <Box
            style={{
              display: 'grid',
              placeContent: 'center',
              height: '200px'
            }}
          >
              <Spinner 
              color='green'
            />
          </Box>
      }

      {
          isSuccess &&
          <Flex
            flexDirection={['column', 'column', 'column', 'row']}
            style={{
              marginTop: '2rem',
              maxWidth: '800px',
            }}>

            <Box flex='1'>

              <Text
                sx={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}
              >
                Top Result
              </Text>

              <TopResultCard  
                artist={songs[0]?.artist}
                imageUrl={songs[0]?.imageUrl}
                title={songs[0]?.title} key={songs[0]?.id}
              />
            </Box>

            <Box
              flex='1.5'
              p={2}
              sx={{
                background: '#000',
              }}
            >
              <h2
                style={{color: 'white'}}
              >Songs</h2>
              {
                songs.map(({imageUrl, artist, title, album, duration, id}, index) => <SongTile 
                  imageUrl={imageUrl} 
                  artist={artist}
                  title={title}
                  album={album}
                  duration={duration}
                  id={id}
                  index={index}
                  key={id}
                  isSearch={true}
                />)
              }
            </Box>

          </Flex>
      }
    </Box>
  )
}

export default Search