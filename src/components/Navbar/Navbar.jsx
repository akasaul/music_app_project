import { Box } from "rebass";
import BasicCard from "../BaseCard";
import Header from '../Header';
import PlayListCard from "../PlaylistCard";
import SongCard from "../SongCard";
import BaseCard from "../BaseCard";

const Navbar = () => {

  return (
    <Box
      as='nav'
      width='100%'
      flex={['none', '1']}
    >
      <Header />
      {/* Navbar */}
      <BasicCard />


      <div style={{
        display: 'flex',
        gap: '1rem'

      }}>
        {/* <SongCard />
        <SongCard />
        <SongCard /> */}
        <PlayListCard />
      </div>
    </Box>
  )
}

export default Navbar