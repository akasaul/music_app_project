import NavBar from '../components/Navbar/Navbar';
import { Box } from "rebass";
import RecentSongs from '../components/RecentSongs/RecentSongs';

const Home = () => {
  
  return (
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
    >
      <NavBar />
      <RecentSongs />
    </Box>
  )
}

export default Home