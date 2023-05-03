import styled from "@emotion/styled"
import { MdAdd, MdFavorite, MdHome, MdLibraryMusic, MdOutlineFavoriteBorder, MdOutlineHome, MdOutlineLibraryBooks, MdOutlineLibraryMusic, MdSearch } from "react-icons/md";
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
          <MdOutlineHome
              className='btn'
              size={36}
              color='#B3B3B3'
            />
        </Box>

        <Box
          display={['none', 'none', 'block']}
        >
          <MdOutlineHome
              className='btn'
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
                className='btn'
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdSearch
                className='btn'
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
          <MdOutlineFavoriteBorder
              className='btn'
              size={36}
              color='#B3B3B3'
            />
        </Box>

        <Box
          display={['none', 'none', 'block']}
        >
          <MdOutlineFavoriteBorder
              className='btn'
              size={30}
              color='#B3B3B3'
            />
        </Box>

      </ListTile>

      <ListTile text={'Library'} link={'/library'} askLogin={true}>
        {/* display d/t Icon sizes at view ports */}
        <Box
            display={['none', 'block', 'none']}
          >
            <MdOutlineLibraryMusic
                className='btn'
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdOutlineLibraryMusic
                className='btn'
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
                className='btn'
                size={36}
                color='#B3B3B3'
              />
          </Box>

          <Box
            display={['none', 'none', 'block']}
          >
            <MdAdd
                className='btn'
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