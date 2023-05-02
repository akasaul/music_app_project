import styled from '@emotion/styled';
import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Image, Text } from 'rebass';
import { color, fontFamily, fontSize, fontWeight } from 'styled-system';
import { setFavsReq } from '../../app/features/user/userSlice';
import { formatTime } from '../../utils/formatTime';

const SongTile = ({imageUrl, title, duration, artist, album, index, id}) => {
  const Tile  = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin-inline: auto;
  `;
  
  
  const No = styled(Box)`
    ${color}
    ${fontFamily}
  `;

  const SongTitle = styled(Text)`
    ${color}
    ${fontSize}
    ${fontWeight}
  `;

  const Time = styled(Text)`
    ${color}
    ${fontWeight}
  `;

  const ArtistName = styled(Text)`
    ${color}
    ${fontWeight}  
  `;

  // Song duration formatted
  const time = formatTime(duration);

  const dispatch = useDispatch();
  const {favs} = useSelector(state => state.user);

  const toggleFav = () => {
    if(id) {
      dispatch(setFavsReq(id));
    }
  }

  return (
    <Tile
      sx={{
        gap: '20px',
        p: '8px'
      }}
    >
      <No
        color='textPrimary'
        fontFamily='dmSans'>
        {index + 1}
      </No>

      <Flex
        sx={{
          flex: '1',
          gap: '20px'
        }}
      >

        <Image height={['40px']} src={imageUrl} />

        <Flex
          flexDirection='column'
        >

          <SongTitle
            color='textPrimary'
            fontWeight='semiBold'
            fontSize={['xs']}
          >
            {title}
          </SongTitle>
          
          <ArtistName
            color='textSecondary'
          >
            {artist}
          </ArtistName>
          
        </Flex>
      </Flex>

      <Time
        color='textSecondary'
        fontWeight='500'
        flex='1'
        display={['none', 'none', 'block']}
      >
        {album.length > 13 ? `${album.slice(0, 13)}..`: album }
      </Time>

      {
        favs.includes(id) ?
        <MdFavorite 
          onClick={toggleFav}
          color='#1ED760'
          size={20}
        /> :

        <MdFavoriteBorder 
          onClick={toggleFav}
          color='#1ED760'
          size={20}
        /> 
      }


      <Time
        color='textSecondary'
        fontWeight='500'
      >
        {time}
      </Time>

    </Tile>
  )
}

export default SongTile