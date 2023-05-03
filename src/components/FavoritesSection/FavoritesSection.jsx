import styled from "@emotion/styled";
import { useEffect } from "react";
import { MdArrowCircleLeft, MdArrowForward, MdReadMore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnapCarousel } from "react-snap-carousel";
import { Box, Flex, Image, Link, Text } from "rebass";
import { color, fontSize, fontWeight } from "styled-system";
import { Spinner } from "theme-ui";
import { getAllReq } from "../../app/features/song/songSlice";
import { auth } from "../../firebase/firebase";
import useAuthStatus from "../../hooks/useAuthStatus"
import BaseCard from "../BaseCard";
import Slider from "../slider/Slider";

const FavoritesSection = () => {


  const {isChecking, isLoggedIn} = useAuthStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReq());
  }, [dispatch]);

  const { songs } = useSelector(state => state.song);
  const { favs } = useSelector(state => state.user);
  const navigate = useNavigate();


  if(isChecking) {
    return <Box>
            <Spinner 
              color='green'
            />
          </Box>
  }

  if(!isLoggedIn) {
    return;
  }

  const Title = styled(Text)`
  ${fontSize}
  ${fontWeight}
  ${color}
    fontSize: 24px;
    margin-block: 1rem;
  `;

  const More = styled(Text)`
    ${color}
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 1rem;
    &:hover {
      background: #303030;
      cursor: pointer;
    }
  `;

  const Header = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const handleClick = () => {
    navigate('/library');
  }

  return (
    <Box>
      <Header>
        <Title
          fontSize='md'
          fontWeight='700'
          color={'textPrimary'}
        >
          Songs You Like
        </Title>

        <More
          color='secondary'
          onClick={handleClick}
        >
            See All
          <MdArrowForward />
        </More>
      
      </Header>

      {
        favs.length === 0 &&
        <Flex
          alignItems={'center'}
          sx={{gap: '20px'}}
        >
          <Image
            src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'}
            height={'80px'}
          />
          <Text
            sx={{color: '#fff'}}
          >You have no favorites</Text>
        </Flex>
      }

      {
        isLoggedIn && favs.length !== 0 &&
          <Slider songs={songs.filter(song => favs.includes(song.id))}/>
      }
      

    </Box>
  )
}

export default FavoritesSection