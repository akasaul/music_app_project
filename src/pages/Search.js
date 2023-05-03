import { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Image, Text } from "rebass"
import { Container, Input, Spinner } from "theme-ui"
import { getAllReq, reset, searchSong } from "../app/features/song/songSlice";
import SongTile from "../components/SongTile/SongTile";
import TopResultCard from '../components/TopResultCard/TopResultCard'

const Search = () => {

  const dispatch = useDispatch();
  const { songs, isLoading, currentState, isSuccess, searchResults } = useSelector(state => state.song);

  useEffect(() => {
      dispatch(reset());
      dispatch(getAllReq());
  }, [dispatch])
  
    
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(searchSong(query));
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
          isSuccess && query &&
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
                artist={searchResults[0]?.artist}
                imageUrl={searchResults[0]?.imageUrl}
                title={searchResults[0]?.title} key={searchResults[0]?.id}
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
                searchResults.slice(1, 6).map(({imageUrl, artist, title, album, duration, id}, index) => <SongTile 
                  imageUrl={imageUrl} 
                  artist={artist}
                  title={title}
                  album={album}
                  duration={duration}
                  id={id}
                  index={index}
                  key={id +  Math.random() * 100}
                  isSearch={true}
                />)
              }
            </Box>

          </Flex>
      }
      {
        !query &&
        <Box
          sx={{display: 'grid', placeContent: 'center', marginTop: '2rem'}}
        >
            <Image
              height={'150px'} 
              src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'} 
            />
            <h4 style={{color: '#fff', textAlign: 'center'}}>Search songs..</h4>
        </Box>
      }
    </Box>
  )
}

export default Search