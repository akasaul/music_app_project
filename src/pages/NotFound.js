import styled from "@emotion/styled"
import { Link } from "react-router-dom";
import { Box, Image, Text } from "rebass"
import { color } from "styled-system";

const NotFound = () => {
  const ErrorText = styled(Text)`
    ${color}
  `;
  return (
    <Box
      width='100%'
      height='70vh'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        placeContent: 'center',
        gap: '1rem'
      }}
    >
      <Image
        height={'150px'} 
        src={'https://cdn-icons-png.flaticon.com/512/408/408697.png?w=740&t=st=1683050602~exp=1683051202~hmac=b2742b98226da86801474ffa532a4b203cb68486ee2fb1780eba6c9275272bf9'} 
      />    
      <ErrorText
        color='textPrimary'
        textAlign='center'
      >Looks Like you are lost</ErrorText>
      <Link to='/' style={{color: '#fff', textAlign: 'center'}}>Home</Link>
    </Box>
  )
}

export default NotFound