import styled from "@emotion/styled"
import { MdHome, MdSearch } from "react-icons/md";
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
      width={['auto', '100px', '20%']}
      flexDirection='column'
      alignItems='center'
      sx={{
        gap: '10px',
      }}
    >

    {/* Home and search container */}
    <TopContainer
      flexDirection='column'
      py={'20px'}
      bg='sideBarBg'
      px={'20px'}
      my={'10px'}
      alignItems={['', 'center', 'start']}
    >
      <ListTile text={'Home'}>
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

      <ListTile text={'Search'}>
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


    </Container>
  )
}

export default index