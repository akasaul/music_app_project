import './header.css';
import { Box, Button, Heading } from "rebass";
import {  MdOutlineNotifications, MdOutlineAlarm, MdOutlineSettings } from 'react-icons/md';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

const Header = () => {
  const  HeaderText = styled(Box)`
  `;
  const MyButton = styled(Button)`
    ${variant}
  `;

  const RightContainer = styled(Box)``;

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px='10px'
    >
      <HeaderText 
        py='1rem'
        fontSize={['md', 'lg']}
        fontFamily='dmSans'
        flex='1'
        fontWeight='semiBold'
        color='textPrimary'
      >
        Good Morning
      </HeaderText>

      <RightContainer
        display='flex'
        minWidth='130px'
        justifyContent='space-between'
      >
        <MdOutlineNotifications
          color='white'
          size={30}
        />
        <MdOutlineAlarm
          color='white'
          size={30}
        />
        <MdOutlineSettings
          color='white'
          size={30}
        />
      </RightContainer>

      {/* <Box
      >
        <MyButton
          variant='primary'
          color='black'
        >
          Sign Up
        </MyButton>
      </Box>  */}
    </Box>
  )
}

export default Header; 