import styled from "@emotion/styled"
import { MdAdd, MdFavorite, MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";
import { Box , Flex, Text} from "rebass"
import { color } from "styled-system"
import ListTile from '../ListTile';

const index = () => {
  const Container = styled(Box)`
    ${color}
  `;

  const TopContainer = styled(Flex)`
    width: 100%;
    border-radius: 5px;
  `;

  return (
    <Container
      display={['none', 'flex']}
      width={['auto', '80px', 'max(25%, 175px)']}
      flexDirection='column'
      alignItems='center'
    >

    {/* Home and search container */}
    <TopContainer
      flexDirection='column'
      py={'20px'}
      bg='sideBarBg'
      px={'20px'}
      my={'5px'}
      alignItems={['', 'center', 'start']}
      sx={{
        gap: '10px'
      }}
    >
      <ListTile text={'Home'} link={'/'}>
        {/* display d/t Icon sizes at view ports */}
        <Box
          display={['none', 'block', 'none']}
        >
          <MdHome
              size={36}
              color='#B3B3B3'
            />
        </Box>

        <Box
          display={['none', 'none', 'block']}
        >
          <MdHome
              size={30}
              color='#B3B3B3'
            />
        </Box>

      </ListTile>

      <ListTile text={'Search'} link={'/search'}>
        {/* display d/t Icon sizes at view ports */}
        <Box
            display={['none', 'block', 'none']}
          >
            <MdSearch
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdSearch
                size={30}
                color='#B3B3B3'
              />
          </Box>
      </ListTile>
    </TopContainer>

      {/* Library and Favorites */}
    <TopContainer
      flexDirection='column'
      py={'20px'}
      bg='sideBarBg'
      px={'20px'}
      my={'5px'}
      height={'100%'}
      alignItems={['', 'center', 'start']}
      sx={{
        gap: '10px'
      }}
    >
      <ListTile text={'Favorites'} link={'/favorites'}>
        {/* display d/t Icon sizes at view ports */}
        <Box
          display={['none', 'block', 'none']}
        >
          <MdFavorite
              size={36}
              color='#B3B3B3'
            />
        </Box>

        <Box
          display={['none', 'none', 'block']}
        >
          <MdFavorite
              size={30}
              color='#B3B3B3'
            />
        </Box>

      </ListTile>

      <ListTile text={'Library'} link={'/library'}>
        {/* display d/t Icon sizes at view ports */}
        <Box
            display={['none', 'block', 'none']}
          >
            <MdLibraryMusic
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdLibraryMusic
                size={30}
                color='#B3B3B3'
              />
          </Box>

      </ListTile>

      <ListTile text={'Add Song'} link={'/add-song'}>
        {/* display d/t Icon sizes at view ports */}
        <Box
            display={['none', 'block', 'none']}
          >
            <MdAdd
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdAdd
                size={30}
                color='#B3B3B3'
              />
          </Box>
          
      </ListTile>
      
    </TopContainer>




    </Container>
  )
}

export default index