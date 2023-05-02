import styled from "@emotion/styled";
import { MdPlayArrow, MdPlayCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Box, Button, Flex, Image, Text } from "rebass";
import { color, fontSize, fontWeight, grid } from "styled-system";
import { playSong } from "../../app/features/song/songSlice";
import './songCard.css';

const SongCard = ({artist, id, imageUrl, title, album, duration, genre}) => {
  const CardText = styled(Text)`
    ${color}
    ${fontSize}
    ${fontWeight}
    `;

    const CardSubtitle = styled(Text)`
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
  
  const disptch = useDispatch();

  const startPlay = () => {
    disptch(playSong({title, artist, imageUrl, album, duration, genre, id}));
  }

  return (
    <SongCardContainer
      onClick={startPlay}
      bg='songCardBg'
      display='flex'
      alignItems='center'
      flex='1'
      className='songCard'
      minWidth={'150px'}      
    >
      <Image 
        mr={[2, 1, 3]}
        src={imageUrl}
        height={['55px', '55px', '80px']}
        width={['55px', '55px', '80px']}
        sx={{
          objectFit: 'cover'
        }}
      />
      <Flex
        flexDirection='column'
      >
        <CardText
          color='textPrimary'
          fontSize={['xs', 'xs', 'xs', 'sm']}
          fontWeight='semiBold'
        >
          {artist}
        </CardText>

        <CardSubtitle
          color='textSecondary'
        fontSize={['xs', 'xs', 'xs']}
          display={['none', 'none', 'block']}
        >
          {title}
        </CardSubtitle>

      </Flex>

      <PlayButton
        width={['30px', '30px', '40px']}
        height={['30px', '30px', '40px']}
        bg='secondary'
        display={['none']}
        className='play_button'
        onClick={startPlay}
        
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