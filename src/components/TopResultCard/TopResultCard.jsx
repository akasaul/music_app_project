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
    position: relative;
    height: 300px;
    &:hover {
      background: #282828;
      cursor: pointer;
    }

    &:hover .play_button_result {
      display: grid;
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
  right: 50px;
  bottom: 50px;
  display: none;

  &:hover {
    transform: scale(110%); 
    transition: all 200 ease-in-out;
    cursor: pointer;
  }
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
      position='relative'
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
        width={['40px', '40px', '50px']}
        height={['40px', '40px', '50px']}
        bg='secondary'
        sx={{placeContent: 'center'}}
        className='play_button_result'
        onClick={startPlay}

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