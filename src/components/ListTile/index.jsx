import { Flex, Text } from "theme-ui"
import { color, display, fontWeight } from "styled-system";
import styled from "@emotion/styled";
import { MdHome, MdMore } from "react-icons/md";
import { Button, Link } from "rebass";
import { useNavigate } from "react-router-dom";


const ListTile = ({text, link, children}) => {

  const TileText = styled(Text)`
  ${color}
  ${display}
  ${fontWeight}
  `;

  const ListTile = styled(Flex)`
    align-items: center;
    &:hover > * {
      color: white;
      cursor: pointer;
    }
  `;

  const ListTileContainer = styled(Link)`
    &:hover > * {
      color: white;
    }
  `;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  }

  return (
    <ListTileContainer
      onClick={onClick}
    >

      <ListTile
          alignItems='center'
          className='list_tile'
          sx={{
            gap: '10px'
          }}
        >
          {children}
          <TileText
            color='textSecondary'
            fontSize='sm'
            fontWeight='bold'
            display={['none', 'none', 'block']}
          >
            {text}
          </TileText>
        </ListTile>  

    </ListTileContainer>
  )
}

export default ListTile