import NavBar from '../components/Navbar/Navbar';
import { Box } from "rebass";
import RecentSongs from '../components/RecentSongs/RecentSongs';
import FavoritesSection from '../components/FavoritesSection/FavoritesSection';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import '../App.css';

const Home = () => {

  const Home = styled(Box)`
    ${color}
    margin-top: 10px;
    max-width: 950px;
    
  `;
  
  return (
    <Home
      display='flex'
      flex='1'
      flexDirection='column'
      className='home'
      sx={{
        gap: '20px'
      }}
    >
      <NavBar />
      <RecentSongs />
      <FavoritesSection />
    </Home>
  )
}

export default Home