import styled from '@emotion/styled'
import { Box, Flex, Image, Text } from 'theme-ui'
import { formatTime } from '../../utils/formatTime';

const SearchResult = ({title, imageUrl, duration, artist, album, setFormData, formData}) => {
  const Container = styled(Box)`
    background: #323232;
    &:hover {
      cursor: pointer;
    }
  `;
  
  const MusicSearchResult = styled(Box)`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    max-width: 400px;
    margin-inline: auto;
  `;

  const Avatar = styled(Image)`
    border-radius: 50%;
  `;

  const Artist = styled(Text)`
      color: #1ED760
  `;

  const Title = styled(Text)`
  `;

  const SongInfo = styled(Flex)`
    flex-direction: column;
    align-items: start;
    margin-inline: 1rem;
  `;

  const TimeInfo = styled(Flex)`
  flex-direction: column;
  align-items: end;
  flex: 1;
  color: #1ED760;
  padding-inline: 10px;
  `;


  let time;

  if(duration) {
    time = formatTime(duration)
  }

  const handleClick = (e) => {
    setFormData({
      ...formData, 
      title,
      duration, 
      artist,
      album,  
      imageUrl
    })
  }

  return (
    <Container
      onClick={handleClick}
    >
      <MusicSearchResult
        my={'5px'}
      >
        <Avatar
          src={imageUrl}
          height={'50px'}
          width={'50px'}
          p={'3px'}
        >
        </Avatar>

        <SongInfo>  
          <Title
            style={{
              color: 'white'
            }}>
              {title?.length > 15 ? `${title?.slice(0, 15)}...` : title }
            </Title>

          <Artist>
            {artist?.length > 15 ? `${artist?.slice(0, 15)}...` : artist }
          </Artist>

        </SongInfo>

        <TimeInfo>  
          
        <Title
            style={{
              color: 'white'
            }}
          >{album?.length  > 15 ? `${album?.slice(0, 15)}...` : album}</Title>
            {time}
        </TimeInfo>
          
      </MusicSearchResult>
    </Container>
  )
}

export default SearchResult