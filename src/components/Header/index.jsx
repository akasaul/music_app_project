import './header.css';
import { Box, Button, Flex, Heading, Image, Text } from "rebass";
import {  MdOutlineNotifications, MdOutlineAlarm, MdOutlineSettings, MdOutlineLogin, MdLogout, MdOutlineHdrPlus, MdAdd } from 'react-icons/md';
import styled from '@emotion/styled';
import { fontSize, fontWeight, variant } from 'styled-system';
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
import { useNavigate, Link } from 'react-router-dom';

const Header = ({isHome}) => {
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

  const LogoText = styled(Text)`
    ${fontWeight}
    ${fontSize}
    color: #fff;
  `;

  const Logo = styled(Flex)`
    align-items: center;
    cursor: pointer;
  `;
  
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <Box
      display='flex'  
      alignItems='center'
      justifyContent='space-between'
      px='10px'
      my={3}
    >
      {
        isHome ?
        <HeaderText 
          py='1rem'
          fontSize={['md', 'lg']}
          fontFamily='dmSans'
          flex='1'
          fontWeight='semiBold'
          color='textPrimary'
        >
          Good Day
        </HeaderText> : 
        <Logo
          onClick={navigateHome}
          sx={{gap: '10px'}}
        >
          <Image 
            p={'2px'}
            height={['45px']}
            src={'https://cdn-icons-png.flaticon.com/512/733/733629.png?w=740&t=st=1683133883~exp=1683134483~hmac=aabbec39296eec0e14eb112817017df1c3b39a643ecb19f3f2edfb53cbc43da5'}
            sx={{background: '#1ED760', borderRadius: '50%'}}
            />
        </Logo>
      }

      {
        isLoggedIn && !isChecking ?
        <RightContainer
          display='flex'
          minWidth='130px'
          justifyContent='space-between'
        >
          <Link to='/add-song'>
            <MdAdd
              color='white'
              size={30}
              className='header_btn'
            />
          </Link>

          <ProfileContainer>
              {auth.currentUser?.displayName?.at(0)?.toUpperCase()}
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