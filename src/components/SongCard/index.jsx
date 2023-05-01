import styled from "@emotion/styled";
import { MdPlayArrow, MdPlayCircle } from "react-icons/md";
import { Box, Button, Image, Text } from "rebass";
import { color, fontSize, fontWeight, grid } from "styled-system";
import './songCard.css';

const SongCard = () => {
  const CardText = styled(Text)`
    ${color}
    ${fontSize}
    ${fontWeight}
    `;
    
    const SongCardContainer = styled(Box)`
    ${color}
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  `

  const PlayButton = styled(Button)`
    ${color}
    border-radius: 50%;
    position: absolute;
    right: 1rem;
  `

  return (
    <SongCardContainer
      bg='songCardBg'
      display='flex'
      alignItems='center'
      flex='1'
      className='songCard'
      minWidth={'150px'}
    >
      <Image 
        mr={[2, 3]}
        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        height={['55px', '80px']}
        width={['55px', '80px']}
        sx={{
          objectFit: 'cover'
        }}
      />
      <CardText
        color='textPrimary'
        fontSize={['xs', 'sm']}
        fontWeight='semiBold'
      >
        J.Cole
      </CardText>


        <PlayButton
          width={['30px', '30px', '40px']}
          height={['30px', '30px', '40px']}
          bg='secondary'
          display={['none']}
          className='play_button'
          
          sx={{
            opacity: 0,
            placeContent: 'center',
            boxShadow: '5px 5px 10px #000'
          }}
        >
          <MdPlayArrow 
            color='black'
            size={40} 
          />
        </PlayButton>

    </SongCardContainer>
  )
}

export default SongCard