import styled from "@emotion/styled";
import { Box, Flex, Text } from "rebass";
import { FaSpotify } from 'react-icons/fa';
import { fontSize, maxWidth, position, width,
  variant, color } from "styled-system";
import { MdOutlineAccountCircle, MdOutlineEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRef, useState} from "react";
import { Input } from "theme-ui";
import BaseInputWrapper from "../BaseInput";
import SubmitButton from "../Buttons/SubmitButton";
import TextButton from "../Buttons/TextButton";
import { setUserData, signInRequest, signUpRequest } from "../../app/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Label, Checkbox } from "theme-ui";

const LoginModal = ({isOpen, setIsOpen, isLogin, setIsLogin}) => {

  const BaseInput = styled(Input)`
  ${variant}
  ${color}
  ${fontSize}
  &:focus {
    outline: none;
    border: none;
  }
`;

const Container = styled(Flex)`
  gap: 10px;
`;

  const Overlay = styled(Box)`
    position: fixed;
    background: #fff;
    opacity: 0.15;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(5px);
    z-index: 1;
  `;
  
  const Modal = styled(Box)`
      ${position}
      min-width: 300px;
      background: #000;
      position: fixed;
      gap: 20px;
      z-index: 99;
      top: 0;
      bottom: 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;   
      align-items: center;
      overflow-y: scroll;
      ::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */  
  `;

  const Header = styled(Box)`
    ${fontSize}
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 10px;
    padding: 24px;
  `;


  const HeaderText = styled.h2`
    ${fontSize}
    ${width}
    ${maxWidth}
    text-align: center;
    color: white;
  `;

  const InputContainer = styled(Flex)`
    ${maxWidth}
    gap: 15px;
  `
  const BottomText = styled(Text)`
    ${color}
  `;


  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  // Show Password
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, erroMsg } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {

    e.preventDefault(); 

    dispatch(setUserData({email: emailRef.current.value, name: nameRef.current?.value, password: passwordRef.current.value}));
    
    // Check if req is Sign in or Sign up
    if(isLogin) {
      dispatch(signInRequest());
    } else {
      // TODO: Login request
      dispatch(signUpRequest());
    }
  }

  if(!isOpen) {
    return;
  }

  return (
    <>
    <Overlay>
    </Overlay>
    
      <Modal
        left={['50px', '20%']}
        right={['50px', '20%']}
      >
        <Header
          as='header'
          fontSize={['28px']}
        >
        <FaSpotify 
          color='white'
          size={45}
        />
        Nikofy
        </Header>

        <HeaderText
          maxWidth={['250px', '350px']}
          fontSize={['24px', '32px']}
        >
          Start listening with a free Nikofy account
        </HeaderText>

        <InputContainer
          flexDirection='column'  
          alignItems='center'
        >
          
        <Container
          as='form'
          onSubmit={handleSubmit}
          flexDirection='column'
        >
            <BaseInputWrapper>

                <BaseInput 
                  ref={emailRef}
                  placeholder={'Email'}
                  name={'email'}
                  variant='primary'
                  fontSize={['xs', 'sm']}
                />
                <MdOutlineEmail 
                  size={28}
                  color='#7C7C7C'
                />

            </BaseInputWrapper>

            {
              !isLogin &&
              <BaseInputWrapper>
              
                <BaseInput 
                  ref={nameRef}
                  placeholder={'What should we call you'}
                  name={'name'}
                  variant='primary'
                  fontSize={['xs', 'sm']}
                />
                <MdOutlineAccountCircle 
                  size={28}
                  color='#7C7C7C'
                />

            </BaseInputWrapper>
            }


          <BaseInputWrapper>
            
            <BaseInput 
              ref={passwordRef}
              placeholder={'Password'}
              name={'password'}
              variant='primary'
              type={showPassword ? 'text' : 'password'}
              fontSize={['xs', 'sm']}
            />
            {
              showPassword ?
              <MdVisibility 
              size={28}
              color='#7C7C7C'
              onClick={() => setShowPassword(false)}
            />
              :
              <MdVisibilityOff 
                size={28}
                color='#7C7C7C'
                onClick={() => setShowPassword(true)}
              />
            }

        </BaseInputWrapper>

          <SubmitButton
            styles={{
              marginTop: '1rem'
            }}
          >
            Continue
          </SubmitButton>

        </Container>


        <Flex
          alignItems='center'
          justifyContent='space-between'
          sx={{
            width: '100%',
            gap: '10px'
          }}
        >
          <BottomText
            bg='inputBg'
            sx={{
              height: '1px',
              width: '100%'
            }}
          ></BottomText>

          <Box
            color='textSecondary'
            m={4}
            sx={{
              color: 'white'
            }}
          >
            OR
          </Box>

          <BottomText
            bg='inputBg'
            sx={{
              height: '1px',
              width: '100%'
            }}
          ></BottomText>

        </Flex>


        <Box>
          <Label
            color="textPrimary"
            fontSize={['xs', 'sm']}
          >
            <Checkbox
              onChange={e => console.log(e.target.value)}
              id='remember'
              name='remember'
            />
            I agree with the terms and Conditions of Use and Privacy Policy.
          </Label>
        </Box>
        
        {
          isLogin ?
          <BottomText
          color='textPrimary'
        >
          Not Joined Us Yet? 
        <TextButton
          onClick={() => setIsLogin(false)}
        >
            SignUp
        </TextButton>
        </BottomText> :

        <BottomText
          color='textPrimary'
        >
          Already on Nikofy? 
          <TextButton
          onClick={() => setIsLogin(true)}
          >
          LogIn
        </TextButton>
        </BottomText>

        }


    </InputContainer>

    <TextButton
      onClick={() => setIsOpen(false)}
    >Back</TextButton>

    {
      isLoading &&
      <h1 style={{color: 'white'}}>Loading...</h1> 
    }
        
  </Modal>
    
  </>
  )
}

export default LoginModal