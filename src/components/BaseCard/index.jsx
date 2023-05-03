import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Box, Card, Image, Heading, Text} from "rebass";
import { color, fontFamily, fontSize } from "styled-system";
import { playSong } from "../../app/features/song/songSlice";

const BaseCard = ({title, imageUrl, artist, id, album, duration, genre}) => {
  const BasicCard = styled(Card)`
    ${color}
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 7px;
    &:hover {
      cursor: pointer;
      outline: 2px solid green;
      background: #181818;
      transition: 200 all ease;
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

  const disptch = useDispatch();

  const startPlay = () => {
    disptch(playSong({title, artist, imageUrl, album, duration, genre, id}));
  }

  return (
    <BasicCard
      onClick={startPlay}
      alignItems='center'
      width={['200px']}
      color='textPrimary'
      p='15px'
      bg='cardDark'
      >
      <Image 
        height='170px'
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
            fontSize='sm'
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

    </BasicCard>
  )
}

export default BaseCard