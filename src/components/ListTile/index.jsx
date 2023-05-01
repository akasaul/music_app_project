import { Flex, Text } from "theme-ui"
import { color, display, fontWeight } from "styled-system";
import styled from "@emotion/styled";
import { MdHome } from "react-icons/md";


const index = ({text, children}) => {

  const TileText = styled(Text)`
  ${color}
  ${display}
  ${fontWeight}
  `;

  const ListTile = styled(Flex)`
    align-items: center;
  `;
  return (
    <div>
      
      <ListTile
          alignItems='center'
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

    </div>
  )
}

export default index