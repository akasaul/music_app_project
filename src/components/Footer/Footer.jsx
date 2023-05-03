import styled from "@emotion/styled";
import { MdHome, MdLibraryMusic, MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Text } from "rebass";
import { buttonStyle, color} from "styled-system";

const Footer = () => {
  const Footer = styled(Flex)`
    ${color}
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
  `;

  const IconButton = styled(Button)`
    ${buttonStyle}
  `;


  const navigate = useNavigate();


  const handleClick = (link) => {
    navigate(link);
  }

  return (
    <Footer
      as='footer'
      bg='panel'
      color='textPrimary'
      justifyContent='space-around'
      display={['flex', 'none']}
    >
      <IconButton
        onClick={() => handleClick('/')}
        variant='iconButton'
      >
        <MdHome size={28} />
        <Text
          fontSize='xs'
        >
          Home
        </Text>
      </IconButton>

      <IconButton
        onClick={() => handleClick('/search')}
        variant='iconButton'
      >
        <MdOutlineSearch size={28} />
        <Text
          fontSize='xs'
        >
          Search
        </Text>
      </IconButton>

      <IconButton
        variant='iconButton'
        onClick={() => handleClick('/library')}
      >
        <MdLibraryMusic size={28} />
        <Text
          fontSize='xs'
        >
          Library
        </Text>
      </IconButton>


      

    </Footer>
  )
}

export default Footer