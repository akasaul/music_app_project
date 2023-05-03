import styled from "@emotion/styled";
import { useEffect } from "react";
import { MdArrowCircleLeft, MdArrowForward, MdReadMore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnapCarousel } from "react-snap-carousel";
import { Box, Flex, Image, Text } from "rebass";
import { color, fontSize, fontWeight } from "styled-system";
import { Spinner } from "theme-ui";
import { getAllReq } from "../../app/features/song/songSlice";
import useAuthStatus from "../../hooks/useAuthStatus"
import BaseCard from "../BaseCard";
import Slider from "../slider/Slider";

const HiphopSection = () => {


  const {isChecking, isLoggedIn} = useAuthStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllReq());
  }, [dispatch]);

  const { songs } = useSelector(state => state.song);
  const { favs } = useSelector(state => state.user);

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
          All Out HipHop
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
        isLoggedIn &&
          <Slider songs={songs.filter(song => song?.genre?.toLowerCase()?.includes('hiphop'))}/>
      }

    </Box>
  )
}

export default HiphopSection