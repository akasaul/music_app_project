import { Box } from "rebass";
import BasicCard from "../BaseCard/BaseCard";
import Header from '../Header/Header';
import PlayListCard from "../PlaylistCard/PlayListCard";
import SongCard from "../SongCard/SongCard";
import BaseCard from "../BaseCard/BaseCard";

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