import styled from '@emotion/styled';
import React, { useState } from 'react'
import { MdDelete, MdEdit, MdFavorite, MdFavoriteBorder, MdMore, MdMoreVert } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Image, Text } from 'rebass';
import { color, flex, fontFamily, fontSize, fontWeight } from 'styled-system';
import { deleteSongReq } from '../../app/features/song/songSlice';
import { setFavsReq } from '../../app/features/user/userSlice';
import { formatTime } from '../../utils/formatTime';
import './SongTile.css';

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

  const [showOption, setShowOption] = useState(false);

  const toggleOption = () => {
    setShowOption(option => !option);
  }

  const ListButton = styled(Button)`
    background: #000;
    width: 100%;
    font-weight: 400;
    align-items: center;
    color: #B3B3B3;
    ${flex}

    &:hover {
      background: #181818;
      color: #fff;
      cursor: pointer;
    }
  `;

  const navigate = useNavigate();

  const editItem = () => {
    navigate(`/edit-song?id=${id}&&imageUrl=${imageUrl}&&title=${title}&&artist=${artist}&&album=${album}&&duration=${duration}`)
  }

  const deleteItem = () => {
    dispatch(deleteSongReq(id));
  }

  return (
    <Tile
      sx={{
        gap: '20px',
        p: '8px',
        position: 'relative'
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
        display={['none', 'none', 'none', 'block']}
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

      <button
        className='more'
        onClick={toggleOption}
      >
        <MdMoreVert 
          color='white'
        />
      </button>

      {
        showOption &&
        <Box className='more_options'>

          <ListButton
            color='white'
            display='flex'
            justifyContent='space-between'
            onClick={editItem}
          >
            <Text>
              Edit
            </Text>

            <MdEdit />
          </ListButton>
          <ListButton
            color='white'
            display='flex'
            justifyContent='space-between'
            onClick={deleteItem}
          >
            <Text>
              Delete
            </Text>

            <MdDelete />
          </ListButton>
        </Box>
      }


    </Tile>
  )
}

export default SongTile