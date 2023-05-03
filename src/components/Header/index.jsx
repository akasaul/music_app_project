import './header.css';
import { Box, Button, Heading } from "rebass";
import {  MdOutlineNotifications, MdOutlineAlarm, MdOutlineSettings, MdOutlineLogin, MdLogout } from 'react-icons/md';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import TextButton from '../Buttons/TextButton';
import { useState } from 'react';
import LoginModal from '../LoginModal';
import useAuthStatus from '../../hooks/useAuthStatus';
import { Spinner } from "theme-ui";
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/features/auth/authSlice';
import { auth } from '../../firebase/firebase';

const Header = () => {
  const  HeaderText = styled(Box)``;
  const {isLoggedIn, isChecking } = useAuthStatus();

  // Modal State
  const [isOpen, setIsOpen] = useState(false);

  const RightContainer = styled(Box)``;

  const ProfileContainer = styled(Box)`
    background: #1ED760;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
  `;

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

  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(signOut());
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
        Good Day
      </HeaderText>

      {
        isLoggedIn && !isChecking ?
        <RightContainer
          display='flex'
          minWidth='130px'
          justifyContent='space-between'
        >
          <MdOutlineNotifications
            color='white'
            size={30}
            className='header_btn'
          />

          <ProfileContainer>
              {auth.currentUser.displayName[0]}
          </ProfileContainer>

          <MdLogout
            onClick={Logout}
            color='white'
            size={30}
            className='header_btn'
          />
        </RightContainer> :
        isChecking && !isLoggedIn ?
        <Spinner
          color='#1ED760'
        />
        :
        <Box
        >
          <TextButton onClick={onLogin}>
            Login
          </TextButton>
          <PrimaryButton btnText={'SignUp'} onClick={onSignUp} />
        </Box> 
      }

      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin} setIsLogin={setIsLogin} />
    </Box>
  )
}

export default Header; 