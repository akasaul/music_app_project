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
    >
      <Header  isHome={true} />
    </Box>
  )
}

export default Navbar