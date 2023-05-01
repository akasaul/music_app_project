import styled from "@emotion/styled";
import { Flex } from "rebass";

// Gives neccessary styling for input
const BaseInputWrapper = ({children}) => {
  const Container = styled(Flex)`
  `;

  return  (
    <Container
      alignItems='center'
      bg='inputBg'
      p='5px'
      width={['250px', '250px', '350px', '400px']}
      >
      {children}
    </Container>
  );
}

export default BaseInputWrapper