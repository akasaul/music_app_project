import styled from "@emotion/styled"
import { useState } from "react";
import { MdClose, MdExpandLess, MdExpandMore, MdFavorite, MdFavoriteBorder, MdMore, MdOutlineFavorite, MdOutlinePlayArrow, MdPause, MdPlayArrow, MdPlayCircle, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "rebass"
import { display, fontSize, position } from "styled-system";
import { Image } from "theme-ui";
import { stopSong } from "../../app/features/song/songSlice";
import { setFavs, setFavsReq } from "../../app/features/user/userSlice";
import useAuthStatus from "../../hooks/useAuthStatus";
import { formatTime } from "../../utils/formatTime";
import LoginModal from "../LoginModal";
import './songPlayfooter.css';

const SongPlayerFooter = () => {
  const SongPlayer = styled(Box)`
    position: fixed;
    left: 10px;
    right: 10px;
    border-radius: 5px;
    padding: 5px;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid green;
    ${position}
    ${display}
  `;

  const SongPlayerDesktop = styled(SongPlayer)`
    border: none;
    justify-content: space-between;
    align-items: start;
  `;

  const Title = styled(Text)`
    ${fontSize}
  `;

  const PlayProgress = styled(Box)`
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background: #4D4D4D;
  `;

  const Timer = styled(Text)`
    ${fontSize}
  `;

  const [ play, setPlay ] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const { favs } = useSelector(state => state.user);
  const {isLoggedIn} = useAuthStatus();


  const { song, isPlaying } = useSelector(state => state.song);

  const SongInfo = styled(Flex)`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 5px;
    border-radius: 5px;
    width: 60%;
  `;

  if(!song || !isPlaying) {
    return;
  }


  const toggleFav = () => {
    if(!isLoggedIn) {
      setOpenModal(true);
      return;
    }
    dispatch(setFavsReq(song.id));
  }

  const closePlayer = () => {
    dispatch(stopSong());
  }


  return (
    <>
      <SongPlayer
        bottom={['60px', '0px']}
        bg={'primary'}
        color={'textPrimary'}
        display={['flex', 'flex', 'none']}
      >
        <Image
          src={song.imageUrl}
          height={'100%'}
          width={['40px', '70px']}
          sx={{
            borderRadius: '10px'
          }}
        />


        <Flex
          flexDirection='column'
        >
          <Title
            fontSize={['xs']}
          >
              {song.title}
          </Title>

          <Text>
              {song.artist}
          </Text>

        </Flex>

        <Flex 
          alignItems='center'
          sx={{
            gap: '10px'
          }}
        >
          <MdFavoriteBorder 
            size={24}
          />
          {
            isPlaying ?
            <MdPause 
              size={26}
            /> :
            <MdPlayArrow 
              size={26}
            />
          }
        </Flex>
      </SongPlayer>

      <SongPlayerDesktop
        bottom={['60px', '0px']}
        bg={'primary'}
        color={'textPrimary'}
        display={['none', 'none','flex']}
        sx={{
          height: expand ? '125px' : '80px',
          zIndex: 10  
        }}
      >

        <Flex
          sx={{
            gap: '30px',
          }}
        >
          <Image
            src={song.imageUrl}
            height={'100%'}
            width={['60px']}
            sx={{
              borderRadius: '10px',
            }}
          />

          <Flex
            alignItems='center'
            sx={{
              gap: '20px',
            }}
          >

            <Flex
              flexDirection='column'
            >
              <Title
                fontSize={['xs']}
              >
                  {song.title}
              </Title>

              <Title>
                  {song.artist}
              </Title>

            </Flex>

            {
              favs.includes(song.id) ?
              <MdFavorite 
                onClick={toggleFav}
                size={24}/>
                :
                <MdFavoriteBorder 
                onClick={toggleFav}
                size={24}/> 
            }
            
          </Flex>

        </Flex>

        <Flex
          flexDirection='column'
          alignItems='center'
          sx={{
            gap: '10px',
            flex: '0.7'
          }}
        >

          <Flex
          alignItems='center'
          sx={{
            gap: '20px'
          }}
          >
            <MdSkipPrevious size={36} className='btn' />
            <MdPlayCircle size={42}
              className="play_button"
            />
            <MdSkipNext size={36} className='btn' />
          </Flex>

          <Flex
            flex='1'
            width='100%'
            alignItems='center'
            sx={{
              gap: '20px'
            }}
          >
            <Timer
              fontSize={['12px']}
            >
              0:00
            </Timer>
            <PlayProgress>
            </PlayProgress>
            <Timer
              fontSize={['12px']}
            >
              {formatTime(song.duration)}
            </Timer>

          </Flex>
        </Flex>

        <Flex 
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          sx={{
            gap: '10px'
          }}
        >
          {
            expand ?
            <MdExpandLess size={32}  onClick={() => setExpand(false)} style={{cursor: 'pointer'}} /> : 
            <MdExpandMore size={32}  onClick={() => setExpand(true)} style={{cursor: 'pointer'}} /> 
          }

          <MdClose size={24} style={{cursor: 'pointer'}}
            onClick={closePlayer}
          />
        </Flex>
        
        {
          expand &&
          <SongInfo
            sx={{
              gap: '10px'
            }}
          >
            <Text
              sx={{
                fontSize: '14px'
              }}
            >
              More Info: 
            </Text>
            <Box>
              <Text
                sx={{
                  fontSize: '14px'
                }}
              >
                Album: {song.album}
              </Text>

              <Text
                sx={{
                  fontSize: '14px'
                }}
              >
                Genre: {song.genre}
              </Text>
            </Box>
          </SongInfo>
        }

      </SongPlayerDesktop>
      <LoginModal isOpen={openModal} setIsOpen={setOpenModal} />
    </>
  )
}

export default SongPlayerFooter