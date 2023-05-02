import styled from "@emotion/styled";
import { MdPlayArrow, MdPlayCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Box, Card, Image, Heading, Text, Button} from "rebass";
import { color, fontFamily, fontSize } from "styled-system";
import { playSong } from "../../app/features/song/songSlice";
import '../SongCard/songCard.css';


const TopResultCard  = ({title, imageUrl, artist, album, duration, genre, id}) => {
  const TopCard = styled(Box)`
    ${color}
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 7px;
    &:hover {
      background: #282828;
      cursor: pointer;
    }
  `;

  const CardHeading = styled(Heading)`
    ${fontFamily}
    ${fontSize}
  `;

  const CardBody = styled(Text)`
    ${color}
    ${fontSize}
  `;

  const PlayButton = styled(Button)`
  ${color}
  border-radius: 50%;
  position: absolute;
  right: 1rem;
  `

  const dispatch = useDispatch();

const startPlay = () => {
  dispatch(playSong({title, artist, imageUrl, album, duration, genre, id}));
}


  return (
    <TopCard
      onClick={startPlay}
      alignItems='start'
      color='textPrimary'
      p='25px'
      bg='cardDark'
      >
      <Image 
        height='120px'
        width='120px'
        src={imageUrl}
        sx={{
          objectFit: 'cover',
          borderRadius: '4px'
        }}
        />

      <Box
        display='flex'
        flexDirection='column'
        alignSelf='start'
      >
          <CardHeading
            fontFamily='dmSans'
            fontSize={['sm', 'lg']}
          >
              {title}
          </CardHeading>

          <CardBody 
            color='textSecondary'
            fontSize='xs'
          >
            {artist}
          </CardBody>
      </Box>


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

    </TopCard>
  )
}

export default TopResultCard  