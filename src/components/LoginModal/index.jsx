import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import { FaSpotify } from 'react-icons/fa';
import { fontSize, maxWidth, position, width,
  variant, color } from "styled-system";
import { MdOutlineAccountCircle, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";
import { useRef} from "react";
import { Input } from "theme-ui";
import BaseInputWrapper from "../BaseInput";
import SubmitButton from "../Buttons/SubmitButton";

const LoginModal = ({isOpen, setIsOpen}) => {

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
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
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


          <BaseInputWrapper>
            
            <BaseInput 
              ref={passwordRef}
              placeholder={'Password'}
              name={'password'}
              variant='primary'
              fontSize={['xs', 'sm']}
            />
            <MdVisibilityOff 
              size={28}
              color='#7C7C7C'
            />

        </BaseInputWrapper>

          <SubmitButton
            styles={{
              marginTop: '1rem'
            }}
          >
            Continue
          </SubmitButton>

        </Container>

    </InputContainer>

    <button
      onClick={() => setIsOpen(false)}
    >Back</button>
        
  </Modal>
    
  </>
  )
}

export default LoginModal