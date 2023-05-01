import styled from "@emotion/styled"
import { useState } from "react";
import { MdExpandLess, MdExpandMore, MdFavorite, MdFavoriteBorder, MdMore, MdOutlineFavorite, MdOutlinePlayArrow, MdPause, MdPlayArrow, MdPlayCircle, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useSelector } from "react-redux";
import { Box, Button, Flex, Text } from "rebass"
import { display, fontSize, position } from "styled-system";
import { Image } from "theme-ui";
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
    height: 80px;
    border: none;
    justify-content: space-between;
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

  const { song, isPlaying } = useSelector(state => state.song);


  if(!song || !isPlaying) {
    return;
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

            <MdFavoriteBorder 
                  size={24}
                />

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
              3:30
            </Timer>

          </Flex>
        </Flex>

        <Flex 
          alignItems='center'
          sx={{
            gap: '10px'
          }}
        >
          <MdExpandLess size={32} /> 
        </Flex>


      </SongPlayerDesktop>
    </>
  )
}

export default SongPlayerFooter