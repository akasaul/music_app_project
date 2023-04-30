import './header.css';
import { Box, Button, Heading } from "rebass";
import {  MdOutlineNotifications, MdOutlineAlarm, MdOutlineSettings } from 'react-icons/md';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import TextButton from '../Buttons/TextButton';
import { useState } from 'react';
import LoginModal from '../LoginModal';

const Header = () => {
  const  HeaderText = styled(Box)``;

  // Modal State
  const [isOpen, setIsOpen] = useState(false);

  const RightContainer = styled(Box)``;

  // Toggle Login Page
  const [isLogin, setIsLogin] = useState(false);

  const onLogin = () => {
    setIsOpen(true);
    setIsLogin(true);
  }

  const onSignUp = () => {
    setIsOpen(true);
    setIsLogin(false);
  }

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

      {/* <RightContainer
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
      </RightContainer> */}

      <Box
      >
        <TextButton onClick={onLogin}>
          Login
        </TextButton>
        <PrimaryButton btnText={'SignUp'} onClick={onSignUp} />
      </Box> 

        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin} setIsLogin={setIsLogin} />
    </Box>
  )
}

export default Header; 