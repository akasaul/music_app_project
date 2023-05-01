import styled from "@emotion/styled";
import { useState } from "react";
import { MdHome, MdLibraryMusic, MdOutlineLibraryBooks, MdOutlineSearch } from "react-icons/md";
import { Button, Flex, Text } from "rebass";
import { buttonStyle, color, fontSize} from "styled-system";

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

  const IconText = styled(Text)`
    ${fontSize}
  `;

  return (
    <Footer
      as='footer'
      bg='panel'
      color='textPrimary'
      justifyContent='space-around'
      display={['flex', 'none']}
    >
      <IconButton
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