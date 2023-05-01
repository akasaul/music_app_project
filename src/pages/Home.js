import NavBar from '../components/Navbar/Navbar';
import { Box } from "rebass";
import RecentSongs from '../components/RecentSongs/RecentSongs';
import SongPlayerFooter from '../components/SongPlayerFooter/SongPlayerFooter';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import '../App.css';

const Home = () => {

  const Home = styled(Box)`
    ${color}
    margin-top: 10px;
  `;
  
  return (
    <Home
      display='flex'
      flex='1'
      flexDirection='column'
      className='home'
    >
      <NavBar />
      <RecentSongs />
      <SongPlayerFooter />
    </Home>
  )
}

export default Home